import mainHeader from "@/components/mainHeader";
import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";

export default function HomeStack() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          header: (props) => mainHeader({ title: "For You", iconName: "menu" }),
        }}
      />
    </Stack>
  );
}
