import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { AdminMenuScreen } from "../../Screens/AdminMenuScreen";
import { ChangeEmailScreen } from "../../Screens/ChangeEmailScreen";
import { ChangePasswordScreen } from "../../Screens/ChangePasswordScreen";
import { UserMenuScreen } from "../../Screens/UserMenuScreen";
import { LoginStack } from "./LoginStack";
import { MainTabStack } from "./MainTabStack";
import { RegistrationStack } from "./RegistrationStack";
import { Routes } from "./Routes";

const Stack = createStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator headerMode={"none"}>
      <Stack.Screen
        name={Routes.REGISTRATION_STACK}
        component={RegistrationStack}
      />
      <Stack.Screen name={Routes.LOGIN_STACK} component={LoginStack} />
      <Stack.Screen name={Routes.MAIN_TAB_STACK} component={MainTabStack} />
      <Stack.Screen
        name={Routes.MENU_ADMIN_SCREEN}
        component={AdminMenuScreen}
      />
      <Stack.Screen name={Routes.MENU_USER_SCREEN} component={UserMenuScreen} />
      <Stack.Screen
        name={Routes.CHANGE_EMAIL_SCREEN}
        component={ChangeEmailScreen}
      />
      <Stack.Screen
        name={Routes.CHANGE_PASSWORD_SCREEN}
        component={ChangePasswordScreen}
      />
    </Stack.Navigator>
  );
}
