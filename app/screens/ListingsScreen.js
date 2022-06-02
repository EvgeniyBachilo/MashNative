import React, { useState, useEffect } from "react";

import Screen from "../components/Screen";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import AppActivityIndicator from "../components/AppActivityIndicator";

// const listings = [
//   {
//     id: 1,
//     title: "Red jacket",
//     price: 100,
//     image: require("../assets/jacket.jpg"),
//   },
//   {
//     id: 2,
//     title: "Couch in great condition",
//     price: 1000,
//     image: require("../assets/couch.jpg"),
//   },
// ];

const ListingsScreen = ({ navigation }) => {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadListings = async () => {
    setLoading(true);
    const response = await listingsApi.getListings();
    setLoading(false);

    if (!response.ok) {
      setError(true);
      return;
    }

    setError(false);
    setListings(response.data);
  };

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings</AppText>
          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}
      <AppActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() =>
              navigation.navigate(routes.LISTING_DETAILS_SCREEN, item)
            }
          />
        )}
      />
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
