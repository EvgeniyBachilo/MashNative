import React, { useState, useEffect } from "react";
import { Button, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import myTheme from "./app/navigation/navigationTheme";

export default function App() {
  return (
    <NavigationContainer theme={myTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
}
