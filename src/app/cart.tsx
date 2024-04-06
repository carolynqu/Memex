import { View, Text, Platform, StyleSheet, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useCart } from "@/provider/CartProvider";
import CartListItem from "@/components/notUsed/CartListItem";
import Button from "@/components/notUsed/Button";

const CartScreen = () => {
  const { items, total } = useCart();

  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{ gap: 10 }}
      ></FlatList>

      <Text style={{ marginTop: 20, fontSize: 20, fontWeight: "500" }}>
        Total: ${total}
      </Text>
      <Button text="Checkout" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CartScreen;
