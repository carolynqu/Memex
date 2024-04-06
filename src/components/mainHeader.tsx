import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Sizes from "@/constants/Sizes";
import { Feather } from "@expo/vector-icons";

type mainHeaderProps = {
  title: string;
  iconName: React.ComponentProps<typeof Feather>["name"]; // Uses the type for icon names directly from Feather
  iconSize?: number; // Optional, with a default value if not provided
  iconColor?: string; // Optional, with a default value if not provided
  // onIconPress: () => void; // The action to perform on icon press
};
const mainHeader = ({
  title,
  iconName,
  iconSize = 24, // Default size
  iconColor = "black", // Default color
}: // onIconPress,
mainHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>{title}</Text>
      <TouchableOpacity>
        <Feather name={iconName} size={iconSize} color={iconColor} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 160,
    paddingTop: 94,
    paddingBottom: 28,
    paddingHorizontal: Sizes.horizontalPadding,
    width: "100%",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: { fontFamily: "Lato-Bold", fontSize: 32 },
});

export default mainHeader;
