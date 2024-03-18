import { View, FlatList } from "react-native";
import lists from "@assets/data/lists";
import LongList from "@/components/LongList";

export default function yourList() {
  return (
    <View>
      <FlatList
        data={lists}
        renderItem={({ item }) => <LongList item={item} />}
        contentContainerStyle={{ padding: 10, gap: 8 }}
      />
    </View>
  );
}
