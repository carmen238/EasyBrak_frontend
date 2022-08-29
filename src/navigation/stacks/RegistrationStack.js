import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Routes";
import { RegistrationStep1Screen } from "../../Screens/RegistrationStep1Screen";
import { RegistrationStep2Screen } from "../../Screens/RegistrationStep2Screen";
import { RegistrationStep3Screen } from "../../Screens/RegistrationStep3";
import { ThankYouPage } from "../../Screens/ThankYouPage";

const Stack = createStackNavigator();

export function RegistrationStack() {
  return (
    <Stack.Navigator headerMode={"none"}>
      <Stack.Screen
        name={Routes.REGISTRATION_STEP1_SCREEN}
        component={RegistrationStep1Screen}
      />
      <Stack.Screen
        name={Routes.REGISTRATION_STEP2_SCREEN}
        component={RegistrationStep2Screen}
      />
      <Stack.Screen
        name={Routes.REGISTRATION_STEP3_SCREEN}
        component={RegistrationStep3Screen}
      />
      <Stack.Screen name={Routes.THANK_YOU_PAGE} component={ThankYouPage} />
    </Stack.Navigator>
  );
}
