import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AuthStackScreens from "./AuthStackScreens";

export default AppStackScreens = () => {
  const AppStack = createStackNavigator();
  return (
    <AppStack.Navigator headerMode="none">
      <AppStack.Screen name="Auth" component={AuthStackScreens} />
    </AppStack.Navigator>
  );
};
