import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ChatListScreen from "../screens/ChatListScreen";
import ChatScreen from "../screens/ChatScreen";
import firebase from "../config/firebase";
import { Icon } from "react-native-elements";

export const AppStack = createStackNavigator();
const ChatStack = createStackNavigator();

export const ChatStackScreen = () => {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen
        name="Chats"
        component={ChatListScreen}
        options={{
          headerRight: () => (
            <Icon
              name="sign-out"
              type="font-awesome"
              color="#2c93db"
              onPress={() => firebase.auth().signOut()}
              style={{ padding: 10 }}
            />
          ),
          headerTitle: "Mesajlar",
        }}
      />
      <ChatStack.Screen
        options={{
          headerTitle: "Mesaj",
        }}
        name="ChatDetails"
        component={ChatScreen}
      />
    </ChatStack.Navigator>
  );
};
