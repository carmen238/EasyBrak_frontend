import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { CarouselComponent } from "../components/CarouselComponent";
import { Loader } from "../components/Loader";
import { Spacer } from "../components/Spacer";
import { Routes } from "../navigation/stacks/Routes";
import { getDishes } from "../service/Service";
import { colors } from "../utils/Colors";
import Storage from "../utils/StorageManage";

// ^ 0 - constants

export function HomeScreen({ navigation, route }) {
  // ^ 1 - state
  const [idCall, setIdCall] = useState("");
  const [userTypeCall, setUserTypeCall] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  // ^ 2 - params

  // ^ 3 - variables
  const routeName =
    userTypeCall === "client"
      ? Routes.MENU_USER_SCREEN
      : Routes.MENU_ADMIN_SCREEN;
  const data = [
    {
      title: "Menù del giorno",
      action: () => goToDishes(routeName, "menu"),
    },
    {
      link: "hamburger",
      title: "Cibo",
      action: () => goToDishes(routeName, "food"),
    },
    {
      title: "Bevande",
      action: () => goToDishes(routeName, "drink"),
    },
  ];

  // ^ 4 - functions
  const getDishesApiCall = async () => {
    const adminId = await Storage.get(Storage.ADMIN_ID);
    const userId = await Storage.get(Storage.USER_ID);
    const userType = await Storage.get(Storage.USER_TYPE);
    const id = userType == "client" ? adminId : userId;
    setIdCall(id);
    setUserTypeCall(userType);
    getDishes(id, (successCallback = () => {}), (errorCallback = () => {}));
  };

  // ^ 5 - effects
  useEffect(() => {
    getDishesApiCall();
    setIsVisible(false);
  }, []);
  const goToDishes = (route, category) => {
    navigation.navigate(route, {
      category,
      idCall,
    });
  };

  // ^ 6 - styles

  // ^ 7 - render
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          marginTop: 80,
        }}
      >
        <Text
          style={{ fontSize: 38, color: colors.grey800, fontWeight: "bold" }}
        >
          Scegli il tuo piatto!
        </Text>
        <Spacer />
        <CarouselComponent carouselData={data} ready={true} />
        <Loader isVisible={isVisible} />
      </View>
    </View>
  );
}
