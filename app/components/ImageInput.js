import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const ImageInput = ({ uri }) => {
  return (
    <View style={styles.container}>
      {uri ? (
        <Image source={{ uri }} style={styles.image} />
      ) : (
        <MaterialCommunityIcons name="camera" size={40} color={colors.medium} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.light,
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default ImageInput;
