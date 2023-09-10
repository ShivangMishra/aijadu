import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default CustomHeader = () => {
  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          ...styles.headerContainer,
          flexDirection: "row",
          marginTop: 20,
          justifyContent: "center",
          height: 40,
        }}
      >
        <Image
          style={{ ...styles.backImage, marginRight: 10, alignSelf: "center" }}
          source={require("../assets/AIJadu/yourJadu/back-arrow.png")}
        />
        <View
          style={{
            ...styles.headerContainerImageBlock,
            backgroundColor: "white",
            width: "90%",
            height: 40,
            borderRadius: 14,
            alignItems: "center",
          }}
        >
          <Image
            style={styles.headerContainerImage}
            source={require("../assets/header-image.png")}
          />
        </View>
      </View>
      <View
        style={{ ...styles.overlayContainer, zIndex: -1, marginLeft: -160 }}
      >
        <Image
          style={styles.logoImage}
          source={require("../assets/header-circle.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#E4E4E4",
    flexDirection: "row",
  },
  backImage: {},
  logoImage: {},
  headerContainerImage: {},
});
