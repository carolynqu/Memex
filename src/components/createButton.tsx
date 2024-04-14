import { View, Text, StyleSheet } from "react-native";
import React from "react";

const createButton = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.button}>Add</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: 60,
    aspectRatio: 1,
    borderRadius: 30,
    backgroundColor: "black",
  },
  button: {
    fontFamily: "Lato-Bold",
    color: "white",
    fontSize: 10,
  },
});

export default createButton;
