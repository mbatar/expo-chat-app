import React, { useContext } from "react";
import { Text, View } from "react-native";
import { Overlay, Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ChatContext } from "../context/chatContext";

export default function ManageMessage() {
  const {
    manageMessageShown,
    _setManageMessageShown,
    deleteMessage,
  } = useContext(ChatContext);
  return (
    <Overlay
      isVisible={manageMessageShown}
      onBackdropPress={() => {
        _setManageMessageShown(false, null);
      }}
      overlayStyle={{
        width: 178,
        height: 168,
        backgroundColor: "#000",
        opacity: 0.6,
        borderRadius: 10,
        paddingHorizontal: 0,
        paddingVertical:0
      }}
    >
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={{ borderBottomColor: "#a0a0a0", borderBottomWidth: 1 }}>
            <TouchableOpacity
              style={{
                paddingVertical: 12,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 10,
              }}
            >
              <Text style={{ color: "#a0a0a0" }}>İlet</Text>
              <Icon
                name="share"
                type="font-awesome"
                color="#a0a0a0"
                size={16}
              />
            </TouchableOpacity>
          </View>
          <View style={{ borderBottomColor: "#a0a0a0", borderBottomWidth: 1 }}>
            <TouchableOpacity
              style={{
                paddingVertical: 12,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 10,
              }}
            >
              <Text style={{ color: "#a0a0a0" }}>Cevapla</Text>
              <Icon
                name="reply"
                type="font-awesome"
                color="#a0a0a0"
                size={16}
              />
            </TouchableOpacity>
          </View>
          <View style={{ borderBottomColor: "#a0a0a0", borderBottomWidth: 1 }}>
            <TouchableOpacity
              style={{
                paddingVertical: 12,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 10,
              }}
            >
              <Text style={{ color: "#a0a0a0" }}>Beğen</Text>
              <Icon
                name="star"
                type="font-awesome"
                color="#a0a0a0"
                size={16}
              />
            </TouchableOpacity>
          </View>
        </View>
        
        <View>
          <TouchableOpacity
            style={{
              paddingVertical: 12,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 10,

            }}
            onPress={deleteMessage}
          >
            <Text style={{ color: "red" }}>Sil</Text>
            <Icon name="trash" type="font-awesome" color="red" size={16} />
          </TouchableOpacity>
        </View>
      </View>
    </Overlay>
  );
}
