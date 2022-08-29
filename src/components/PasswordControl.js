import React from "react";
import { View, Text } from "react-native";
import { colors } from "../utils/Colors";
import { regex } from "../utils/Regex";
import { IconText } from "./IconText";
import { Spacer } from "./Spacer";

export function PasswordControl({ password }) {
  //FUNCTIONS
  const singleControl = (regex, textChild, margin) => {
    return (
      <IconText
        text={textChild}
        iconName={regex ? "check" : "close"}
        iconColor={regex ? colors.informativeSuccess : colors.red}
        containerStyle={{ marginRight: margin }}
        textColor={colors.blue600}
        fontSize={14}
      />
    );
  };
  //STYLES

  return (
    <View style={{ padding: 24 }}>
      <Text style={{ color: colors.blue600, fontSize: 14, fontWeight: "bold" }}>
        La password deve contenere almeno:
      </Text>
      <Spacer />
      <View style={{ flexDirection: "row" }}>
        {singleControl(
          regex.chacractersPassword.test(password),
          "• Otto caratteri",
          30
        )}
        {singleControl(
          regex.upperCasePassword.test(password),
          "• Un carattere maiuscolo",
          0
        )}
      </View>
      <Spacer size={8} />
      <View style={{ flexDirection: "row" }}>
        {singleControl(
          regex.numberPassword.test(password),
          "• Un numero    ",
          32
        )}
        {singleControl(
          regex.underCasePassword.test(password),
          "• Un carattere minuscolo",
          0
        )}
      </View>
    </View>
  );
}
