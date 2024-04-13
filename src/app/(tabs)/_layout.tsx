import React from "react";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@components/useColorScheme";
import { useClientOnlyValue } from "@components/useClientOnlyValue";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>["name"];
//   color: string;
// }) {
//   return <FontAwesome size={20} style={{ marginTop: 8 }} {...props} />;
// }

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: Colors.light.tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        tabBarLabelStyle: { fontSize: 11, fontFamily: "Lato-Regular" },
      }}
    >
      <Tabs.Screen name="index" options={{ href: null }} />

      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Entypo
              name="home"
              style={styles.tabBarIcon}
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather
              name="search"
              style={styles.tabBarIcon}
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="yourList"
        options={{
          title: "Your List",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather
              name="list"
              style={styles.tabBarIcon}
              size={25}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
const styles = StyleSheet.create({
  tabBarIcon: {
    marginTop: 8,
  },
});
