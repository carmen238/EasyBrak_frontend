import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { colors } from "../utils/Colors";
import Icon from "react-native-vector-icons/FontAwesome";

export function Card({
  icon,
  title,
  subtitle,
  subtitleColor = colors.grey600,
  subtitleIcon,
  subtitleIconVisible,
  action,
  isFirst,
  isLast,
}) {
  const { card, cardText, firstChild, lastChild, updateContainer } = styles;

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        action();
        checkTitle(title);
      }}
    >
      <View
        style={[card, isFirst ? firstChild : null, isLast ? lastChild : null]}
      >
        <Icon name={icon} size={24} color={colors.black} />
        <View style={cardText}>
          <View style={{ marginBottom: 4 }}>
            <Text text={title} />
          </View>
          <View style={updateContainer}>
            {subtitleIconVisible && (
              <View style={{ marginLeft: 4 }}>
                <Icon
                  name={subtitleIcon}
                  size={iconSize}
                  color={subtitleIcon}
                />
              </View>
            )}
            {subtitle ? (
              <Text text={subtitle} type={"caption-01"} color={subtitleColor} />
            ) : null}
          </View>
        </View>
        <Icon name={"arrow"} size={16} color={colors.black} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.secondaryGrey,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopWidth: 0,
  },
  firstChild: {
    borderTopWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  lastChild: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomWidth: 1,
  },
  cardText: {
    width: "70%",
  },
  updateContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
