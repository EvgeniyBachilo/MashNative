import React, { useRef } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

const ImageInputList = ({ uris, onRemoveImage, onAddImage }) => {
  const scrollView = useRef();
  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => {
          scrollView.current.scrollToEnd();
        }}
      >
        <View style={styles.container}>
          {uris.map((uri) => (
            <View style={styles.image} key={uri}>
              <ImageInput uri={uri} onChangeImage={() => onRemoveImage(uri)} />
            </View>
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
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
