import React from "react";
import firebase from "../config/firebase";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from "../theme/styles";
import Chat from "../components/Chat";
import { ChatContext } from "../context/chatContext";

export default function ChatListScreen({ navigation }) {
  const handleSignout = () => {
    firebase.auth().signOut();
  };
  return (
    <View style={{ paddingHorizontal: 10, paddingTop: 10 }}>
      <ChatContext.Consumer>
        {(chats) => (
          <FlatList
            data={chats}
            renderItem={(item) => <Chat item={item} navigation={navigation} />}
            refreshing={true}
          />
        )}
      </ChatContext.Consumer>
    </View>
  );
}
