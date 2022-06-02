import React from "react";
import LottieView from "lottie-react-native";

const AppActivityIndicator = ({ visible }) => {
  if (!visible) return null;

  return (
    <LottieView autoPlay loop source={require("../assets/animations/loader")} />
  );
};

export default AppActivityIndicator;
