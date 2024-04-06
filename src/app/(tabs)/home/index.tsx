import { View, FlatList, Text, StyleSheet, Image } from "react-native";

import products from "@assets/data/products";
import Sizes from "@/constants/Sizes";
import { globalTextStyles } from "@/constants/globalTextStyles";

import SuggestedList from "@/components/SuggestedLists";

import posts from "@assets/data/posts";
import lists from "@assets/data/lists";

const ImageItem = ({ item }: { item: any }) => (
  <Image source={{ uri: item.image }} style={styles.image} />
);

export default function home() {
  return (
    <View style={styles.mainContainer}>
      <Text style={globalTextStyles.subHeaders}>Jump Back Into</Text>
      <View style={styles.subContainer}>
        <FlatList
          data={posts}
          renderItem={ImageItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: Sizes.listGap }}
        />
      </View>
      <Text style={globalTextStyles.subHeaders}>Suggested Lists</Text>
      <View style={styles.subContainer}>
        <FlatList
          data={lists}
          renderItem={({ item }) => <SuggestedList item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: Sizes.listGap }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { paddingHorizontal: Sizes.horizontalPadding },
  subContainer: { paddingVertical: Sizes.containerGap },
  image: { width: 100, height: 100, borderRadius: 5 },
});
