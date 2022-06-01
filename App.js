import React, { useState, useEffect } from "react";
import { Button, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import myTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer theme={myTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
