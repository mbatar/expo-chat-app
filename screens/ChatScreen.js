import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from "../theme/styles";
import { useAppDispatch, useAppState, logout } from "../context/appContext";
import Chat from "../components/Chat";
export default function ChatScreen() {
  const appDispatch = useAppDispatch();
  const { chats } = useAppState();

  const handleSignout = () => {
    logout(appDispatch);
  };
  return (
    <View style={{ paddingHorizontal: 10, paddingTop: 10 }}>
      <FlatList
        data={chats}
        renderItem={Chat}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.button} onPress={() => handleSignout()}>
        <Text
          style={{
            textAlign: "center",
            color: "#FFF",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Çıkış Yap
        </Text>
      </TouchableOpacity>
    </View>
  );
}
