import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListingEditScreen from "../screens/ListingEditScreen";
import AccountScreen from "../screens/AccountScreen";
import routes from "./routes";
import FeedNavigator from "./FeedNavigator";

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={"Feed"} component={FeedNavigator} />
      <Tab.Screen
        name={routes.LISTINGS_EDIT_SCREEN}
        component={ListingEditScreen}
      />
      <Tab.Screen name={routes.ACCOUNT_SCREEN} component={AccountScreen} />
    </Tab.Navigator>
  );
}

export default AppNavigator;
