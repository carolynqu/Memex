import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import lists from "@assets/data/lists";
import { OrderStatusList } from "@/types";
import Colors from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";

import PostList from "@/components/PostList";
import Sizes from "@/constants/Sizes";
import { smallHeaderStyles } from "@/constants/smallHeaderStyles";
import { Feather } from "@expo/vector-icons";

const ListDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  // console.log(id);
  const list = lists.find((l) => l.id.toString() === id);
  if (!list) {
    return <Text>List not found</Text>;
  }

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          title: list.name,
          // headerTitle: list.name,
          // headerTitleStyle: {
          //   fontFamily: "Lato-Bold",
          //   fontSize: 18,
          // },
          headerBackTitleVisible: false,
          // headerTintColor: "black",

          header: (props) => (
            <View style={smallHeaderStyles.container}>
              {/* not too sure why this goBack is not working */}
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Feather name="chevron-left" size={30} />
              </TouchableOpacity>
              <Text style={smallHeaderStyles.headerTitle}>{list.name}</Text>
              <Feather name="menu" size={30} />
            </View>
          ),
        }}
      />
      <FlatList
        data={list.posts}
        renderItem={({ item }) => <PostList item={item} />}
        contentContainerStyle={{
          paddingHorizontal: Sizes.horizontalPadding,
          paddingTop: 8,
          gap: 8,
        }}
      />
      {/* <Text style={styles.title}> {list.name} </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ListDetailScreen;
