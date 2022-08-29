import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CustomText } from "../components/CustomText";
import { IconText } from "../components/IconText";
import { IconTextInput } from "../components/IconTextInput";
import { Spacer } from "../components/Spacer";
import { Routes } from "../navigation/stacks/Routes";
import { getUser } from "../service/Service";
import { colors } from "../utils/Colors";
import Storage from "../utils/StorageManage";
import { NavigationHelper } from "../utils/utils";

export function Profile({ navigation, route }) {
  // ^ 1 - state
  const [user, setUser] = useState({});
  // ^ 2 - params

  // ^ 3 - variables

  // ^ 4 - functions
  const getUserApicall = async () => {
    const adminId = await Storage.get(Storage.ADMIN_ID);
    const userId = await Storage.get(Storage.USER_ID);
    const userType = await Storage.get(Storage.USER_TYPE);
    const id = userType == "client" ? userId : adminId;

    getUser(
      id,
      userType,
      (successCallback = (res) => {
        setUser(res.data.data);
      }),
      (errorCallback = () => {})
    );
  };
  const goToChangeCredentials = (route) => {
    navigation.navigate(route, {
      oldEmail: user?.email,
      name: user?.name,
    });
  };
  const logout = () => {
    NavigationHelper.resetSecondLevel(
      Routes.REGISTRATION_STACK,
      Routes.REGISTRATION_STEP1_SCREEN,
      navigation
    ),
      Storage.set(Storage.TOKEN, "");
  };

  // ^ 5 - effects
  useEffect(() => {
    getUserApicall();
  }, []);

  // ^ 6 - styles
  const { containerInfo, line } = styles;

  // ^ 7 - render
  return (
    <ScrollView style={{ padding: 24 }}>
      <Spacer extraLarge />
      <IconText
        iconName={"user"}
        text={"Profilo"}
        fontSize={24}
        iconSize={22}
      />
      <View style={line} />

      <Spacer />

      <View style={containerInfo}>
        <CustomText text={"Cambia email"} fontSize={18} bold />
        <IconTextInput
          defaultValue={user?.email}
          isEditable={false}
          iconName={"pencil"}
          onIconPress={() => goToChangeCredentials(Routes.CHANGE_EMAIL_SCREEN)}
        />
      </View>
      <Spacer />
      <View style={containerInfo}>
        <CustomText text={"Cambia password"} fontSize={18} bold />
        <IconTextInput
          defaultValue={"ctrovato"}
          isEditable={false}
          iconName={"pencil"}
          secureText={true}
          showIcon={true}
          onIconPress={() =>
            goToChangeCredentials(Routes.CHANGE_PASSWORD_SCREEN)
          }
        />
      </View>
      <Spacer />
      <View style={line} />
      <Spacer micro />
      <TouchableOpacity onPress={() => logout()}>
        <CustomText text={"Logout"} />
      </TouchableOpacity>
    </ScrollView>
  );
}

// ^ 8 - style def
const styles = StyleSheet.create({
  lottie: {
    width: 70,
    height: 70,
  },
  line: {
    height: 2,
    backgroundColor: colors.grey400,
    marginTop: 4,
  },
  containerInfo: {
    backgroundColor: colors.blue100,
    borderWidth: 0.5,
    borderColor: colors.grey400,
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
