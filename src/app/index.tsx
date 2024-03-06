import { View } from "react-native";
import React from "react";
import Button from "../components/Button";
import { Link } from "expo-router";
import { useCallback } from "react";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const index = () => {
  const [fontsLoaded, fontError] = useFonts({
    "Lato-Black": require("../../assets/fonts/Lato-Black.ttf"),
    "Lato-BlackItalic": require("../../assets/fonts/Lato-BlackItalic.ttf"),
    "Lato-Bold": require("../../assets/fonts/Lato-Bold.ttf"),
    "Lato-BoldItalic": require("../../assets/fonts/Lato-BoldItalic.ttf"),
    "Lato-Italic": require("../../assets/fonts/Lato-Italic.ttf"),
    "Lato-Light": require("../../assets/fonts/Lato-Light.ttf"),
    "Lato-LightItalic": require("../../assets/fonts/Lato-LightItalic.ttf"),
    "Lato-Regular": require("../../assets/fonts/Lato-Regular.ttf"),
    "Lato-Thin": require("../../assets/fonts/Lato-Thin.ttf"),
    "Lato-ThinItalic": require("../../assets/fonts/Lato-ThinItalic.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 10 }}>
      <Link href={"/(user)"} asChild>
        <Button text="User" />
      </Link>
      <Link href={"/(admin)"} asChild>
        <Button text="Admin" />
      </Link>
      <Link href={"/sign-in"} asChild>
        <Button text="SignIn" />
      </Link>
    </View>
  );
};

export default index;
