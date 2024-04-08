import { View, Text, StyleSheet } from "react-native";
import React from "react";

type TagsProps = { label: String };

const Tags = ({ label }: TagsProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderWidth: 0.7,
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 14,
    fontFamily: "Lato-Medium",
  },
});

export default Tags;
