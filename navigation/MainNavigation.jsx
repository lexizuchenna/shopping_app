import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState, useEffect } from "react";

import Home from "../screens/Home";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";
import Shop from "../screens/Shop";

const Tab = createBottomTabNavigator();

export default function App() {
  const tabBarStyle = {
    backgroundColor: "#ffff00",
    paddingBottom: 20,
    borderTopWidth: 0,
    elevation: 0, // This will remove the shadow on Android
    shadowOpacity: 0, // This will remove the shadow on iOS
  };

  const options = {
    tabBarStyle: tabBarStyle,
    tabBarShowLabel: false,
    headerShown: false,
    tabBarIcon: ({ focused }) => (
      <Ionicons
        name={focused ? "grid" : "grid-outline"}
        color={focused ? COLORS.secondary : COLORS.secondary1}
        size={26}
      />
    ),
  };

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
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
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
