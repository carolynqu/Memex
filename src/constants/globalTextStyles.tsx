import { StyleSheet } from "react-native";
import Colors from "./Colors";

export const globalTextStyles = StyleSheet.create({
  mainHeaders: { fontFamily: "Lato-Bold", fontSize: 32 },
  subHeaders: { fontFamily: "Lato-SemiBold", fontWeight: "600", fontSize: 24 },
  smallHeaders: { fontFamily: "Lato-Bold", fontSize: 24 },
  listTitle: {
    fontFamily: "Lato-Regular",
    fontSize: 16,
    color: Colors.light.text,
    letterSpacing: 0.5,
  },
  listSubTitle: {
    fontFamily: "Lato-Light",
    fontSize: 14,
    color: Colors.light.darkGray,
    letterSpacing: 0.25,
  },
  largeListTitle: {
    fontFamily: "Lato-Regular",
    fontSize: 16,
    color: Colors.light.text,
    letterSpacing: 0.15,
  },
});
