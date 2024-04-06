// import { View, Text, Image, StyleSheet, Pressable } from "react-native";
// import React from "react";
// import { Link, Stack, useLocalSearchParams, useRouter } from "expo-router";
// import products from "@assets/data/products";
// import { useState } from "react";
// import Button from "@/components/notUsed/Button";
// import { useCart } from "@/provider/CartProvider";
// import { PizzaSize } from "@/types";
// import { FontAwesome } from "@expo/vector-icons";
// import Colors from "@/constants/Colors";

// const ProductDetailsScreen = () => {
//   const { id } = useLocalSearchParams();
//   const { addItem } = useCart();

//   const [selectedSize, setSelectedSize] = useState<PizzaSize>("M");
//   const router = useRouter();

//   const product = products.find((p) => p.id.toString() === id);

//   if (!product) {
//     return <Text>Product not found</Text>;
//   }
//   return (
//     <View>
//       <Stack.Screen
//         options={{
//           title: "Menu",
//           headerRight: () => (
//             <Link href={`/(admin)/home/create?id=${id}`} asChild>
//               <Pressable>
//                 {({ pressed }) => (
//                   <FontAwesome
//                     name="pencil"
//                     size={25}
//                     color={Colors.light.tint}
//                     style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
//                   />
//                 )}
//               </Pressable>
//             </Link>
//           ),
//         }}
//       />
//       <Stack.Screen options={{ title: product.name }} />
//       <Image
//         source={{ uri: product.image || defaultPizzaImage }}
//         style={styles.image}
//       />
//       <Text style={styles.title}> {product.name} </Text>
//       <Text style={styles.price}> ${product.price} </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "white",
//     flex: 1,
//     padding: 10,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   image: {
//     width: "100%",
//     aspectRatio: 1,
//   },
//   price: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginTop: 20,
//   },
// });
// export default ProductDetailsScreen;
