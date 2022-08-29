import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../utils/Colors";
import { SimpleHeader } from "../components/SimpleHeader";
import { RoundButton } from "../components/RoundButton";
import { IconTextInput } from "../components/IconTextInput";
import { TitlePage } from "../components/TitlePage";
import { loginApiCall } from "../service/Service";
import { IconText } from "../components/IconText";
import Storage from "../utils/StorageManage";
import { Routes } from "../navigation/stacks/Routes";
import { DropdownComponent } from "../components/DropdownComponent";
import { Loader } from "../components/Loader";

export function LoginScreen({ navigation }) {
  // VARIEBLES
  const [secureText, setSecureText] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(null);

  const data = [
    { key: "Amministratore", value: "admin" },
    { key: "Cliente", value: "client" },
  ];
  const payload = {
    email: email,
    password: password,
    typeUser: value,
  };

  // STYLE
  const { cardStyle } = styles;

  //  ACTION
  const goBack = () => {
    navigation.goBack();
  };

  const goToLogin = () => {
    setIsVisible(true);
    loginApiCall(payload, successCallback, errorCallback);
  };
  const successCallback = (res) => {
    setTimeout(() => setIsVisible(false), 300);
    if (res.error != "" && !!res.error) setError(res.error);
    if (
      !!res.data &&
      res.data.expirationDateToken != null &&
      res.data.token != null
    ) {
      Storage.set(Storage.TOKEN, res?.data.token);
      Storage.set(Storage.EXPIRATION_DATE_TOKEN, res.data.expirationDateToken);
      Storage.set(Storage.USER_ID, String(res?.data.idUser));
      value === "client"
        ? Storage.set(Storage.ADMIN_ID, String(res?.params))
        : Storage.set(Storage.ADMIN_ID, String(res?.data?.idUser));

      Storage.set(Storage.USER_TYPE, value);
      navigation.navigate(Routes.MAIN_TAB_STACK, {
        screen: Routes.HOME_SCREEN,
      });
    }
  };

  const errorCallback = (err) => {
    setTimeout(() => setIsVisible(false), 300);
    console.log(err);
  };

  //BODY
  return (
    <SimpleHeader
      action={goBack}
      navigation={navigation}
      iconName={"reply"}
      iconSize={24}
      text={"Login"}
      textStyle={{ color: colors.darkBlue200 }}
      style={{ flex: 1 }}
      colorText={colors.blue200}
    >
      <View style={{ flex: 1 }}>
        <TitlePage title={"Login"} />
        <View style={{ alignItems: "center" }}>
          <View style={cardStyle}>
            <Icon
              name={"user"}
              style={{ marginRight: 6, position: "absolute", left: 25 }}
              size={16}
              color={colors.blue600}
            />
            <IconTextInput
              placeholder={"Email"}
              iconColor={colors.blue600}
              onChangeText={(val) => {
                setEmail(val);
              }}
              onBlur={() => setError("")}
            />
          </View>
          <View style={cardStyle}>
            <Icon
              name={"lock"}
              style={{ marginRight: 6, position: "absolute", left: 25 }}
              size={16}
              color={colors.blue600}
            />
            <IconTextInput
              placeholder={"Password"}
              iconColor={colors.blue600}
              secureText={secureText}
              type={"password"}
              onIconPress={() => setSecureText(!secureText)}
              onChangeText={(val) => {
                setPassword(val);
              }}
              onBlur={() => setError("")}
            />
          </View>
        </View>
        <View style={{ padding: 35 }}>
          <DropdownComponent
            data={data}
            value={value}
            setValue={setValue}
            isFocus={isFocus}
            setIsFocus={setIsFocus}
          />
        </View>

        <Loader isVisible={isVisible} />
        <TouchableOpacity>
          <Text
            style={{
              color: colors.blue600,
              marginLeft: 40,
              fontWeight: "bold",
            }}
          >
            Recupera password
          </Text>
        </TouchableOpacity>
        {error !== "" && (
          <IconText
            text={error}
            iconName={"warning"}
            iconColor={colors.informativeError}
            containerStyle={{ marginLeft: 40 }}
            textColor={colors.informativeError}
            // textStyle={{ color: colors.informativeError }}
          />
        )}
        <View
          style={{
            alignItems: "flex-end",
            justifyContent: "flex-end",
            flex: 1,
            marginRight: 24,
          }}
        >
          <RoundButton
            iconName={"arrow-right"}
            iconSize={25}
            buttonStyle={{ alignItems: "center", justifyContent: "center" }}
            colorCard={colors.red}
            borderColorCard={colors.red}
            iconColor={colors.blue200}
            action={goToLogin}
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
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    flexDirection: "row",
  },
  lottie: {
    width: 100,
    height: 100,
  },
});
