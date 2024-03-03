import React from "react";
import { View, StyleSheet, Text, Dimensions, Pressable } from "react-native";

export default function Square({
  color,
  selectedSquare,
  squareNum,
  handlePress,
}) {
  return (
    <Pressable
      onPress={() => handlePress(squareNum)}
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        paddingVertical: 50,
        paddingHorizontal: 50,
      }}
    >
      <View
        style={[
          styles.container,
          squareNum == selectedSquare
            ? { backgroundColor: "white" }
            : { backgroundColor: color },
        ]}
      ></View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
});
