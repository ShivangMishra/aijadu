import { View, StyleSheet, Text } from "react-native";
import React from "react";

const AISell = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container1}></View>
      <View style={styles.container2}></View>
      <View style={styles.container3}></View>
      <View style={styles.container4}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "red",
    flexDirection: "row", // Distribute the containers horizontally
    flexWrap: "wrap", // Wrap to the next line if needed
  },
  container1: {
    flex: 1,
    backgroundColor: "yellow",
  },
  container2: {
    flex: 1,
    backgroundColor: "green",
  },
  container3: {
    flex: 1,
    backgroundColor: "pink",
  },
  container4: {
    flex: 1,
    backgroundColor: "orange",
  },
});

export default AISell;
