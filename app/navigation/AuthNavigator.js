import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name={routes.WELCOME_SCREEN}
        component={WelcomeScreen}
      />
      <Stack.Screen name={routes.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={routes.REGISTER_SCREEN} component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
