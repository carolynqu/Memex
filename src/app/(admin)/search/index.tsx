import React, { useState } from "react";
import { View, TextInput, Text, FlatList, StyleSheet } from "react-native";

import { Lists } from "@/types";
import lists from "@assets/data/lists";

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
    flex: 1,
    marginTop: 20,
  },
  searchBar: {
    fontSize: 18,
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
  },
  listItem: {
    fontSize: 18,
    padding: 10,
  },
});

export default SearchComponent;
