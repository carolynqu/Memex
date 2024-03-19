import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { Lists } from "../types";
import { defaultPizzaImage } from "./ProductListItem";
import { Feather } from "@expo/vector-icons";
import { Link, useSegments } from "expo-router";

type LongListItemProps = {
  item: Lists;
};

const LongList = ({ item }: LongListItemProps) => {
  const segments = useSegments();

  return (
    <Link
      style={styles.container}
      href={`/${segments[0]}/yourList/${item.id}`}
      asChild
    >
      <View style={[styles.longList, styles.longFlexBox]}>
        <View style={[styles.thumbnailLongParent, styles.longFlexBox]}>
          <Image
            style={styles.thumbnailLongIcon}
            contentFit="cover"
            source={require("../assets/thumbnail-long.png")}
          />
          <View style={styles.textLong}>
            <Text style={styles.saved}>25 saved</Text>
            <Text style={styles.ddddff}>ddddff</Text>
          </View>
        </View>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  longFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  thumbnailLongIcon: {
    width: 55,
    height: 55,
  },
  saved: {
    top: 22,
    left: 0,
    fontSize: 10,
    fontWeight: "500",
    fontFamily: FontFamily.latoLight,
    color: "#9c9c9c",
    textAlign: "center",
    position: "absolute",
  },
  ddddff: {
    top: 0,
    right: 0,
    fontSize: 16,
    textTransform: "capitalize",
    fontWeight: "600",
    fontFamily: FontFamily.latoBold,
    color: "#000",
    textAlign: "left",
    position: "absolute",
  },
  textLong: {
    width: 50,
    height: 34,
    marginLeft: 10,
  },
  thumbnailLongParent: {
    width: 326,
    height: 55,
  },
  vectorIcon: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  longList: {
    borderRadius: 2,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    paddingRight: 10,
  },
});

export default LongList;
