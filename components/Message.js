import React, { useEffect, useState, useContext } from "react";
import { View, Text, Platform } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import { ChatContext } from "../context/chatContext";

export default function Message({ item: { item }, chatId }) {
  const { _setManageMessageShown } = useContext(ChatContext);
  const selectMessage = () => {
    _setManageMessageShown(true, { parentId: chatId, messageId: item.id });
  };
  return (
    <TouchableNativeFeedback
      background={
        Platform.OS === "android"
          ? TouchableNativeFeedback.SelectableBackground()
          : ""
      }
      onLongPress={() => selectMessage()}
    >
      <View
        style={{ 
          flexDirection: "row",
          alignSelf: item.from === 1 ? "flex-start" : "flex-end",
          marginBottom: 6,
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: item.from === 1 ? "#2c93db" : "#00e01d",
            borderRadius: "100%",
            padding: 10,
          }}
        >
          <Text
            style={{
              color: "#FFF",
              textAlign: item.from === 1 ? "left" : "right",
            }}
          >
            {item.content}
          </Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}
