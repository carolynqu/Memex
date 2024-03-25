import { Feather } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import Sizes from "../../../constants/Sizes";
import mainHeader from "@/components/mainHeader";

export default function MenuStack() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Your List",
          header: (props) => mainHeader({ title: "Your List" }),
        }}
      />
    </Stack>
  );
}

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
