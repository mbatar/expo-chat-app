import React from "react";
import { Text, View } from "react-native";

export default function Chat({ item }) {
  return (
    <View>
      <Text>Mustafa Batar ({item.with})</Text>
    </View>
  );
}
