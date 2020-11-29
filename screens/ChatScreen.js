import React from "react";
import { View, Text } from "react-native";

export default function ChatScreen({ route, navigation }) {
  const { chatId, messages } = route.params;
  return (
    <View
      style={{ flex: 1, paddingHorizontal: 10, justifyContent: "flex-end" }}
    >
      {messages.map((message) => (
        <View
          style={{
            backgroundColor: message.from === 1 ? "#2c93db" : "#00e01d",
            padding: 10,
            borderRadius: "100%",
            marginBottom: 6,
            alignSelf: message.from === 1 ? "flex-start" : "flex-end",

          }}
          key={message.id}
        >
          <Text
            style={{
              color: "#FFF",
              textAlign: message.from === 1 ? "left" : "right",
            }}
          >
            {message.content}
          </Text>
        </View>
      ))}
    </View>
  );
}
