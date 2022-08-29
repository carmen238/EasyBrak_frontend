import React from "react";
import { StyleSheet, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { colors } from "../utils/Colors";

export function DropdownComponent({
  setIsFocus,
  setValue,
  isFocus,
  value,
  data,
  search = null,
  nameSelection = "Seleziona tipo utente",
  borderColor = colors.blue600,
  backgroundColor = "transaparent",
  textColor = colors.blue600,
  action = () => {},
}) {
  console.log("====================================");
  console.log(data);
  console.log("====================================");
  return (
    <View>
      <Dropdown
        style={[
          styles.dropdown,
          {
            borderColor: borderColor,
            backgroundColor: backgroundColor,
            textColor: colors.blue100,
          },
        ]}
        placeholderStyle={[styles.placeholderStyle, { color: textColor }]}
        selectedTextStyle={[styles.selectedTextStyle, { color: textColor }]}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        search={search}
        data={data}
        maxHeight={300}
        labelField="key"
        valueField="value"
        placeholder={!isFocus ? nameSelection : ""}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={(() => setValue(item?.value), setIsFocus(false))}
        onChange={(item) => {
          setValue(item?.value);
          action(item?.value);
          setIsFocus(false);
        }}
        textColor={colors.red}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  icon: {
    marginRight: 5,
  },

  placeholderStyle: {
    fontSize: 18,
  },
  selectedTextStyle: {
    fontSize: 20,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
