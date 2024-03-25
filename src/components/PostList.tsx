import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { Posts } from "../types";
import { defaultPizzaImage } from "./ProductListItem";
import { Feather } from "@expo/vector-icons";
import LongList from "./LongList";
import { Link, useSegments } from "expo-router";

type PostListItemProps = {
  item: Posts;
};

const PostList = ({ item }: PostListItemProps) => {
  const segments = useSegments();

  return (
    <Link
      style={styles.container}
      href={`/${segments[0]}/yourList/${item.id}`}
      asChild
    >
      <Pressable>
        <Image
          source={{ uri: item.image || defaultPizzaImage }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.subtitleContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.subTitle}>description</Text>
        </View>
        <Feather name="more-horizontal" style={styles.iconStyle} size={20} />
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 2,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 5,
  },
  image: {
    width: 55,
    aspectRatio: 1,
    alignSelf: "center",
    borderRadius: 2,
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

export default PostList;
