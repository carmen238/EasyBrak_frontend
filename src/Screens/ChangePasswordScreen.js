import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Loader } from "../components/Loader";
import { PasswordControl } from "../components/PasswordControl";
import { RoundButton } from "../components/RoundButton";
import { SimpleHeader } from "../components/SimpleHeader";
import { TextInputField } from "../components/TextInputField";
import { TitlePage } from "../components/TitlePage";
import { Routes } from "../navigation/stacks/Routes";
import { changePasswordApicall } from "../service/Service";
import { colors } from "../utils/Colors";
import { regex } from "../utils/Regex";
import { NavigationHelper } from "../utils/utils";

export function ChangePasswordScreen({ navigation, route }) {
  // ^ 1 - state
  const [isVisible, setIsVisible] = useState(false);
  const [secureText, setSecureText] = useState(true);
  const [secureConfirmText, setSecureConfirmText] = useState(true);
  const [actualPassword, setActualPassword] = useState({
    value: "",
    error: "",
  });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    error: "",
  });

  // ^ 2 - params
  const { name } = route?.params;

  // ^ 3 - variables

  // ^ 4 - functions
  const goBack = () => {
    NavigationHelper.resetFirstLevel("Profile");
  };
  const controlPassword = () => {
    return (
      !regex.upperCasePassword.test(password.value) ||
      !regex.chacractersPassword.test(password.value) ||
      !regex.underCasePassword.test(password.value) ||
      !regex.numberPassword.test(password.value)
    );
  };
  const upadatePassword = async () => {
    const payload = {
      oldPassword: actualPassword.value,
      password: password.value,
      typeUser: "client",
    };
    setIsVisible(true);
    changePasswordApicall(payload, successCallback, errorCallback);
  };
  const successCallback = (res) => {
    setIsVisible(false);
    if (!!res.response)
      navigation.navigate(Routes.THANK_YOU_PAGE, {
        params: {
          name: name,
          label: res.response,
          from: "changeEmail",
        },
      });
    else setPassword({ value: "", error: "Errore interno" });
  };

  const errorCallback = (err) => {
    setTimeout(() => setIsVisible(false), 300);
    console.log(err);
  };
  const controlConfirmPassword = () => {
    return password.value !== confirmPassword.value;
  };

  const disabledButton = () => {
    return (
      controlConfirmPassword() ||
      controlPassword() ||
      password.value == "" ||
      confirmPassword.value == ""
    );
  };

  const goNext = () => {
    upadatePassword();
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
      text={"Cambio password"}
      textStyle={{ color: colors.darkBlue200 }}
      style={{ flex: 1 }}
      colorText={colors.blue200}
    >
      <View style={{ flex: 1 }}>
        <TitlePage title={"Cambia password"} />
        <TextInputField
          title={"Password attuale"}
          borderBottomColor={colors.blue600}
          iconName={secureText ? "eye-slash" : "eye"}
          iconColor={colors.blue600}
          iconSize={16}
          onIconPress={() => setSecureText(!secureText)}
          secureTextEntry={secureText}
          onChangeText={(pass) =>
            setActualPassword({ value: pass.trim(), error: "" })
          }
          isError={!!actualPassword.error}
          errorTitle={actualPassword.error}
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
