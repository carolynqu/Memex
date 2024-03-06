import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import orders from "@assets/data/orders";
import OrderListItem from "@/components/OrderListItem";
import OrderItemListItem from "@/components/OrderItemListItem";
import { OrderStatusList } from "@/types";
import Colors from "@/constants/Colors";

import LongList from "@/components/LongList";

const YourLists = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Your Lists" }} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default YourLists;
