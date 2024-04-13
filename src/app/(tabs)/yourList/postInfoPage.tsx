import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import posts from "@assets/data/posts";
import { useNavigation } from "@react-navigation/native";

import Sizes from "@/constants/Sizes";
import { smallHeaderStyles } from "@/constants/smallHeaderStyles";
import { Feather } from "@expo/vector-icons";

const postInfoPage = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  // console.log(id);
  const post = posts.find((p) => p.id.toString() === id);
  if (!post) {
    return <Text>Post not found</Text>;
  }

  const navigation = useNavigation();

  return (
    <View>
      <Stack.Screen
        options={{
          title: post.name,
          // headerTitle: list.name,
          // headerTitleStyle: {
          //   fontFamily: "Lato-Bold",
          //   fontSize: 18,
          // },
          headerBackTitleVisible: false,
          // headerTintColor: "black",

          header: (props) => (
            <View style={smallHeaderStyles.container}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Feather name="chevron-left" size={30} />
              </TouchableOpacity>
              <Text style={smallHeaderStyles.headerTitle}>{post.name}</Text>
              <Feather name="menu" size={30} />
            </View>
          ),
        }}
      />

      <Image
        source={{ uri: post.image || "" }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>{post.name}</Text>
      <Text style={styles.description}>
        {post.description || "No description"}
      </Text>
      {/* {post.link && <Text> View Original</Text>} */}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    fontFamily: "Lato-Bold",
    fontSize: 24,
    marginVertical: 12,
    marginHorizontal: Sizes.horizontalPadding,
  },
  description: {
    fontFamily: "Lato-Regular",
    fontSize: 16,
    marginBottom: 12,
    marginHorizontal: Sizes.horizontalPadding,
  },
});

export default postInfoPage;
