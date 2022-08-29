import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../utils/Colors";

export function IconTextInput({
  defaultValue,
  value,
  iconSize = 16,
  iconColor,
  multiline,
  autoCapitalize,
  isError = false,
  isEditable = true,
  type,
  maxLength,
  placeholder,
  onPressIn = () => {},
  onChangeText = () => {},
  onBlur = () => {},
  onIconPress = () => {},
  onEndEditing = () => {},
  onFocus = () => {},
  autoFocus,
  secureText,
  iconName,
  showIcon = false,
  containerStyle,
}) {
  const { container } = styles;

  return (
    <View style={[container, containerStyle]}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureText}
        autoFocus={autoFocus}
        placeholderTextColor={colors.grey500}
        editable={isEditable}
        maxLength={maxLength}
        onPressIn={() => isEditable && onPressIn()}
        onChangeText={onChangeText}
        onBlur={onBlur}
        onFocus={() => isEditable && onFocus()}
        onEndEditing={onEndEditing}
        multiline={multiline}
        autoCapitalize={autoCapitalize ? autoCapitalize : "none"}
        defaultValue={defaultValue}
        value={value}
      />
      <TouchableOpacity
        onPress={onIconPress}
        style={{ position: "absolute", left: 250 }}
        disabled={isError}
      >
        {(secureText == null || showIcon) && (
          <Icon name={iconName} size={iconSize} color={iconColor} />
        )}
        {type === "password" && (
          <Icon
            name={isError ? "warning" : !secureText ? "eye" : "eye-slash"}
            size={iconSize}
            color={isError ? colors.red : colors.blue600}
          />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 15,
  },
  errorStyle: {
    fontSize: 20,
    color: colors.red,
  },
});
