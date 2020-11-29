import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import firebase from "./config/firebase";
import { NavigationContainer } from "@react-navigation/native";
import ChatContextProvider from "./context/chatContext";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { styles } from "./theme/styles";
import LoginScreen from "./screens/LoginScreen";
import { ChatStackScreen, AppStack } from "./navigation";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((auth) => {
      auth ? setIsLogin(true) : setIsLogin(false);
    });
  }, []);

  return (
    <ChatContextProvider>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <AppStack.Navigator>
            {isLogin ? (
              <AppStack.Screen
                name="Chat"
                options={{ headerShown: false }}
                component={ChatStackScreen}
              />
            ) : (
              <AppStack.Screen name="Login" component={LoginScreen} />
            )}
          </AppStack.Navigator>
        </SafeAreaView>
        <StatusBar style="dark" />
      </NavigationContainer>
    </ChatContextProvider>
  );
}
