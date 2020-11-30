import React, { useState, useLayoutEffect } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Icon } from "react-native-elements";
import {
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Message from "../components/Message";

export default function ChatScreen({ route, navigation }) {
  const [isEditable, setIsEditable] = useState(false);
  const [selectedMessages, setSelectedMessages] = useState([]);
  const { chatId, messages } = route.params;
  const toggle = () => setIsEditable((v) => !v);
  const selectThis = (id) => {
    selectedMessages.includes(id)
      ? setSelectedMessages([
          ...selectedMessages.filter((msgId) => msgId !== id),
        ])
      : setSelectedMessages([...selectedMessages, id]);
    return selectedMessages.includes(id);
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          name="edit"
          type="font-awesome"
          color="#2c93db"
          onPress={toggle}
          style={{ padding: 10 }}
        />
      ),
    });
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={64}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <FlatList
            data={messages}
            renderItem={(item) => (
              <Message
                item={item}
                isEditable={isEditable}
                selectThis={selectThis}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            extraData={selectedMessages}
            refreshing={true}
            contentContainerStyle={{
              justifyContent: "flex-end",
              flex: 1,
              paddingHorizontal: 10,
            }}
          />
          <View
            style={{
              backgroundColor: "#CCC",
              padding: 10,
            }}
          >
            <TextInput
              style={{
                height: 40,
                borderRadius: 100,
                backgroundColor: "#FFF",
                paddingLeft: 10,
              }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
