import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { black, orange } from "../colors";

export default function CustomButton(props) {
  const { buttonStyle, text, onPress, textStyle, disabled } = props;
  return (
    <TouchableOpacity
      style={{ ...style.button, ...buttonStyle, opacity: disabled ? 0.5 : 1 }}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={{...style.text, ...textStyle}}>{text}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  button: {
    width: 208,
    height: 50,
    backgroundColor: orange,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 27,
    elevation: 5,
  },
  text: {
    color: black,
    fontSize: 14,
    fontWeight: "bold",
  }
});
