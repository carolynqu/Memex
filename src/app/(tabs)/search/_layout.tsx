import mainHeader from "@/components/mainHeader";
import { Stack } from "expo-router";

export default function MenuStack() {
  return (
    <Stack screenOptions={{}}>
      <Stack.Screen
        name="index"
        options={{
          title: "Search",
          header: (props) =>
            mainHeader({ title: "Search", iconName: "search" }),
        }}
      />
    </Stack>
  );
}
