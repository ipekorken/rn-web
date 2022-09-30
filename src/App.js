import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainStack from "./folders/routes/MainStack";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
