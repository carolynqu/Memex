import { View, FlatList, Text, StyleSheet, Image } from "react-native";

import products from "@assets/data/products";
import ProductListItem from "@components/ProductListItem";
import Sizes from "@/constants/Sizes";

import SuggestedList from "@/components/SuggestedLists";

import posts from "@assets/data/posts";
import lists from "@assets/data/lists";

const ImageItem = ({ item }: { item: any }) => (
  <Image source={{ uri: item.image }} style={styles.image} />
);

export default function menu() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.subHeader}>Jump Back Into</Text>
      <View style={styles.subContainer}>
        <FlatList
          data={posts}
          renderItem={ImageItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 8 }}
        />
      </View>
      <Text style={styles.subHeader}>Suggested Lists</Text>
      <View style={styles.subContainer}>
        <FlatList
          data={lists}
          renderItem={({ item }) => <SuggestedList item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 8 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { paddingHorizontal: Sizes.horizontalPadding },
  subHeader: { fontFamily: "Lato-Bold", fontSize: 20 },
  subContainer: { paddingVertical: 10 },
  image: { width: 100, height: 100, borderRadius: 5 },
});
