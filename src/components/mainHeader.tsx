import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Sizes from "@/constants/Sizes";
import { Feather } from "@expo/vector-icons";

type mainHeaderProps = { title: string };
const mainHeader = ({ title }: mainHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>{title}</Text>
      <Feather name="menu" size={25} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 125,
    paddingTop: 72,
    paddingHorizontal: Sizes.horizontalPadding,
    width: "100%",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: { fontFamily: "Lato-Black", fontSize: 30 },
});

export default mainHeader;
