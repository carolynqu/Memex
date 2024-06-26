import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import products from "@assets/data/products";
import { defaultPizzaImage } from "@/components/ProductListItem";
import { useState } from "react";
import Button from "@/components/Button";
import { useCart } from "@/provider/CartProvider";
import { PizzaSize } from "@/types";

const sizes: PizzaSize[] = ["S", "M", "L", "XL"];

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const { addItem } = useCart();

  const [selectedSize, setSelectedSize] = useState<PizzaSize>("M");
  const router = useRouter();

  const product = products.find((p) => p.id.toString() === id);
  const addToCart = () => {
    if (!product) return;
    addItem(product, selectedSize);
    router.push("/cart");
  };

  if (!product) {
    return <Text>Product not found</Text>;
  }
  return (
    <View>
      <Stack.Screen options={{ title: product.name }} />
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        style={styles.image}
      />

      <Text> Select Size</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => {
              setSelectedSize(size);
            }}
            key={size}
            style={[
              styles.size,
              { backgroundColor: selectedSize == size ? "lightgrey" : "white" },
            ]}
          >
            <Text
              style={[
                styles.sizeText,
                { color: selectedSize == size ? "black" : "lightgrey" },
              ]}
            >
              {" "}
              {size}{" "}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.price}> ${product.price} </Text>
      <Button onPress={addToCart} text="Add to Cart" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  size: {
    backgroundColor: "lightgrey",
    width: 50,
    aspectRatio: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  sizeText: { fontSize: 20, fontWeight: "500" },
});
export default ProductDetailsScreen;
