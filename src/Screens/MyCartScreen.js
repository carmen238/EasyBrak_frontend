import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { colors } from "../utils/Colors";
import { SimpleHeader } from "../components/SimpleHeader";
import { Spacer } from "../components/Spacer";
import { TextInputField } from "../components/TextInputField";
import { RoundButton } from "../components/RoundButton";
import { getDishes, listDishesApicall } from "../service/Service";
import { camelCaseText } from "../utils/utils";
import { PrimaryButton } from "../components/PrimaryButton";
import { CustomText } from "../components/CustomText";
import { Loader } from "../components/Loader";
import { Routes } from "../navigation/stacks/Routes";
import { commonStyles } from "../utils/CommonStyles";

export function MyCartScreen({ navigation, route }) {
  // ^ 1 - state
  const [isVisible, setIsVisible] = useState(false);
  const [dishesData, setDishesData] = useState([]);
  const [dishesMenu, setDishesMenu] = useState([]);
  const [dishName, setDishName] = useState("");
  const [index, setIndex] = useState(0);
  const [dishPrice, setDishPrice] = useState("");
  const [status, setStatus] = useState("S");

  // ^ 2 - params

  // ^ 3 - variables

  // ^ 4 - functions

  // ^ 6 - styles

  // ^ 7 - render
  //BODY
  return (
    <>
      <ScrollView style={{ padding: 24 }}>
        <Spacer />
        <CustomText
          text={"I tuoi ordini"}
          fontSize={32}
          textColor={colors.red}
          bold
          center
        />
      </ScrollView>

      <Loader isVisible={false} />
    </>
  );
}

// ^ 8 - style def
const styles = StyleSheet.create({
  lottie: {
    width: 70,
    height: 70,
  },
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    borderWidth: 0.5,
    borderColor: colors.grey400,
    backgroundColor: colors.blue100,
    borderRadius: 8,
    paddingVertical: 8,
    flex: 1,
    marginBottom: 10,
    padding: 15,
  },
  minusStyle: {
    borderWidth: 1,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    height: 25,
    width: 25,
    borderColor: colors.red,
  },
});
