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

export function AdminMenuScreen({ navigation, route }) {
  // ^ 1 - state
  const [isVisible, setIsVisible] = useState(false);
  const [dishesData, setDishesData] = useState([]);
  const [dishesMenu, setDishesMenu] = useState([]);
  const [dishName, setDishName] = useState("");
  const [index, setIndex] = useState(0);
  const [dishPrice, setDishPrice] = useState("");
  const [status, setStatus] = useState("S");

  // ^ 2 - params
  const { idCall, category } = route?.params;

  // ^ 3 - variables

  // ^ 4 - functions
  const goBack = (state) => {
    if (dishesData?.length === 0 && state != "C") {
      setStatus("E");
    } else if (state === "C") {
      setStatus("C");
    } else setStatus("F");
    navigation.navigate(Routes.MAIN_TAB_STACK);
  };
  const onDeleteAction = (data) => {
    setDishesData(dishesData.filter((item) => item.index !== data.index));
  };

  const successCallback = (res) => {
    setIsVisible(false);
    setDishesMenu(res?.data?.data?.filter((el) => el.category === category));
    console.log(res);
  };
  const errorCallback = (err) => {
    console.log(err);
  };

  const successCallbackGetList = (res) => {
    if (!!res?.data) setDishesData(res?.data);
  };
  const errorCallbackGetList = () => {};

  // ^ 5 - effects
  useEffect(() => {
    setIsVisible(true);
    getDishes(idCall, successCallback, errorCallback);
  }, []);

  useEffect(() => {
    listDishesApicall(
      status,
      dishesData,
      successCallbackGetList,
      errorCallbackGetList
    );
  }, [status]);

  // ^ 6 - styles
  const { buttonStyle, container, minusStyle } = styles;
  const { alignEnd, flex } = commonStyles;

  // ^ 7 - render
  //BODY
  return (
    <SimpleHeader
      action={() => goBack()}
      navigation={navigation}
      iconName={"reply"}
      iconSize={24}
      text={"Menù"}
      textStyle={{ color: colors.darkBlue200 }}
      style={{ flex: 1 }}
      colorText={colors.grey200}
      safeAreaBgColor={colors.grey200}
      iconColor={colors.grey200}
    >
      <ScrollView style={{ padding: 24 }}>
        <Spacer large />
        {dishesMenu?.length > 0 ? (
          <View style={container}>
            <TouchableOpacity
              style={{ top: 8, right: 8, position: "absolute" }}
              onPress={() => setStatus(status === "U" ? "S" : "U")}
            >
              <Icon name={"pencil"} color={colors.red} />
            </TouchableOpacity>
            <CustomText text={"Menù"} textColor={colors.red} bold center />

            {dishesMenu?.map((el) => (
              <View style={{ flexDirection: "row", flex: 1 }}>
                <CustomText
                  text={
                    "∙ " +
                    camelCaseText(el.dishName) +
                    " " +
                    el.dishPrice +
                    " €"
                  }
                  fontSize={20}
                  textColor={colors.blue600}
                />
                {status === "U" ? (
                  <View style={[alignEnd, flex]}>
                    <TouchableOpacity
                      onPress={() => {
                        const dishName = el.dishName;
                        const dishPrice = el.dishPrice;
                        const id = el.id;
                        setDishesMenu(
                          dishesMenu.filter((dish) => dish.id !== id)
                        );
                        setDishesData([
                          ...dishesData,
                          { dishName, dishPrice, index: 99, id, category },
                        ]);
                      }}
                      style={minusStyle}
                    >
                      <Icon name={"minus"} color={colors.red} />
                    </TouchableOpacity>
                    <Spacer size={10} />
                  </View>
                ) : null}
              </View>
            ))}
          </View>
        ) : null}
        <Text style={{ fontSize: 30, color: colors.red, fontWeight: "bold" }}>
          Aggiungi nuovo piatto:
        </Text>
        <Spacer />
        <TextInputField
          title={"Nome del piatto:"}
          borderBottomColor={colors.blue600}
          onChangeText={(val) => {
            setDishName(val);
          }}
          fontSize={24}
          textColor={colors.blue600}
        />
        <TextInputField
          title={"Prezzo:"}
          borderBottomColor={colors.blue600}
          onChangeText={(val) => {
            setDishPrice(val);
          }}
          fontSize={24}
          textColor={colors.blue600}
        />
        <View style={{ marginLeft: 30 }}>
          <RoundButton
            iconName={"arrow-right"}
            iconSize={25}
            buttonStyle={buttonStyle}
            colorCard={colors.red}
            borderColorCard={colors.red}
            iconColor={colors.grey200}
            action={() => {
              setDishesData([
                ...dishesData,
                { dishName, dishPrice, index: index, category },
              ]);
              setIndex(index + 1);
            }}
            disabled={dishName == "" || dishPrice == ""}
          />
          <Spacer />
        </View>

        {dishesData?.length > 0 &&
          dishesData?.map((data) => {
            if (data.index !== 99)
              return (
                <View style={container}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      paddingLeft: 32,
                      flex: 1,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 25,
                        fontWeight: "bold",
                        marginRight: 15,
                        color: colors.blue600,
                      }}
                    >
                      {camelCaseText(data?.dishName)}
                    </Text>
                    <Text
                      style={{
                        fontSize: 20,
                        marginRight: 10,
                        color: colors.blue600,
                      }}
                    >
                      {data?.dishPrice + " €"}
                    </Text>
                    <View
                      style={{
                        alignItems: "flex-end",
                        flex: 1,
                        paddingRight: 16,
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => {
                          onDeleteAction(data);
                        }}
                        style={minusStyle}
                      >
                        <Icon name={"minus"} color={colors.red} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
          })}
      </ScrollView>
      <View style={{ marginHorizontal: 24 }}>
        <PrimaryButton
          borderColorCard={colors.red}
          colorCard={dishesData?.length > 0 ? colors.red : colors.redOpacity}
          fontSize={24}
          textColor={colors.grey200}
          title={"Conferma "}
          disabled={!dishesData?.length > 0 ? true : false}
          action={() => {
            goBack("C");
          }}
        />
      </View>
      <Loader isVisible={isVisible} />
    </SimpleHeader>
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
