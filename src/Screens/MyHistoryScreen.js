import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../utils/Colors";
import { TextInput } from "react-native-gesture-handler";
import { Routes } from "../navigation/stacks/Routes";
import { SimpleHeader } from "../components/SimpleHeader";
import { RoundButton } from "../components/RoundButton";
import { regex } from "../utils/Regex";

export function MyHistoryScreen({ navigation }) {
  // VARIEBLES

  const [secureText, setSecureText] = useState(true);

  // STYLE

  const { cardStyle } = styles;

  //  ACTION

  const goBack = () => {
    navigation.goBack();
  };
  const goToRegistrationStep3 = () => {
    navigation.navigate(Routes.REGISTRATION_STEP3_SCREEN);
  };

  return (
    <SimpleHeader
      action={goBack}
      navigation={navigation}
      iconName={"reply"}
      iconSize={24}
      text={"MyHistory"}
      textStyle={{ color: colors.darkBlue200 }}
      style={{ flex: 1 }}
      colorText={colors.blue200}
    >
      <View style={{ flex: 1, padding: 24 }}>
        <View
          style={{
            marginBottom: 50,
            flexDirection: "row",
            marginTop: 50,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: 120,
              height: 4,
              backgroundColor: colors.red,
              borderRadius: 20,
            }}
          />
          <Text style={{ fontSize: 40, color: colors.red }}>MyHistory</Text>
          <View
            style={{
              width: 120,
              height: 4,
              backgroundColor: colors.red,
              borderRadius: 20,
            }}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={cardStyle}>
            <Icon
              name={"user"}
              style={{ marginRight: 6, position: "absolute", left: 25 }}
              size={16}
              color={colors.blue600}
            />
            <TextInput placeholder={"Username"} />
          </View>
          <View style={cardStyle}>
            <Icon
              name={"lock"}
              style={{ marginRight: 6, position: "absolute", left: 25 }}
              size={16}
              color={colors.blue600}
            />
            <TextInput placeholder={"Password"} secureTextEntry={secureText} />
            <TouchableOpacity
              onPress={() => setSecureText(secureText ? false : true)}
              style={{ marginRight: 6, position: "absolute", right: 25 }}
            >
              <Icon
                name={!secureText ? "eye" : "eye-slash"}
                size={14}
                color={colors.blue600}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity>
          <Text style={{ color: colors.blue600, marginLeft: 40, fontWeight:'bold' }}>
            Recupera password
          </Text>
        </TouchableOpacity>
        <View
          style={{
            alignItems: "flex-end",
            justifyContent: "flex-end",
            flex: 1,
          }}
        >
          <RoundButton
            iconName={"arrow-right"}
            iconSize={25}
            buttonStyle={{ alignItems: "center", justifyContent: "center" }}
            colorCard={colors.red}
            borderColorCard={colors.red}
            iconColor={colors.blue200}
            action={goToRegistrationStep3}
          />
        </View>
      </View>
    </SimpleHeader>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    borderWidth: 1,
    borderColor: colors.blue600,
    borderRadius: 32,
    padding: 18,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    flexDirection: "row",
  },
});
