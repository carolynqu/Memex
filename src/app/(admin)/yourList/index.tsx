import { View, FlatList } from "react-native";
import lists from "@assets/data/lists";
import LongList from "@/components/LongList";
import Sizes from "@/constants/Sizes";

export default function yourList() {
  return (
    <View>
      <FlatList
        data={lists}
        renderItem={({ item }) => <LongList item={item} />}
        contentContainerStyle={{
          paddingHorizontal: Sizes.horizontalPadding,
          paddingTop: 8,
          gap: 8,
        }}
      />
    </View>
  );
}
