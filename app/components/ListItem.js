import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

const ListItem = ({ image, title, subtitle }) => {
  return (
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subtitle}</AppText>
      </View>
    </View>
  );
};
export default ListItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  },
});
