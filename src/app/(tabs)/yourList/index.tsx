import { View, FlatList } from "react-native";
import lists from "@assets/data/lists";
import LongList from "@/components/LongList";
import Sizes from "@/constants/Sizes";
import createButton from "@/components/createButton";

export default function yourList() {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={lists}
        renderItem={({ item }) => <LongList item={item} />}
        contentContainerStyle={{
          paddingHorizontal: Sizes.horizontalPadding,
          gap: Sizes.listGap,
        }}
      />
      {createButton()}
    </View>
  );
}
