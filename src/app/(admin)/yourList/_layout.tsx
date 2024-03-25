import { Feather } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function MenuStack() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Your List",
          header: (props) => (
            <View style={styles.container}>
              <Text style={styles.headerTitle}>Your Lists</Text>
              <Feather name="menu" size={25} />
            </View>
          ),

          headerLeft: () => null,
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 125,
    paddingTop: 72,
    paddingHorizontal: 20,
    width: "100%",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: { fontFamily: "Lato-Black", fontSize: 30 },
});
