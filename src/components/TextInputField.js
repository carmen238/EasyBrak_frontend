import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
  Text,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../utils/Colors";
import { IconText } from "./IconText";

export function TextInputField({
  title,
  errorTitle,
  secureTextEntry,
  defaultValue,
  value,
  iconSize = 20,
  iconColor,
  multiline,
  textStyle,
  borderBottomColor,
  isBorderBottomVisible = true,
  valueColor = colors.basicBlack,
  autoCapitalize,
  isError = false,
  isEditable = true,
  keyboardType,
  maxLength,
  placeholder,
  onPressIn = () => {},
  onChangeText = () => {},
  onBlur = () => {},
  onIconPress = () => {},
  onEndEditing = () => {},
  onFocus = () => {},
  width,
  textContainer,
  marginTop,
  iconStyle = { position: "absolute", right: 8, bottom: 12 },
  autoFocus,
  inputRef,
  textAlignVertical,
  iconTextName,
  iconTextColor,
  titleStyle = { fontSize: 20, color: colors.blue600, fontWeight: "bold" },
  iconName,
  fontSize,
  textColor,
}) {
  const { textInput, inputBorder } = styles;

  return (
    <View style={{ padding: 30 }}>
      <View
        style={[
          inputBorder,
          {
            borderBottomColor: isError
              ? colors.informativeError
              : borderBottomColor,
          },
          {
            borderBottomWidth: isBorderBottomVisible ? 1 : 0,
            marginTop: marginTop ? marginTop : 0,
          },
        ]}
      >
        {/* input */}

        <View style={textContainer}>
          {/* up label */}
          <IconText
            text={title}
            iconName={iconTextName}
            iconColor={iconTextColor}
            iconSize={16}
            textStyle={titleStyle}
            fontSize={fontSize}
            textColor={textColor}
          />
          <TextInput
            textAlignVertical={textAlignVertical ? textAlignVertical : null}
            ref={(r) => {
              inputRef && inputRef(r);
            }}
            autoFocus={autoFocus}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            placeholder={placeholder}
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
            style={[textInput, textStyle]}
            defaultValue={defaultValue}
            value={value}
            color={isEditable ? colors.black : valueColor || colors.grey600}
            autoCorrect={false}
          />
        </View>

        <TouchableOpacity onPress={onIconPress} disabled={isError}>
          <Icon
            name={isError ? "warning" : iconName}
            style={iconStyle}
            size={iconSize}
            color={isError ? colors.informativeError : iconColor}
          />
        </TouchableOpacity>
      </View>
      {isError && (
        <Text style={{ fontSize: 11, color: colors.informativeError }}>
          {errorTitle}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    paddingVertical: 5,
    fontSize: 16,
    marginLeft: Platform.OS === "ios" ? 0 : -4,
    // marginBottom: 12
  },
  inputBorder: {
    marginVertical: 13,
    marginBottom: 1,
  },
});
