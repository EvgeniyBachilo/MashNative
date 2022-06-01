import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen name={routes.LISTINGS_SCREEN} component={ListingsScreen} />
      <Stack.Screen
        name={routes.LISTING_DETAILS_SCREEN}
        component={ListingDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
