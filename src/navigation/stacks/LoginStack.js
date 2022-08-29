import React from "react";
import { Routes } from "./Routes";

import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../../Screens/LoginScreen";

const Stack = createStackNavigator();

export function LoginStack() {
  return (
    <Stack.Navigator headerMode={"none"}>
      <Stack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
    </Stack.Navigator>
  );
}
