import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import { Bar } from "react-native-progress";
import colors from "../config/colors";
import LottieView from "lottie-react-native";

const UploadScreen = ({ onDone, progress = 0, visible = false }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Bar color={colors.primary} progress={progress} width={200} />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            source={require("../assets/animations/done")}
            style={styles.animation}
            onAnimationFinish={onDone}
          />
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  animation: {
    width: 150,
  },
});

export default UploadScreen;
