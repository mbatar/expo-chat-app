import React from "react";
import { Text, View } from "react-native";
export default function LoadingView() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2C93DB",
      }}
    >
      <Text>Loading...</Text>
    </View>
  );
}
