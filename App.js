import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import {
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from "@expo-google-fonts/nunito";

import MainNavigation from "./navigation/MainNavigation";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  SplashScreen.preventAutoHideAsync();

  const loadFontsAsync = async () => {
    await Font.loadAsync({
      regular: Nunito_400Regular,
      medium: Nunito_500Medium,
      "semi-bold": Nunito_600SemiBold,
      bold: Nunito_700Bold,
      "extra-bold": Nunito_800ExtraBold,
    });
  };

  useEffect(() => {
    async function prepare() {
      try {
        await loadFontsAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  const tabBarOptions = {
    activeTintColor: "blue",
    inactiveTintColor: "gray",
    style: {
      backgroundColor: "white",
      borderTopWidth: 1,
      borderTopColor: "lightgray",
    },
    labelStyle: {
      fontSize: 16,
      fontWeight: "bold",
    },
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="main-navigation"
          component={MainNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  navigtorStyle: {
    padding: "10px",
  },
});
