import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { useColorScheme } from "@components/useColorScheme";

import CartProvider from "@/provider/CartProvider";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Lato-Black": require("../../assets/fonts/Lato-Black.ttf"),
    "Lato-BlackItalic": require("../../assets/fonts/Lato-BlackItalic.ttf"),
    "Lato-Bold": require("../../assets/fonts/Lato-Bold.ttf"),
    "Lato-BoldItalic": require("../../assets/fonts/Lato-BoldItalic.ttf"),
    "Lato-Hairline": require("../../assets/fonts/Lato-Hairline.ttf"),
    "Lato-HairlineItalic": require("../../assets/fonts/Lato-HairlineItalic.ttf"),
    "Lato-Heavy": require("../../assets/fonts/Lato-Heavy.ttf"),
    "Lato-HeavyItalic": require("../../assets/fonts/Lato-HeavyItalic.ttf"),
    "Lato-Italic": require("../../assets/fonts/Lato-Italic.ttf"),
    "Lato-Light": require("../../assets/fonts/Lato-Light.ttf"),
    "Lato-LightItalic": require("../../assets/fonts/Lato-LightItalic.ttf"),
    "Lato-Medium": require("../../assets/fonts/Lato-Medium.ttf"),
    "Lato-MediumItalic": require("../../assets/fonts/Lato-MediumItalic.ttf"),
    "Lato-Regular": require("../../assets/fonts/Lato-Regular.ttf"),
    "Lato-SemiBold": require("../../assets/fonts/Lato-Semibold.ttf"),
    "Lato-SemiBoldItalic": require("../../assets/fonts/Lato-SemiboldItalic.ttf"),
    "Lato-Thin": require("../../assets/fonts/Lato-Thin.ttf"),
    "Lato-ThinItalic": require("../../assets/fonts/Lato-ThinItalic.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <CartProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </CartProvider>
    </ThemeProvider>
  );
}
