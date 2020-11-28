import React from "react";
import { styles } from "../theme/styles";
import { Text, View } from "react-native";
import { Avatar } from "react-native-elements";

export default function Chat({ item }) {
  return (
    <View style={styles.chat}>
      <View>
        <Avatar
          size="small"
          rounded
          title="MT"
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
        <Text>Mustafa Batar ({item.with})</Text>
      </View>
      <View>
        <Text>
          Wednesday
        </Text>
      </View>
    </View>
  );
}
