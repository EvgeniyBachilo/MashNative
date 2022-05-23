import React from "react";
import { Image, View, StyleSheet, TouchableHighlight } from "react-native";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";
import colors from "../config/colors";

const ListItem = ({ image, title, subtitle, onPress, renderRightActions }) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor="lightgrey">
        <View style={styles.itemContainer}>
          <Image style={styles.image} source={image} />
          <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subtitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
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
