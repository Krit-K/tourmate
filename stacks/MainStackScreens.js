import React from "react";
import styled from "styled-components";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import MessageScreen from "../screens/MessageScreen";
import ExploreScreen from "../screens/ExploreScreen";
import MeScreen from "../screens/MeScreen";

import Text from "../components/Text";

export default MainStackScreens = () => {
  const MainStack = createBottomTabNavigator();

  const tabBarOptions = {
    showLabel: false,
    keyboardHidesTabBar: true,
    style: {
      backgroundColor: "#f3f3f3ff",
      borderTopColor: "#ede3daff",
    },
  };

  const screenOptions = ({ route }) => ({
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
  });

  return (
    <MainStack.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={screenOptions}
    >
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="Message" component={MessageScreen} />
      <MainStack.Screen name="Explore" component={ExploreScreen} />
      <MainStack.Screen name="Me" component={MeScreen} />
    </MainStack.Navigator>
  );
};

const TabBarIconContainer = styled.View`
  background-color: ${(props) => (props.focused ? "#abd3c6" : "#f3f3f3ff")};
  padding: 2px 16px;
  border-radius: 32px;
  align-items: center;
  margin-bottom: -2px;
`;

const TabBarContainer = styled.View`
  align-items: center;
  padding: 2px 16px;
`;
