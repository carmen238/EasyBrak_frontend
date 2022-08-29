import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { CustomText } from "../components/CustomText";
import { DishButton } from "../components/DishButton";
import { DropdownComponent } from "../components/DropdownComponent";
import { PrimaryButton } from "../components/PrimaryButton";
import { SimpleHeader } from "../components/SimpleHeader";
import { Spacer } from "../components/Spacer";
import { Routes } from "../navigation/stacks/Routes";
import { getDishes, listDishesApicall } from "../service/Service";
import { colors } from "../utils/Colors";

// ^ 0 - constants

export function UserMenuScreen({ navigation, route }) {
  // ^ 1 - state
  const [dishes, setDishes] = useState([]);
  const [oldDishesData, setOldDishesData] = useState([]);
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(null);
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("S");

  // ^ 2 - params
  const { idCall, category } = route?.params;

  // ^ 3 - variables

  // ^ 4 - functions
  const goBack = (state) => {
    if (dishes?.length === 0 && state != "C") {
      setStatus("E");
    } else if (state === "C") {
      setStatus("C");
    } else setStatus("F");
    navigation.navigate(Routes.MAIN_TAB_STACK);
  };
  const onDeleteAction = (id) => {
    const dish = dishes?.filter((el) => el.id === id);
    if (dish[0]?.dishesNumber > 1) {
      dish[0].dishesNumber = dish[0].dishesNumber - 1;
      setDishes(dishes?.filter((el) => el.id !== ""));
    } else setDishes(dishes?.filter((el) => el.id !== id));
  };

  const addDish = (item) => {
    if (!!item) {
      const dish = oldDishesData.filter((el) => el?.id === item);
      const newDish = dishes.filter((el) => el?.id === dish[0]?.id);
      if (newDish?.length > 0) {
        newDish[0].dishesNumber = newDish[0].dishesNumber + 1;
        setDishes([
          ...dishes,
          {
            id: "",
          },
        ]);
      } else
        setDishes([
          ...dishes,
          {
            dishName: dish[0]?.dishName,
            category: dish[0]?.category,
            dishPrice: dish[0]?.dishPrice,
            id: dish[0]?.id,
            dishesNumber: 1,
          },
        ]);
    }
  };

  const listDishes = () => {
    return dishes.length > 0 ? (
      <View style={containerList}>
        <CustomText
          text={"I tuoi piatti:"}
          textColor={colors.red}
          fontSize={30}
          center
          bold
        />
        <CustomText
          text={" Per confermare il tuo ordine clicca su 'Conferma' \n"}
          textColor={colors.red}
          fontSize={14}
          center
        />
        {dishes.map((el) => {
          if (!!el.id) {
            return (
              <DishButton
                data={el}
                index={el.id}
                onDelete={(id) => onDeleteAction(id)}
                typeUser={"client"}
              />
            );
          }
        })}
      </View>
    ) : (
      <CustomText
        text={"La lista dei tuoi piatti è vuota, scegli qualcosa e ordina :D"}
        textColor={colors.red}
        fontSize={30}
        bold
        center
      />
    );
  };
  const successCallback = (res) => {
    let data = res?.data?.data?.filter((el) => el.category === category);
    let dishes = [];
    for (let index = 0; index < data?.length; index++) {
      const element = data[index];
      const key = element.dishName + " " + element.dishPrice + " €";
      dishes[index] = { key: key, value: element.id };
    }
    setData([...dishes]);
    setOldDishesData([...res?.data.data]);
  };
  const errorCallback = (err) => {
    console.log(err);
  };

  const successCallbackGetList = (res) => {
    console.log("res", res);
    if (status === "S")
      res?.data?.map((dish) => {
        setDishes([
          ...dishes,
          {
            dishName: dish?.dishName,
            category: dish?.category,
            dishPrice: dish?.dishPrice,
            id: dish?.id,
            dishesNumber: dish.dishesNumber,
          },
        ]);
      });
    console.log("====================================");
    console.log(dishes);
    console.log("====================================");
  };
  const errorCallbackGetList = () => {};

  // ^ 5 - effects
  useEffect(() => {
    getDishes(idCall, successCallback, errorCallback);
    setValue(value);
  }, []);

  useEffect(() => {
    let dishesData = [];
    dishesData = dishes.filter((d) => d.dishName != null);
    listDishesApicall(
      status,
      dishesData,
      successCallbackGetList,
      errorCallbackGetList
    );
  }, [status]);

  // ^ 6 - styles
  const { containerList } = styles;

  // ^ 7 - render
  return (
    <SimpleHeader
      action={goBack}
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
        <CustomText
          text={"Scegli il tuo piatto:"}
          textColor={colors.red}
          fontSize={30}
          bold
          center
        />
        <Spacer />
        <DropdownComponent
          backgroundColor={colors.blue100}
          borderColor={colors.grey400}
          textColor={colors.grey800}
          data={data}
          value={value}
          setValue={setValue}
          isFocus={isFocus}
          setIsFocus={setIsFocus}
          nameSelection={"Scegli "}
          key={"dishName"}
          valueField={"id"}
          action={(item) => addDish(item)}
        />
        <Spacer />
        {listDishes()}
        <Spacer />
      </ScrollView>
      <View style={{ marginHorizontal: 24 }}>
        <PrimaryButton
          borderColorCard={colors.red}
          colorCard={dishes.length > 0 ? colors.red : colors.redOpacity}
          fontSize={24}
          textColor={colors.grey200}
          title={"Conferma "}
          disabled={!dishes.length > 0 ? true : false}
          action={() => {
            goBack("C");
          }}
        />
      </View>
    </SimpleHeader>
  );
}

// ^ 8 - style def
const styles = StyleSheet.create({
  containerList: {
    backgroundColor: colors.blue100,
    borderWidth: 0.5,
    borderColor: colors.grey400,
    borderRadius: 8,
    paddingVertical: 8,
  },
});
