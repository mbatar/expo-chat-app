import React, { useState } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Message({ item: { item }, isEditable, selectThis }) {
  const [isSelected, setIsSelected] = useState(false);
  const handleSelect = () => {
    setIsSelected(selectThis(item.id));
  };
  return (
    <TouchableOpacity onPress={handleSelect}>
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
        {isEditable && (
          <View
            style={{
              marginLeft: 2,
              borderWidth: 1,
              borderRadius: "100%",
              width: 12,
              height: 12,
              backgroundColor: isSelected ? "#000" : "#FFF",
            }}
          ></View>
        )}
      </View>
    </TouchableOpacity>
  );
}
