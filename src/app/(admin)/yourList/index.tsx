import { View, FlatList, Text } from "react-native";

import products from "@assets/data/products";
import ProductListItem from "@components/ProductListItem";
import LongList from "@/components/LongList";

export default function yourList() {
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => <LongList item={item} />}
        contentContainerStyle={{ margin: 10, gap: 8 }}
      />
    </View>
  );
}
