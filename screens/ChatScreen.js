import React, { useState, useLayoutEffect, useContext, useEffect } from "react";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Text,
} from "react-native";
import { Icon } from "react-native-elements";
import {
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import ManageMessage from "../components/ManageMessage";
import Message from "../components/Message";
import { ChatContext } from "../context/chatContext";
import firebase from "../config/firebase";

export default function ChatScreen({ route, navigation }) {
  const { chatId } = route.params;
  const { createMessage, chats } = useContext(ChatContext);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState("");
  useEffect(() => {
      setMessages(chats.filter((chat) => chat.id === chatId)[0].messages)
  }, [chats]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          name="sign-out"
          type="font-awesome"
          color="#2c93db"
          onPress={() => firebase.auth().signOut()}
          style={{ padding: 10 }}
        />
      ),
    });
  }, []);

  const handleCreateMessage = () => {
    message.length && createMessage(chatId, message);
    setMessage("");
  };

  return (
    <View style={{ flex: 1 }}>
      <ManageMessage />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <FlatList
          inverted={messages.length > 0}
          data={messages}
          ListEmptyComponent={() => (
            <View
              style={{
                flex:1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>Sohbet Boş!</Text>
            </View>
          )}
          renderItem={(item) => <Message item={item} chatId={chatId} />}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{
            paddingHorizontal: messages.length?10:0,
            flexDirection: "column-reverse",
            flex:messages.length?0:1
          }}
        />
      </TouchableWithoutFeedback>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={64}
      >
        <View
          style={{
            backgroundColor: "#CCC",
            paddingVertical: 6,
            paddingHorizontal: 12,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              height: 40,
              borderRadius: 100,
              backgroundColor: "#FFF",
              paddingLeft: 10,
              flex: 1,
              marginRight: 10,
            }}
            onChangeText={setMessage}
            value={message}
          />
          <TouchableOpacity
            onPress={handleCreateMessage}
            style={{ paddingHorizontal: 14, paddingVertical: 10 }}
          >
            <Icon name="paper-plane" type="font-awesome" color="#2c93db" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
