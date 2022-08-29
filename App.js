/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type { Node } from "react";
import React from "react";
import { StyleSheet } from "react-native";

import { createSwitchNavigator } from "@react-navigation/compat";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "./src/navigation/stacks/AuthStack";
import { Routes } from "./src/navigation/stacks/Routes";

const App: () => Node = () => {
  let MainNavigation = createSwitchNavigator(
    {
      [Routes.REGISTRATION_STEP1_SCREEN]: AuthStack,
    },
    {
      headerMode: "none",
      swipeEnabled: false,
    }
  );

  return (
    <>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default App;
