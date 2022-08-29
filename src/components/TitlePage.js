import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "../utils/Colors";

export function TitlePage({ title }) {
  const { line, text, container } = styles;

  return (
    <View style={container}>
      <View style={line} />
      <Text style={text}>{title}</Text>
      <View style={line} />
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    width: 200,
    height: 4,
    backgroundColor: colors.red,
    borderRadius: 20,
  },
  container: {
    marginBottom: 50,
    flexDirection: "row",
    marginTop: 50,
    justifyContent: "center",
  },
  text: { fontSize: 40, color: colors.red },
});
