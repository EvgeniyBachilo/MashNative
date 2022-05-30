import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import * as ImagePicker from "expo-image-picker";

const ImageInput = ({ uri, onChangeImage }) => {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const result = await ImagePicker.getMediaLibraryPermissionsAsync(true);
    if (!result.granted) {
      alert("give a permission!!");
    }
  };

  const handlePress = () => {
    if (!uri) {
      selectImage();
    } else {
      Alert.alert("Delete", "Are you sure you want to delete?", [
        {
          text: "Yes",
          onPress: () => {
            onChangeImage(null);
          },
        },
        { text: "No" },
      ]);
    }
  };
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (e) {
      console.log("Error choosing image");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {uri ? (
          <Image source={{ uri }} style={styles.image} />
        ) : (
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={colors.medium}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
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
