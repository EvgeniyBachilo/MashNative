import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.ACCOUNT_SCREEN} component={AccountScreen} />
      <Stack.Screen
        name={routes.MESSAGES_SCREEN}
        component={MessagesScreen}
      />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
