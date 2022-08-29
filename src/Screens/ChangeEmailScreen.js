import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Loader } from "../components/Loader";
import { RoundButton } from "../components/RoundButton";
import { SimpleHeader } from "../components/SimpleHeader";
import { Spacer } from "../components/Spacer";
import { TextInputField } from "../components/TextInputField";
import { TitlePage } from "../components/TitlePage";
import { Routes } from "../navigation/stacks/Routes";
import { changeEmailApicall, changePasswordApicall } from "../service/Service";
import { colors } from "../utils/Colors";
import { regex } from "../utils/Regex";
import Storage from "../utils/StorageManage";
import { NavigationHelper } from "../utils/utils";

// ^ 0 - constants

export function ChangeEmailScreen({ navigation, route }) {
  // ^ 1 - state
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState({ value: "", error: "" });

  // ^ 2 - params
  const { oldEmail, name } = route?.params;
  // ^ 3 - variables

  // ^ 4 - functions
  const goBack = () => {
    NavigationHelper.resetFirstLevel("Profile");
  };
  const checkEmail = () => {
    if (!regex.emailPattern.test(email.value)) {
      setEmail({ value: "", error: "Formato email errato" });
      return false;
    }
    if (email.value === oldEmail) {
      console.log(oldEmail);
      setEmail({
        value: "",
        error: "La mail deve essere diversa da quella precedente",
      });
      return false;
    }
    return true;
  };
  const goNext = () => {
    if (checkEmail()) updateEmail();
  };

  const updateEmail = async () => {
    const payload = email.value;
    setIsVisible(true);
    changeEmailApicall(payload, successCallback, errorCallback);
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
    else setEmail({ value: "", error: "Errore interno" });
  };

  const errorCallback = (err) => {
    setTimeout(() => setIsVisible(false), 300);
    console.log(err);
  };
  // ^ 5 - effects

  // ^ 6 - styles
  const { container } = styles;

  // ^ 7 - render
  return (
    <SimpleHeader
      action={goBack}
      navigation={navigation}
      iconName={"reply"}
      iconSize={24}
      text={"Cambio email"}
      textStyle={{ color: colors.darkBlue200 }}
      style={{ flex: 1 }}
      colorText={colors.blue200}
    >
      <View style={{ flex: 1 }}>
        <TitlePage title={"Cambia la tua email"} />
        <View
          style={{
            height: 90,
            borderRadius: 12,
            borderColor: colors.blue600,
            borderWidth: 1,
            margin: 24,
            justifyContent: "center",
          }}
        >
          <TextInputField
            title={"Email attuale"}
            borderBottomColor={colors.blue200}
            value={oldEmail}
            valueColor={colors.blue600}
            fontSize={22}
            bold
            textColor={colors.blue600}
            isEditable={false}
          />
        </View>

        <Spacer />
        <TextInputField
          title={"Nuova Email"}
          borderBottomColor={colors.blue600}
          onChangeText={(email) => setEmail({ value: email.trim(), error: "" })}
          isError={!!email.error}
          errorTitle={email.error}
          fontSize={22}
          bold
          textColor={colors.blue600}
        />
      </View>
      <Loader visible={isVisible} />
      <View style={styles.containerStyle}>
        <RoundButton
          iconName={"arrow-right"}
          iconSize={25}
          buttonStyle={{ alignItems: "center", justifyContent: "center" }}
          colorCard={colors.red}
          borderColorCard={colors.red}
          iconColor={colors.blue200}
          action={() => goNext()}
        />
        <Loader isVisible={isVisible} />
      </View>
    </SimpleHeader>
  );
}

// ^ 8 - style def
const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 50,
  },
  containerStyle: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginBottom: 20,
    marginRight: 20,
  },
});
