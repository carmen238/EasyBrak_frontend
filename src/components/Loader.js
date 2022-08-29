/* eslint-disable react/prop-types */
import React from "react";
import { StyleSheet } from "react-native";
import AnimatedLoader from "react-native-animated-loader";

export function Loader({ isVisible }) {
  return (
    <AnimatedLoader
      visible={isVisible}
      overlayColor="rgba(255,255,255,0.75)"
      source={require("/Users/ctrovato/Desktop/MyProjects/EasyBreakUi/src/source/loader.json")}
      animationStyle={styles.lottie}
      speed={1}
    />
  );
}

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
});
