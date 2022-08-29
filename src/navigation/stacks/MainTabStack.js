import React from "react";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import Icon from "react-native-vector-icons/FontAwesome";
import { HomeScreen } from "../../Screens/HomeScreen";
import { MyCartScreen } from "../../Screens/MyCartScreen";
import { MyHistoryScreen } from "../../Screens/MyHistoryScreen";
import { Profile } from "../../Screens/Profile";
import { colors } from "../../utils/Colors";

export function MainTabStack() {
  const Tabs = AnimatedTabBarNavigator();

  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: colors.white,
        inactiveTintColor: colors.blue600,
      }}
      lazy={true}
      appearance={{
        tabBarBackground: colors.blue600,
        activeTabBackgrounds: colors.blue300,
        topPadding: 10,
        bottomPadding: 10,
      }}
    >
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home"
              size={24}
              focused={focused}
              color={colors.white}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Ordini"
        component={MyHistoryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="list"
              size={24}
              color={colors.white}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Carrello"
        component={MyCartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="shopping-cart"
              size={24}
              focused={focused}
              color={colors.white}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profilo"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="user"
              size={24}
              focused={focused}
              color={colors.white}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
