import React, { useState } from "react";
import { View, TextInput, Text, FlatList, StyleSheet } from "react-native";

import { Lists, Posts } from "@/types";
import lists from "@assets/data/lists";
import posts from "@assets/data/posts";

import Sizes from "@/constants/Sizes";
import Colors from "@/constants/Colors";

// SearchComponent definition
const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<
    (Lists | (Posts & { isList?: boolean }))[]
  >([]);

  const handleSearch = (text: string) => {
    setQuery(text);
    if (!text.trim()) {
      setResults([]);
      return;
    }

    const filteredLists = lists
      .filter((list) => list.name.toLowerCase().includes(text.toLowerCase()))
      .map((list) => ({ ...list, isList: true }));

    const filteredPosts = posts.filter((post) =>
      post.name.toLowerCase().includes(text.toLowerCase()),
    );

    setResults([...filteredLists, ...filteredPosts]);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Lists"
        value={query}
        onChangeText={handleSearch}
      />
      {/* make this into another page */}
      <FlatList
        data={results}
        keyExtractor={(item, index) => item.id.toString() + index}
        renderItem={({ item }) => (
          <Text style={styles.listItem}>
            {(item as Posts & { isList?: boolean }).isList ? "⭐ " : ""}
            {item.name}
          </Text>
        )}
      />
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

export default SearchComponent;
