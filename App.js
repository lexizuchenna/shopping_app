import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState, useEffect } from "react";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";

import MainNavigation from "./navigation/MainNavigation";

import Cart from "./screens/Cart";
import ProductPage from "./screens/ProductPage";

import { MainContext } from "./context/MainContext";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = Font.useFonts({
    regular: Poppins_400Regular,
    medium: Poppins_500Medium,
    "semi-bold": Poppins_600SemiBold,
    bold: Poppins_700Bold,
    "extra-bold": Poppins_800ExtraBold,
  });

  useEffect(() => {
    async function prepare() {
      try {
        if (fontsLoaded) {
          setIsAppReady(true);
          await SplashScreen.hideAsync();
        }
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, [fontsLoaded]);

  if (!isAppReady) return null;
  return (
    <MainContext>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="main-navigation"
            component={MainNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="cart"
            component={Cart}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="product-page"
            component={ProductPage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </MainContext>
  );
}
