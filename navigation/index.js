import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import ChatScreen from "../screens/ChatScreen";
import { useAppState } from "../context/appContext";
import { SafeAreaView } from "react-native";
import { styles } from "../theme/styles";

const AppStack = createStackNavigator();

export function AppStackScreen() {
  const { isLogin } = useAppState();
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <AppStack.Navigator>
          {isLogin ? (
            <AppStack.Screen name="Chat" component={ChatScreen} />
          ) : (
            <AppStack.Screen name="Login" component={LoginScreen} />
          )}
        </AppStack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
