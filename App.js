import "react-native-gesture-handler";
import React from "react";
import { AppStackScreen } from "./navigation";
import { AppProvider } from "./context/appContext";
import { StatusBar } from "expo-status-bar";
export default function App() {
  return (
    <AppProvider>
      <AppStackScreen />
      <StatusBar style="dark" />
    </AppProvider>
  );
}
