import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Loader } from "../components/Loader";
import { PasswordControl } from "../components/PasswordControl";
import { RoundButton } from "../components/RoundButton";
import { SimpleHeader } from "../components/SimpleHeader";
import { TextInputField } from "../components/TextInputField";
import { TitlePage } from "../components/TitlePage";
import { Routes } from "../navigation/stacks/Routes";
import { registrationApiCall } from "../service/Service";
import { colors } from "../utils/Colors";
import { regex } from "../utils/Regex";

export function RegistrationStep3Screen({ navigation, route }) {
  // ^ 1 - state
  const [isVisible, setIsVisible] = useState(false);
  const [secureText, setSecureText] = useState(true);
  const [secureConfirmText, setSecureConfirmText] = useState(true);
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    error: "",
  });

  // ^ 2 - params
  const { typeUser, name, surname, companyName } = route.params.params;

  // ^ 3 - variables
  const payload = {
    name: name,
    surname: surname,
    email: email.value,
    password: confirmPassword.value,
    typeUser: typeUser,
    companyName: companyName,
  };

  // ^ 4 - functions
  const goBack = () => {
    navigation.navigate(Routes.REGISTRATION_STEP2_SCREEN);
  };
  const controlPassword = () => {
    return (
      !regex.upperCasePassword.test(password.value) ||
      !regex.chacractersPassword.test(password.value) ||
      !regex.underCasePassword.test(password.value) ||
      !regex.numberPassword.test(password.value)
    );
  };
  const controlConfirmPassword = () => {
    return password.value !== confirmPassword.value;
  };
  const checkEmail = () => {
    return regex.emailPattern.test(email.value);
  };
  const disabledButton = () => {
    return (
      controlConfirmPassword() ||
      controlPassword() ||
      !checkEmail() ||
      email.value == "" ||
      password.value == "" ||
      confirmPassword.value == ""
    );
  };

  const goNext = () => {
    registrationApiCall(payload, successCallback, errorCallback);
  };
  const successCallback = (res) => {
    setTimeout(() => setIsVisible(false), 300);
    if (res.error != "") setEmail({ value: "", error: res.error });
    else if (res.response != "")
      navigation.navigate(Routes.THANK_YOU_PAGE, {
        params: {
          name: name,
        },
      });
  };

  const errorCallback = (err) => {
    setTimeout(() => setIsVisible(false), 300);
    console.log(err);
  };

  // ^ 5 - effects

  // ^ 6 - styles
  const { containerStyle } = styles;

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
          title={"Email"}
          borderBottomColor={colors.blue600}
          onChangeText={(email) => setEmail({ value: email.trim(), error: "" })}
          onBlur={() => {
            !checkEmail()
              ? setEmail({ value: "", error: "Formato email errato" })
              : null;
          }}
          isError={!!email.error}
          errorTitle={email.error}
          fontSize={22}
          bold
          textColor={colors.blue600}
        />
        <TextInputField
          title={"Password"}
          borderBottomColor={colors.blue600}
          iconName={secureText ? "eye-slash" : "eye"}
          iconColor={colors.blue600}
          iconSize={16}
          onIconPress={() => setSecureText(!secureText)}
          secureTextEntry={secureText}
          onChangeText={(pass) =>
            setPassword({ value: pass.trim(), error: "" })
          }
          onBlur={() => {
            controlPassword()
              ? setPassword({
                  value: password.value,
                  error: "Password non conforme",
                })
              : null;
          }}
          isError={!!password.error}
          errorTitle={password.error}
          fontSize={22}
          bold
          textColor={colors.blue600}
        />
        <TextInputField
          title={"Conferma password"}
          borderBottomColor={colors.blue600}
          iconName={secureConfirmText ? "eye-slash" : "eye"}
          iconColor={colors.blue600}
          iconSize={16}
          onIconPress={() => setSecureConfirmText(!secureConfirmText)}
          secureTextEntry={secureConfirmText}
          onChangeText={(pass) =>
            setConfirmPassword({ value: pass.trim(), error: "" })
          }
          onBlur={() => {
            controlConfirmPassword()
              ? setConfirmPassword({
                  value: confirmPassword.value,
                  error: "Le due password non coincidono",
                })
              : null;
          }}
          isError={!!confirmPassword.error}
          errorTitle={confirmPassword.error}
          fontSize={22}
          bold
          textColor={colors.blue600}
        />
        <PasswordControl password={password.value} />
      </View>
      <Loader visible={isVisible} />
      <View style={containerStyle}>
        <RoundButton
          iconName={"arrow-right"}
          iconSize={25}
          buttonStyle={{ alignItems: "center", justifyContent: "center" }}
          colorCard={colors.red}
          borderColorCard={colors.red}
          iconColor={colors.blue200}
          disabled={disabledButton()}
          action={goNext}
        />
      </View>
    </SimpleHeader>
  );
}

// ^ 8 - style def
const styles = StyleSheet.create({
  containerStyle: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginBottom: 20,
    marginRight: 20,
  },
});
