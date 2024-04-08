import React, { useState } from "react";
import { View, TextInput, Text, FlatList, StyleSheet } from "react-native";

import { Lists, Posts } from "@/types";
import lists from "@assets/data/lists";
import posts from "@assets/data/posts";

import Sizes from "@/constants/Sizes";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";

import SearchBar from "@/components/searchBar";

const searchPage = () => {
  return (
    <View style={styles.container}>
      <SearchBar showList={true}></SearchBar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Sizes.horizontalPadding,
    flex: 1,
  },
  searchBar: {
    fontSize: 16,
    fontFamily: "Lato-Regular",
    color: Colors.light.darkGray,
    padding: 10,
    backgroundColor: Colors.light.lightGray,
    borderRadius: 5,
  },
  list: {
    padding: 10,
  },
  listItem: {
    fontSize: 16,
    fontFamily: "Lato-Regular",
    padding: 5,
  },
});

export default searchPage;
