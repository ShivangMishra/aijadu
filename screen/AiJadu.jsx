import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { SliderBox } from "react-native-image-slider-box";

const AiJadu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState([]);

  const items = [
    { label: "Coding", value: "Coding" },
    { label: "Sales", value: "Sales" },
    { label: "Painting", value: "Painting" },
    { label: "Speaking", value: "Speaking" },
    { label: "Front-End", value: "Front-End " },
  ];

  const imageUrls = [
    require("../assets/AIJadu/signUp/phone.jpg"),
    require("../assets/AIJadu/signUp/laptop.jpg"),
    require("../assets/AIJadu/signUp/bike.jpg"),
    require("../assets/AIJadu/signUp/cash.jpg"),
  ];

  return (
    <View style={styles.mainComponent}>
      <Image
        style={{ alignSelf: "flex-end" }}
        source={require("../assets/AIJadu/Login/sideImage.png")}
      />
      <View style={styles.headerContainer}>
        <Image source={require("../assets/AIJadu/signUp/leftArrow.png")} />

        <View style={styles.spacer} />

        <Image source={require("../assets/AIJadu/signUp/AILogo.png")} />

        <View style={styles.searchIconContainer}>
          <DropDownPicker
            items={items}
            open={isOpen}
            setOpen={() => setIsOpen(!isOpen)}
            value={currentValue}
            setValue={(val) => setCurrentValue(val)}
            maxHeight={200}
            autoScroll
            placeholder="I want to improve in"
            placeholderStyle={{
              fontWeight: "700",
              fontSize: 12,
              lineHeight: 16,
            }}
            showTickIcon={true}
            showArrowIcon={true}
            dropDownDirection="Bottom"
            disableBorderRadius={false}
            theme="LIGHT"
            style={styles.bottomDownPicker}
            dropDownContainerStyle={{
              width: 200,
              // marginLeft: 20,
              borderRadius: 18,
            }}
          />

          <Image
            style={styles.searchIcon}
            source={require("../assets/AIJadu/Login/search1.png")}
          />
        </View>
      </View>

      <Image
        // style={{margin:10}}
        source={require("../assets/AIJadu/Login/blueCircle.png")}
      />

      <View style={styles.mainPage}>
        <Image
          style={{ margin: 12 }}
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
            WHAT IS AICANSELL{`\n`}
          </Text>
          <Text
            style={{
              fontWeight: 700,
              fontSize: 14,
              lineHeight: 15,
              alignSelf: "center",
              justifyContent: "center",
              marginTop: 8,
              color: "#371BC6",
            }}
          >
            Respond to tough situations
          </Text>
          <Text
            style={{
              fontWeight: 700,
              fontSize: 12,
              lineHeight: 15,
              alignSelf: "center",
              justifyContent: "center",
              marginTop: 8,
              color: "#FEA01A",
            }}
          >
            Check Your Skills-on-the-go
          </Text>
        </View>
      </View>
      <View
        style={{
          width: 300,
          height: 100,
          // backgroundColor: "blue",
          alignSelf: "center",
          marginTop: -12,
          //   flex:1
        }}
      >
        <Text
          style={{
            fontWeight: 700,
            fontSize: 14,
            lineHeight: 17,

            justifyContent: "center",
            color: "#1C6ADC",
            // backgroundColor:"green",
            alignSelf: "center",
          }}
        >
          COMPARE YOURSELF ON SKILLS THAT
        </Text>
        <Text
          style={{
            fontWeight: 700,
            fontSize: 14,
            lineHeight: 17,

            justifyContent: "center",
            color: "#1C6ADC",
            alignSelf: "center",
          }}
        >
          {" "}
          EMPLOYERS FIND CRITICAL, TO
        </Text>
        <Text
          style={{
            fontWeight: 700,
            fontSize: 14,
            lineHeight: 17,

            justifyContent: "center",
            color: "#1C6ADC",
            alignSelf: "center",
          }}
        >
          {" "}
          HIRE OR PROMOTE
        </Text>
      </View>

      <View style={styles.doJaduContainer}>
        <Image
          // style={{ alignSelf: "flex-end" }}
          source={require("../assets/AIJadu/signUp/RoboatImage.png")}
        />
        <View style={styles.doJaduContainerText}>
          <Text
            style={{
              fontWeight: "700",
              fontSize: 20,
              lineHeight: 26,
              alignSelf: "center",
            }}
          >
            {" "}
            WHY DO-JADU?{" "}
          </Text>
          <Text
            style={{
              fontWeight: "700",
              fontSize: 14,
              lineHeight: 17,
              color: "#FEA01A",
              alignSelf: "center",
            }}
          >
            {" "}
            Employability{`\n`} Promotion &{`\n`} Career Growth{" "}
          </Text>
        </View>
      </View>

      <View style={styles.challengeContainer}>
        <Text
          style={{
            fontWeight: 700,
            FontSize: 13,
            alignSelf: "center",
            margin: 5,
          }}
        >
          {" "}
          Take challenge and Win Something{" "}
        </Text>
        <SliderBox
          images={imageUrls}
          // sliderBoxHeight={200} // Adjust the height as needed
          // sliderBoxWidth={100} // Adjust the height as needed
          dotColor="#000000"
          inactiveDotColor="#90A4AE"
          autoplay={true}
          circleLoop={true}
          autoplayInterval={1000}
          style={{
            width: 300,
            alignSelf: "center",
            borderRadius: 10,
            height: 140,
          }}
        />
      </View>

      <View style={styles.bottomContainer}>
        <Image
          style={{
            flexDirection: "column",
            zIndex: 1,
            marginTop: 140,
            // position: "relative",
          }}
          source={require("../assets/AIJadu/Login/bottomHalfCircle.png")}
        />
        <View style={styles.bottomContainerBOx}>
          <Text style={{ fontWeight: "700", fontSize: 13, lineHeight: 16 }}>
            EXPLORE - HOW OTHERS RESPONDED TO SITUATIONS
          </Text>
          <Text style={{ fontWeight: "500", fontSize: 12, lineHeight: 14 }}>
            and improve your skills
          </Text>

          <TouchableOpacity
            style={{
              width: 200,
              height: 51,
              borderRadius: 27,
              backgroundColor: "#FEA01A",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "700",
                fontSize: 14,
                lineHeight: 19,
                alignSelf: "center",
              }}
            >
              LEARN FROM OTHERS JADU{" "}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: 390,
            // backgroundColor: "red",
            height: 100,
            position: "absolute",
            alignSelf: "center",
            marginTop: 150,
            flex: 1,
            alignSelf: "center",
            flexDirection: "row",
            justifyContent:"center"
          }}
        >
          <Text
            style={{
              fontWeight: "500",
              fontSize: 12,
              lineHeight: 14,
              // alignSelf: "center",
              color: "#Ffff",

            }}
          >
            Don’t have an account?
          </Text>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 12,
              lineHeight: 14,
              // alignSelf: "center",
              color: "#FEA01A",
            }}
          >
            {" "}
            Please Signup here
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainComponent: {
    flex: 1,
    backgroundColor: "#E4E4E4",
  },

  headerContainer: {
    flexDirection: "row",
    // backgroundColor: "pink",
    position: "absolute",
    height: 115,
    width: 360, // Use 100% width to ensure it covers the entire width
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-evenly",
    // alignSelf:"center"
  },
  bottomDownPicker: {
    width: 200,
    borderWidth: 0,
    borderRadius: 27,
    marginLeft: 10,
    // backgroundColor:"red"
  },
  searchIcon: {
    alignSelf: "flex-end",
    marginRight: 20,
    alignItems: "center",
    alignSelf: "center",
  },
  searchIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    marginLeft: 0, // Adjust this margin as needed
  },
  spacer: {
    width: 10, // Adjust the width as needed for spacing
  },

  mainPage: {
    flex: 1,
    backgroundColor: "#ffffff",
    position: "absolute",
    width: 360,
    height: 212,
    marginTop: 100,
    alignSelf: "center",
    flexDirection: "row",
    flex: 1,
    borderRadius: 15,
  },
  mainPageHeading: {
    width: 280,
    alignItems: "center",
    height: 100,
    flex: 1,
  },
  doJaduContainer: {
    width: 380,
    height: 124,
    backgroundColor: "#ffffff",
    // flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 15,
  },
  doJaduContainerText: {
    alignSelf: "center",
    // alignSelf:"center",
    width: 230,
    // backgroundColor:"green"

    flex: 1,
  },
  challengeContainer: {
    width: 380,
    height: 175,
    // flex: 1,
    backgroundColor: "#fff",
    alignSelf: "center",
    margin: 10,
    borderRadius: 15,
  },
  bottomContainer: {
    backgroundColor: "blue",
    flex: 1,
    // position:"absolute",
    width: 400,
    height: 220,
    // flexDirection:"column-reverse"
    borderTopEndRadius: 55,

    alignSelf: "center",
    borderTopLeftRadius: 55,
    // justifyContent:"center"
  },
  bottomContainerBOx: {
    width: 350,
    height: 110,
    backgroundColor: "#fff",
    flex: 1,
    position: "absolute",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 15,
    alignItems: "center",
    margin: 10,
  },
});
export default AiJadu;
