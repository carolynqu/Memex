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
  const [filteredLists, setFilteredLists] = useState<Lists[]>(lists);

  const handleSearch = (text: string) => {
    setQuery(text);
    if (!text.trim()) {
      setFilteredLists(lists);
      return;
    }
    const filtered = lists.filter((list) =>
      list.name.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredLists(filtered);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Lists"
        value={query}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredLists}
        style={styles.list}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.listItem}>{item.name}</Text>
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
