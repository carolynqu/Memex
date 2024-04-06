import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { Lists } from "../types";
import { defaultPizzaImage } from "./notUsed/ProductListItem";
import { Feather } from "@expo/vector-icons";
import { Link, useSegments } from "expo-router";

type LongListItemProps = {
  item: Lists;
};

const SuggestedList = ({ item }: LongListItemProps) => {
  const segments = useSegments();

  return (
    // <Link
    //   style={styles.container}
    //   href={`/${segments[0]}/yourList/${item.id}`}
    //   asChild
    // >
    <Pressable style={styles.textContainer}>
      <Image
        source={{ uri: item.image || defaultPizzaImage }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.overlay} />
      <Text style={styles.text}> {item.name}</Text>
    </Pressable>
    // </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 2,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontFamily: "Lato-Black",
    fontSize: 25,
    color: "white",
    position: "absolute",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 350,
    height: 500,
    alignSelf: "center",
    borderRadius: 5,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.2)", // Change the alpha value to adjust the darkness
  },
  title: {
    fontFamily: "Lato-Regular",
    fontSize: 16,
    marginBottom: 3,
  },
  subtitleContainer: {
    flex: 1,
    marginLeft: 10,
  },
  subTitle: {
    color: Colors.light.tint,
    fontFamily: "Lato-Regular",
    fontSize: 12,
  },
  iconStyle: {
    color: Colors.light.tint,
  },
});

export default SuggestedList;
