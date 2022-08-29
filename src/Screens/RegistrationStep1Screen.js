import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { BaseView } from "../components/BaseView";
import { colors } from "../utils/Colors";
import { ButtonCard } from "../components/ButtonCard";
import { Routes } from "../navigation/stacks/Routes";

// ^ 0 - constants

export function RegistrationStep1Screen({ navigation }) {
  // ^ 1 - state

  // ^ 2 - params

  // ^ 3 - variables

  // ^ 4 - functions
  const goRegistrationStep2 = () => {
    navigation.navigate(Routes.REGISTRATION_STEP2_SCREEN);
  };
  const goToLogin = () => {
    navigation.navigate(Routes.LOGIN_STACK, { screen: Routes.LOGIN_SCREEN });
  };

  // ^ 5 - effects

  // ^ 6 - styles
  const { container, textStyle } = styles;

  // ^ 7 - render
  return (
    <BaseView baseViewColor={colors.blue200}>
      <View style={container}>
        <View
          style={{
            marginTop: 100,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={textStyle}>Easy Break</Text>
          <Icon name={"coffee"} color={colors.red} size={50} />
        </View>

        <ButtonCard
          title={"LOG-IN"}
          iconName={"user"}
          iconSize={16}
          iconColor={colors.blue600}
          borderColorCard={colors.blue600}
          styleCard={{ marginBottom: 13, marginTop: 80 }}
          action={goToLogin}
        />
        <ButtonCard
          title={"NUOVO ACCOUNT"}
          iconSize={16}
          iconColor={colors.blue600}
          borderColorCard={colors.blue600}
          iconName={"envelope"}
          action={goRegistrationStep2}
        />
      </View>
    </BaseView>
  );
}

// ^ 8 - style def
const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 50,
  },
  textStyle: {
    fontWeight: "bold",
    fontFamily: "arial",
    fontSize: 35,
    color: colors.blue600,
    marginRight: 8,
  },
});
