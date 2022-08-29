import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { BaseView } from "../components/BaseView";
import { colors } from "../utils/Colors";
import { ButtonCard } from "../components/ButtonCard";
import { Routes } from "../navigation/stacks/Routes";
import { Spacer } from "../components/Spacer";
import { camelCaseText } from "../utils/utils";

// ^ 0 - constants

export function ThankYouPage({ navigation, route }) {
  // ^ 1 - state

  // ^ 2 - params
  const { name, from, label } = route.params.params;

  // ^ 3 - variables

  // ^ 4 - functions
  const goBack = () => {
    if (from === "changeEmail")
      navigation.navigate(Routes.MAIN_TAB_STACK, { screen: "Profile" });
    else navigation.navigate(Routes.REGISTRATION_STEP1_SCREEN);
  };

  // ^ 5 - effects

  // ^ 6 - styles
  const { container, textStyle } = styles;

  // ^ 7 - render
  return (
    <BaseView baseViewColor={colors.blue200}>
      <View style={container}>
        <Spacer />
        <Text style={textStyle}>{"Ciao\n" + camelCaseText(name)}!</Text>
        <Spacer large />

        <Text
          style={{
            fontSize: 20,
            color: colors.blue600,
          }}
        >
          {from == "changeEmail"
            ? label
            : "Adesso sei dei nostri!\nVai alla login e inizia a fare un nuovo ordine!"}
        </Text>
        <Spacer tiny />
        <View>
          <Image
            source={require("/Users/ctrovato/Desktop/MyProjects/EasyBreakUi/src/source/Blu-Oltremare.jpeg")}
            style={{ width: 360, height: 300 }}
          />
        </View>
        <ButtonCard
          title={" Torna alla pagina iniziale"}
          iconSize={16}
          iconColor={colors.blue600}
          borderColorCard={colors.blue600}
          styleCard={{ marginBottom: 13, marginTop: 80 }}
          action={goBack}
          colorCard={colors.blue600}
          textColor={colors.white}
          fontSize={20}
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
    fontSize: 45,
    color: colors.blue600,
    marginRight: 8,
  },
});
