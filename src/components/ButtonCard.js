import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { colors } from "../utils/Colors";
import { IconText } from "./IconText";

export function ButtonCard({
  iconName,
  iconSize,
  iconColor,
  title,
  colorCard,
  borderColorCard,
  styleCard,
  action,
  textColor,
  fontSize,
}) {
  const { container } = styles;

  return (
    <View
      style={[
        styleCard,
        container,
        {
          backgroundColor: colorCard ? colorCard : colors.white,
          borderColor: borderColorCard ? borderColorCard : colors.black,
          borderWidth: 0.5,
        },
      ]}
    >
      <TouchableOpacity onPress={action}>
        <View style={{ padding: 20, alignItems: "center" }}>
          <IconText
            iconName={iconName}
            text={title}
            iconColor={iconColor}
            iconSize={iconSize}
            textColor={textColor}
            fontSize={fontSize}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
  },
});
