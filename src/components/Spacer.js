/* eslint-disable react/prop-types */
import React from "react";
import { View, StyleSheet } from "react-native";

export function Spacer({
  small,
  tiny,
  micro,
  large,
  extraLarge,
  size,
  index = Math.random(),
}) {
  return (
    <View
      index={index}
      style={[
        styles.regular,
        !!small && styles.small,
        !!tiny && styles.tiny,
        !!micro && styles.micro,
        !!large && styles.large,
        !!extraLarge && styles.extraLarge,
        !!size && { height: size },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  regular: {
    height: 24,
  },
  small: {
    height: 16,
  },
  tiny: {
    height: 12,
  },
  micro: {
    height: 8,
  },
  large: {
    height: 32,
  },
  extraLarge: {
    height: 40,
  },
});
