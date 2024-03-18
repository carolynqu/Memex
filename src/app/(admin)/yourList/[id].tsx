import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import lists from "@assets/data/lists";
import { OrderStatusList } from "@/types";
import Colors from "@/constants/Colors";

import PostList from "@/components/PostList";

const ListDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  console.log(id);
  const list = lists.find((l) => l.id.toString() === id);
  if (!list) {
    return <Text>List not found</Text>;
  }

  return (
    <View>
      <Stack.Screen options={{ title: list.name }} />
      <PostList item={list} />
      <FlatList
        data={list.posts}
        renderItem={({ item }) => <PostList item={item} />}
        contentContainerStyle={{ gap: 8 }}
      />
      <Text style={styles.title}> {list.name} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ListDetailScreen;
