import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../utils/Colors";
import { Routes } from "../navigation/stacks/Routes";
import { SimpleHeader } from "../components/SimpleHeader";
import { RoundButton } from "../components/RoundButton";
import { TextInputField } from "../components/TextInputField";
import { TitlePage } from "../components/TitlePage";
import { DropdownComponent } from "../components/DropdownComponent";
import { Spacer } from "../components/Spacer";

// ^ 0 - constants

export function RegistrationStep2Screen({ navigation }) {
  // ^ 1 - state
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState("");

  // ^ 2 - params

  // ^ 3 - variables
  const data = [
    { key: "Amministratore", value: "admin" },
    { key: "Cliente", value: "client" },
  ];

  // ^ 4 - functions
  const goBack = () => {
    navigation.goBack();
  };

  const goToRegistrationStep3 = () => {
    navigation.navigate(Routes.REGISTRATION_STEP3_SCREEN, {
      params: {
        typeUser: value,
        name: name,
        surname: surname,
        companyName: companyName,
      },
    });
  };
  // ^ 5 - effects

  // ^ 6 - styles
  const { buttonContainer, buttonStyle } = styles;

  // ^ 7 - render
  return (
    <SimpleHeader
      action={goBack}
      navigation={navigation}
      iconName={"reply"}
      iconSize={24}
      text={"Registrazione"}
      textStyle={{ color: colors.darkBlue200 }}
      style={{ flex: 1 }}
      colorText={colors.blue200}
    >
      <View style={{ flex: 1 }}>
        <TitlePage title={"Registrati"} />
        <TextInputField
          title={"Nome"}
          borderBottomColor={colors.blue600}
          onChangeText={(val) => setName(val.trim())}
          isBorderBottomVisible={true}
          fontSize={22}
          bold
          textColor={colors.blue600}
        />
        <TextInputField
          title={"Cognome"}
          borderBottomColor={colors.blue600}
          onChangeText={(val) => setSurname(val.trim())}
          fontSize={22}
          bold
          textColor={colors.blue600}
        />
        <Spacer tiny />
        <View style={{ paddingHorizontal: 24 }}>
          <DropdownComponent
            data={data}
            value={value}
            setValue={setValue}
            isFocus={isFocus}
            setIsFocus={setIsFocus}
          />
        </View>
      </View>

      <TextInputField
        title={"Nome della compagnia"}
        borderBottomColor={colors.blue600}
        onChangeText={(val) => setCompanyName(val.trim())}
        bold
        textColor={colors.blue600}
        fontSize={22}
      />
      <View style={buttonContainer}>
        <RoundButton
          iconName={"arrow-right"}
          iconSize={25}
          buttonStyle={buttonStyle}
          colorCard={colors.red}
          borderColorCard={colors.red}
          iconColor={colors.blue200}
          action={goToRegistrationStep3}
          disabled={
            name == "" || surname == "" || value == "" || companyName == ""
          }
        />
      </View>
    </SimpleHeader>
  );
}
// ^ 8 - style def
const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginBottom: 20,
    marginRight: 20,
  },
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
});
