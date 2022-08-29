import React from "react";
import { Text, View } from "react-native";

export function CustomText({
  text,
  center,
  textColor,
  fontSize = 24,
  underline,
  bold,
  containerStyle,
  marginVertical = 3,
}) {
  return (
    <View
      style={[
        containerStyle,
        {
          alignItems: !!center ? "center" : null,
          marginVertical: marginVertical,
        },
      ]}
    >
      <Text
        style={{
          fontSize: fontSize,
          color: textColor,
          fontWeight: !!bold ? "bold" : null,
          underline: !!underline ? true : null,
        }}
      >
        {text}
      </Text>
    </View>
  );
}
