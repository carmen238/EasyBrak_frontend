/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 60 : 0;

export function IconText({
  iconName,
  iconSize,
  iconColor,
  text,
  textStyle,
  containerStyle,
  fontSize,
  textColor,
  disabled = true,
  action,
}) {
  const { container, appBar } = styles;

  return (
    <TouchableOpacity
      style={[container, containerStyle]}
      disabled={disabled}
      onPress={action}
    >
      <View style={{ marginRight: 9 }}>
        <Text style={([textStyle], { fontSize: fontSize, color: textColor })}>
          {text}
        </Text>
      </View>
      <Icon name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
