import React, { useContext } from "react";
import firebase from "../config/firebase";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from "../theme/styles";
import Chat from "../components/Chat";
import { ChatContext } from "../context/chatContext";

export default function ChatListScreen({ navigation }) {
  const { chats } = useContext(ChatContext);
  return (
    <View style={{ paddingHorizontal: 10, paddingTop: 10 }}>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(item) => <Chat item={item} navigation={navigation} />}
        contentContainerStyle={{
          flexDirection: "column-reverse",
        }}
      />
    </View>
  );
}
