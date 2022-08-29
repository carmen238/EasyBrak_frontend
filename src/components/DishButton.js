import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../utils/Colors";
import { commonStyles } from "../utils/CommonStyles";
import { camelCaseText } from "../utils/utils";
import { CustomText } from "./CustomText";

export function DishButton({ data, index, onDelete, typeUser }) {
  const { container, containerText, buttonStyle } = styles;
  const { row, alignEnd, flex } = commonStyles;

  return (
    <View style={container}>
      <View style={row}>
        {typeUser == "client" ? (
          <CustomText
            text={
              "x " + data?.dishesNumber + " " + camelCaseText(data?.dishName)
            }
            fontSize={25}
            textColor={colors.grey700}
            bold
          />
        ) : (
          <CustomText
            text={"• " + camelCaseText(data?.dishName)}
            fontSize={25}
            textColor={colors.grey700}
            bold
          />
        )}

        <CustomText
          containerStyle={containerText}
          text={data?.dishPrice + " €"}
          fontSize={20}
          textColor={colors.grey700}
        />
      </View>
      <View style={[alignEnd, flex]}>
        <TouchableOpacity onPress={() => onDelete(index)} style={buttonStyle}>
          <Icon name={"minus"} color={colors.red} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 4,
  },
  containerText: {
    justifyContent: "center",
    alignItem: "center",
    top: 2,
    left: 5,
  },
  buttonStyle: {
    borderWidth: 1,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    height: 25,
    width: 25,
    borderColor: colors.red,
  },
});
