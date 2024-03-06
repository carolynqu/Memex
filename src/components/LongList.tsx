import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { Product } from "../types";
import { defaultPizzaImage } from "./ProductListItem";
import { Feather } from "@expo/vector-icons";

type LongListItemProps = {
  item: Product;
};

const LongList = ({ item }: LongListItemProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.image || defaultPizzaImage }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subTitle}>{item.price}</Text>
      </View>
      <Feather name="more-horizontal" style={styles.iconStyle} size={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 2,
    padding: 5,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 55,
    aspectRatio: 1,
    alignSelf: "center",
    marginRight: 10,
  },
  title: {
    fontFamily: "Lato-Bold",
    fontSize: 16,
    marginBottom: 3,
  },
  subtitleContainer: {
    flexDirection: "row",
    gap: 5,
  },
  subTitle: {
    color: Colors.light.tint,
    fontFamily: "Lato-Regular",
    fontSize: 12,
  },
  iconStyle: {
    marginRight: 10,
  },
});

export default LongList;
