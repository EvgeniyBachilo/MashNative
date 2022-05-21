import React from "react";
import { View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import Jacket from "./app/assets/jacket.jpg";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     backgroundColor: "#f8f4f4",
    //     padding: 20,
    //     paddingTop: 100,
    //   }}
    // >
    //   <Card title="Red jacket for sale" subtitle="$100" image={Jacket} />
    // </View>
    // <ListingDetailsScreen />
    <ViewImageScreen />
  );
}
