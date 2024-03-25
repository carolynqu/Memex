import Sizes from "@/constants/Sizes";
import { StyleSheet } from "react-native";

export const smallHeaderStyles = StyleSheet.create({
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
  headerTitle: { fontFamily: "Lato-Bold", fontSize: 18 },
});
