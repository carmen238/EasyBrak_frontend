import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { colors } from "../utils/Colors";
import Icon from "react-native-vector-icons/FontAwesome";
import { CustomText } from "./CustomText";

export function PrimaryButton({
  title,
  fontSize,
  textColor,
  colorCard,
  borderColorCard,
  buttonStyle,
  action,
  disabled,
}) {
  const { container } = styles;

  return (
    <View
      style={[
        buttonStyle,
        container,
        {
          backgroundColor: colorCard ? colorCard : colors.white,
          borderColor: borderColorCard ? borderColorCard : colors.black,
        },
      ]}
    >
      <TouchableOpacity onPress={action} disabled={disabled}>
        <View style={{ padding: 10, alignItems: "center" }}>
          <CustomText text={title} textColor={textColor} fontSize={fontSize} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    // flex: 1,
    height: 60,
    justifyContent: "flex-end",
  },
});
