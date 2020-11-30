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
  const [selectedMessage, setSelectedMessage] = useState([]);
  const [keyboardShown, setKeyboardShow] = useState(false);
  const { chatId, messages } = route.params;
  const toggle = () => setIsEditable((v) => !v);

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
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    setKeyboardShow(true);
  };

  const _keyboardDidHide = () => {
    setKeyboardShow(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1, }}
      keyboardVerticalOffset={64}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <FlatList
            data={messages}
            renderItem={Message}
            keyExtractor={(item) => item.id.toString()}
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
