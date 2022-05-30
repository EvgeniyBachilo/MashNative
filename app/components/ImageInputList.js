import React from "react";
import { StyleSheet, View } from "react-native";
import ImageInput from "./ImageInput";

const ImageInputList = ({ uris, onRemoveImage, onAddImage }) => {
  return (
    <View style={styles.container}>
      {uris.map((uri) => (
        <View style={styles.image} key={uri}>
          <ImageInput uri={uri} onChangeImage={() => onRemoveImage(uri)} />
        </View>
      ))}
      <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});

export default ImageInputList;
