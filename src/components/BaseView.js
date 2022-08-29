/* eslint-disable react/prop-types */
import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../utils/Colors";
import Icon from "react-native-vector-icons/FontAwesome";

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 60 : 0;

export function BaseView({ edges, children, safeAreaBgColor, baseViewColor }) {
  const { appBar } = styles;

  return (
    <SafeAreaView
      edges={edges || []}
      style={[
        { flex: 1 },
        { backgroundColor: safeAreaBgColor ? safeAreaBgColor : colors.blue200 },
      ]}
    >
      <View
        style={[
          appBar,
          {
            backgroundColor: baseViewColor ? baseViewColor : colors.blue600,
          },
        ]}
      />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appBar: {
    height: STATUSBAR_HEIGHT,
    zIndex: 2,
    position: "absolute",
    left: 0,
    right: 0,
  },
});
