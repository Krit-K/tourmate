import React from "react";
import styled from "styled-components";
import { Entypo, FontAwesome } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppLoading } from "expo";
import {
  useFonts,
  Comfortaa_300Light,
  Comfortaa_400Regular,
  Comfortaa_500Medium,
  Comfortaa_600SemiBold,
  Comfortaa_700Bold,
} from "@expo-google-fonts/comfortaa";

import HomeScreen from "./components/screens/HomeScreen";
import MessageScreen from "./components/screens/MessageScreen";
import ExploreScreen from "./components/screens/ExploreScreen";
import MeScreen from "./components/screens/MeScreen";
import PlaceScreen from "./components/screens/PlaceScreen";
import TourScreen from "./components/screens/TourScreen";
import TourGuideScreen from "./components/screens/TourGuideScreen";
import CalendarScreen from "./components/screens/CalendarScreen";

import Text from "./components/Text";

const AppStack = createStackNavigator();
const TabNav = createBottomTabNavigator();

const tabBarOptions = {
  showLabel: false,
  keyboardHidesTabBar: true,
  style: {
    backgroundColor: "#f3f3f3ff",
    borderTopColor: "#ede3daff",
  },
};

const TabNavScreen = () => {
  return (
    <TabNav.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "Message":
              iconName = "chat";
              break;
            case "Explore":
              iconName = "globe";
              break;
            case "Me":
              iconName = "user";
              break;
            default:
              iconName = "home";
              break;
          }
          const userFocused = iconName === "user";
          return (
            <TabBarContainer>
              <TabBarIconContainer focused={focused}>
                {userFocused ? (
                  <FontAwesome name={iconName} size={26} color={"black"} />
                ) : (
                  <Entypo name={iconName} size={24} color={"black"} />
                )}
              </TabBarIconContainer>
              <Text mini black>
                {route.name}
              </Text>
            </TabBarContainer>
          );
        },
      })}
    >
      <TabNav.Screen name="Home" component={HomeScreen} />
      <TabNav.Screen name="Message" component={MessageScreen} />
      <TabNav.Screen name="Explore" component={ExploreScreen} />
      <TabNav.Screen name="Me" component={MeScreen} />
    </TabNav.Navigator>
  );
};

export default function App() {
  let [fontsLoaded, error] = useFonts({
    Comfortaa_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <AppStack.Navigator mode="modal" headerMode="none">
        <AppStack.Screen name="App" component={TabNavScreen} />
        <AppStack.Screen name="PlaceScreen" component={PlaceScreen} />
        <AppStack.Screen name="TourScreen" component={TourScreen} />
        <AppStack.Screen name="TourGuideScreen" component={TourGuideScreen} />
        <AppStack.Screen name="CalendarScreen" component={CalendarScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

const TabBarIconContainer = styled.View`
  background-color: ${(props) => (props.focused ? "#f1b986ff" : "#f3f3f3ff")};
  padding: 2px 16px;
  border-radius: 32px;
  align-items: center;
  margin-bottom: -2px;
`;

const TabBarContainer = styled.View`
  align-items: center;
  padding: 2px 16px;
`;