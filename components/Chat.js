import React from "react";
import { styles } from "../theme/styles";
import { Text, View } from "react-native";
import { Avatar } from "react-native-elements";
import { dottedWord } from "../util";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Chat({ item: { item }, navigation }) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ChatDetails", {
          chatId: item.id,
          messages: item.messages,
        })
      }
    >
      <View style={styles.chat}>
        <View style={{ flexDirection: "row" }}>
          <Avatar
            size="medium"
            rounded
            title="M"
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            containerStyle={{ marginRight: 10, backgroundColor: "green" }}
          />
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontWeight: "bold", marginBottom: 4 }}>
              Mustafa Batar ({item.with})
            </Text>
            <Text>
              {dottedWord(item.messages.length && item.messages[item.messages.length - 1].content)}
            </Text>
          </View>
        </View>
        <View>
          <Text style={{ position: "absolute", right: 10, top: 0 }}>
            Wednesday
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
