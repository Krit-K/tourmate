import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
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

import { UserProvider } from "./context/UserContext";
import { FirebaseProvider } from "./context/FirebaseContext";

import AppStackScreens from "./stacks/AppStackScreens";
import MeStackScreens from "./stacks/MeStackScreens";

import PlaceScreen from "./screens/PlaceScreen";
import TourScreen from "./screens/TourScreen";
import TourGuideScreen from "./screens/TourGuideScreen";
import CalendarScreen from "./screens/CalendarScreen";

const AppStack = createStackNavigator();
const TabNav = createBottomTabNavigator();

const GeneralScreens = () => {
  return (
    <AppStack.Navigator
      headerMode="none"
      screenOptions={{
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
        gestureEnabled: "true",
        gestureDirection: "horizontal",
      }}
    >
      <AppStack.Screen name="MessageNotification" component={PlaceScreen} />
      <AppStack.Screen name="Language" component={PlaceScreen} />
      <AppStack.Screen name="TextSize" component={PlaceScreen} />
      <AppStack.Screen name="BlockedAccount" component={PlaceScreen} />
      <AppStack.Screen name="Currency" component={PlaceScreen} />
    </AppStack.Navigator>
  );
};

const EditProfileScreens = () => {
  return (
    <AppStack.Navigator
      headerMode="none"
      screenOptions={{
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
        gestureEnabled: "true",
        gestureDirection: "horizontal",
      }}
    >
      <AppStack.Screen name="Name" component={PlaceScreen} />
      <AppStack.Screen name="ID" component={PlaceScreen} />
      <AppStack.Screen name="PhoneNumber" component={PlaceScreen} />
      <AppStack.Screen name="EmailAddress" component={PlaceScreen} />
      <AppStack.Screen name="Password" component={PlaceScreen} />
      <AppStack.Screen name="Nationality" component={PlaceScreen} />
      <AppStack.Screen name="Birthday" component={PlaceScreen} />
    </AppStack.Navigator>
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
    <FirebaseProvider>
      <UserProvider>
        <NavigationContainer>
          <AppStack.Navigator
            headerMode="none"
            screenOptions={{
              ...TransitionPresets.SlideFromRightIOS,
              gestureEnabled: "true",
              gestureDirection: "horizontal",
            }}
          >
            <AppStack.Screen name="AppScreens" component={AppStackScreens} />
            <AppStack.Screen name="MeScreens" component={MeStackScreens} />
            <AppStack.Screen name="PlaceScreen" component={PlaceScreen} />
            <AppStack.Screen name="TourScreen" component={TourScreen} />
            <AppStack.Screen name="CalendarScreen" component={CalendarScreen} />
            <AppStack.Screen
              name="TourGuideScreen"
              component={TourGuideScreen}
            />
          </AppStack.Navigator>
        </NavigationContainer>
      </UserProvider>
    </FirebaseProvider>
  );
}
