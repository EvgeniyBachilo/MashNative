import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";
import routes from "../navigation/routes";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen: "",
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES_SCREEN,
  },
];

const AccountScreen = ({ navigation }) => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Bachik"
          subtitle="klisk777@gmail.com"
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  backgroundColor={item.icon.backgroundColor}
                  name={item.icon.name}
                />
              }
              onPress={() => {
                navigation.navigate(item.targetScreen);
              }}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <ListItem
        title="LogOut"
        IconComponent={<Icon backgroundColor="#ffe66d" name="logout" />}
      />
    </Screen>
  );
};
export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});
