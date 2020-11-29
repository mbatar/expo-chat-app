import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ChatListScreen from "../screens/ChatListScreen";
import ChatScreen from "../screens/ChatScreen";


export const AppStack = createStackNavigator();
const ChatStack = createStackNavigator();

export const ChatStackScreen = () => {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen
        name="Chats"
        component={ChatListScreen}
      />
      <ChatStack.Screen
        name="ChatDetails"
        component={ChatScreen}
      />
    </ChatStack.Navigator>
  );
};
