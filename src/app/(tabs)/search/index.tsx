import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Sizes from "@/constants/Sizes";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import SearchBar from "@/components/searchBar";
import Tags from "@/components/tags";
import lists from "@assets/data/lists";
import LongList from "@/components/LongList";

import { globalTextStyles } from "@/constants/globalTextStyles";

// SearchComponent definition
const SearchComponent = () => {
  return (
    <View style={styles.container}>
      <Link href={`/(tabs)/search/searchPage`} asChild>
        <Pressable>
          {/* Not the best way to do this */}
          <Text style={styles.searchBar}> Search Lists </Text>
        </Pressable>
      </Link>
      <View style={styles.searchTagContainer}>
        <Text style={globalTextStyles.subHeaders}>Search Using Tags</Text>
        <FlatList
          data={["Popular", "Trending", "Recommended", "New", "Top", "Recent"]}
          renderItem={({ item }) => <Tags label={item} />}
          horizontal
          contentContainerStyle={{
            gap: Sizes.listGap,
          }}
        ></FlatList>
      </View>
      <View style={styles.searchTagContainer}>
        <Text style={globalTextStyles.subHeaders}>Frequently Used Lists</Text>
        <FlatList
          data={lists}
          renderItem={({ item }) => <LongList item={item} />}
          contentContainerStyle={{
            gap: Sizes.listGap,
          }}
        />
      </View>
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
  searchTagContainer: {
    paddingTop: Sizes.containerGap,
    gap: Sizes.containerGap,
    flexDirection: "column",
  },
  tagList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: Sizes.listGap,
  },
});

export default SearchComponent;
