import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { black, orange } from "../colors";
import { backArrow, rightArrow } from "../assets";

export default function CustomButton(props) {
  const { buttonStyle, text, onPress, textStyle, disabled } = props;
  return (
    <TouchableOpacity
      style={{ ...style.button, ...buttonStyle, opacity: disabled ? 0.5 : 1 }}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={{...style.text, ...textStyle}}>{text}</Text>
      {props.arrow && <Image source={rightArrow} style={{marginLeft: 15}} />}
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  button: {
    width: 208,
    height: 50,
    flexDirection: "row",
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
