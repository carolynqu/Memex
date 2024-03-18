import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { Posts } from "../types";
import { defaultPizzaImage } from "./ProductListItem";
import { Feather } from "@expo/vector-icons";

type PostListItemProps = {
  item: Posts;
};

const PostList = ({ item }: PostListItemProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.image || defaultPizzaImage }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
      <Feather name="more-horizontal" style={styles.iconStyle} size={20} />
    </View>
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
  image: {
    width: 55,
    aspectRatio: 1,
    alignSelf: "center",
    marginRight: 10,
    borderRadius: 2,
  },
  title: {
    fontFamily: "Lato-Regular",
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

export default PostList;
