import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import GeneralScreen from "../screens/GeneralScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import InviteScreen from "../screens/InviteScreen";
import UsefulContactsScreen from "../screens/UsefulContactsScreen";
import AboutUsScreen from "../screens/AboutUsScreen";
import VisitedPlaceScreen from "../screens/VisitedPlaceScreen";

export default MeStackScreens = () => {
  const MeStack = createStackNavigator();
  return (
    <MeStack.Navigator headerMode="none">
      <MeStack.Screen name="GeneralScreen" component={GeneralScreen} />
      <MeStack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      <MeStack.Screen name="InviteScreen" component={InviteScreen} />
      <MeStack.Screen
        name="UsefulContactsScreen"
        component={UsefulContactsScreen}
      />
      <MeStack.Screen name="AboutUsScreen" component={AboutUsScreen} />
      <MeStack.Screen
        name="VisitedPlaceScreen"
        component={VisitedPlaceScreen}
      />
    </MeStack.Navigator>
  );
};
