import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Home from "../screens/main-navigation/Home";
import Profile from "../screens/main-navigation/Profile";
import Shop from "../screens/main-navigation/Shop";
import Categories from "../screens/main-navigation/Categories";
import Help from "../screens/main-navigation/Help";

import Header from "../components/MainHeader";

import { COLORS } from "../constants/theme";

const Tab = createBottomTabNavigator();

export default function App() {
  const tabBarLabelStyle = {
    fontSize: 12,
    color: COLORS.text,
    fontFamily: "semi-bold",
  };
  const tabBarStyle = {
    borderBlockColor: COLORS.primary,
    height: 60,
  };
  const tabs = [
    { name: "Home", component: Home, focused: "home", idle: "home-outline" },
    {
      name: "Categories",
      component: Categories,
      focused: "view-grid",
      idle: "view-grid-outline",
    },
    {
      name: "Mall",
      component: Shop,
      focused: "shopping",
      idle: "shopping-outline",
    },
    {
      name: "Profile",
      component: Profile,
      focused: "account-circle",
      idle: "account-circle-outline",
    },
    {
      name: "Help",
      component: Help,
      focused: "help-circle",
      idle: "help-circle-outline",
    },
  ];
  return (
    <Tab.Navigator initialRouteName="Home">
      {tabs.map((tab, index) => (
        <Tab.Screen
          name={tab.name}
          component={tab.component}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name={focused ? tab.focused : tab.idle}
                color={focused ? COLORS.primary : COLORS.text}
                size={26}
              />
            ),
            header: () => <Header />,
            tabBarStyle,
            tabBarLabelStyle,
          }}
          key={index}
        />
      ))}
    </Tab.Navigator>
  );
}
