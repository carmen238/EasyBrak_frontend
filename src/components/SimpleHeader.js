import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../utils/Colors";
import Icon from "react-native-vector-icons/FontAwesome";

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 80 : 0;

export function SimpleHeader({
  edges,
  children,
  safeAreaBgColor,
  baseViewColor,
  iconName,
  text,
  colorText,
  navigation,
  iconSize,
  style,
  iconColor,
  action = goBack,
}) {
  const { appBar } = styles;

  const goBack = () => {
    navigation.goBack();
  };

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
          style,
          appBar,
          {
            backgroundColor: baseViewColor ? baseViewColor : colors.blue600,
            justifyContent: "center",
          },
        ]}
      >
        <View style={{ marginTop: 25, marginLeft: 22, flexDirection: "row" }}>
          <TouchableOpacity onPress={action}>
            <Icon
              name={iconName}
              size={iconSize}
              color={iconColor ? iconColor : colors.blue200}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: 15,
              fontSize: 20,
              color: colorText ? colorText : colors.white,
            }}
          >
            {text}
          </Text>
        </View>
      </View>
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
