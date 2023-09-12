import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import { black, gray } from "../colors";

export default function CustomTextInput(props) {
  const { placeholder, value, onChangeText, containerStyle, password, inputStyle, imgSrc } = props;
  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      <Image
        style={styles.image}
        source={imgSrc}
      />

      <TextInput
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        placeholderTextColor={black}
        onChangeText={onChangeText}
        value={value}
      />

      {password && (
        <Image
          style={styles.arrowImage}
          source={require("../assets/AIJadu/SignUpPage/eyeclosedLogo.png")}
        />
      )}
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 50,
    borderRadius: 27,
    backgroundColor: gray,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "5%",
    marginVertical: 10,
  },
  image: {
    flex: 0.1,
  },
  input: {
    // backgroundColor: "red",
    flex: 0.8,
    height: "100%",
    // backgroundColor: "red",
    marginHorizontal: 10,
  },
});
