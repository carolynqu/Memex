import { FlatList } from "react-native";

import orders from "@assets/data/orders";
import OrderListItem from "@/components/notUsed/OrderListItem";

import { Stack } from "expo-router";

export default function OrdersScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Orders" }} />
      <FlatList
        data={orders}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        renderItem={({ item }) => <OrderListItem order={item} />}
      />
    </>
  );
}
