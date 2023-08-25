import { View, Image, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

const IcanSell = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState([]);
  const items = [
    { label: "Coding", value: "Coding" },
    { label: "Sales", value: "Sales" },
    { label: "Painting", value: "Painting" },
    { label: "Speaking", value: "Speaking" },
    { label: "Front-End", value: "Front" },
  ];
  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.sideImage}
        source={require("../assets/AIJadu/Login/sideImage.png")}
      />

      <View
        style={{
          position: "absolute",
          width: 60,
          height: 50,
          //   backgroundColor: "red",
          alignSelf: "flex-end",
          marginRight: 40,
          zIndex: 1,
          marginTop: 30,
        }}
      >
        <Image
          style={{ alignSelf: "center" }}
          source={require("../assets/AIJadu/SignUpPage/search.png")}
        />
      </View>

      <View style={styles.headerContainer}>
        <Image source={require("../assets/AIJadu/signUp/leftArrow.png")} />

        <Image
          style={{ marginLeft: 9 }}
          source={require("../assets/AIJadu/signUp/AILogo.png")}
        />

        <DropDownPicker
          items={items}
          open={isOpen}
          setOpen={() => setIsOpen(!isOpen)}
          value={currentValue}
          setValue={(val) => setCurrentValue(val)}
          maxHeight={200}
          autoScroll
          placeholder="Select Your Favorite Language"
          placeholderStyle={{ fontWeight: "700", fontSize: 12, lineHeight: 16 }}
          showTickIcon={true}
          showArrowIcon={true}
          dropDownDirection="Bottom"
          disableBorderRadius={false}
          theme="LIGHT"
          style={styles.bottomDownPicker}
          dropDownContainerStyle={{
            width: 200,
            marginLeft: 20,
            borderRadius: 18,
          }}
        />
      </View>
      <Image
        style={{ marginTop: -22 }}
        source={require("../assets/AIJadu/Login/blueCircle.png")}
      />

      <View style={styles.mainPage}>
        <Image
          style={{ marginTop: 12 }}
          source={require("../assets/AIJadu/Login/AIsell1.png")}
        />

        <View style={styles.mainPageHeading}>
          <Text
            style={{
              fontWeight: 700,
              fontSize: 20,
              lineHeight: 27,
              alignSelf: "center",
              justifyContent: "center",
              marginTop: 8,
            }}
          >
            WHAT IS AICANSELL
          </Text>
          <Text>Respond to tough situations</Text>
          <Text>Check Your Skills-on-the-go</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // height: "100%",
    // width: "100%",
    backgroundColor: "red", // Background color set to pink
  },

  sideImage: {
    alignSelf: "flex-end",
  },

  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    width: 380,
    height: 100,
    // backgroundColor: "pink",
    alignSelf: "center",
    // justifyContent:"space-around"
  },
  bottomDownPicker: {
    width: 227,
    height: 34,
    borderRadius: 27,
    borderWidth: 0,
    marginLeft: 10,
  },

  mainPage: {
    width: 360,
    height: 212,
    backgroundColor: "pink",
    position: "absolute",
    // top:0,
    // bottom:0,
    // right:0,
    // left:1,
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 100,

    justifyContent: "space-evenly",
  },
  mainPageHeading: {
    // alignSelf:"center",
    backgroundColor: "red",
    width: 220,
    alignItems: "center",
    height: 100,
  },
});

export default IcanSell;
