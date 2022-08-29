import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { colors } from "../utils/Colors";
import Icon from "react-native-vector-icons/FontAwesome";

export function RoundButton({
  iconName,
  iconSize,
  iconColor,
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
        <View style={{ padding: 20, alignItems: "center" }}>
          <Icon name={iconName} color={iconColor} size={iconSize} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 90,
    width: 70,
  },
});
