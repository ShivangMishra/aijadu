import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
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
    <ScrollView>
      <View style={styles.mainComponent}>
        <Image
          style={styles.sideImage}
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
              placeholderStyle={styles.dropdownPlaceholder}
              showTickIcon={true}
              showArrowIcon={true}
              dropDownDirection="Bottom"
              disableBorderRadius={false}
              theme="LIGHT"
              style={styles.bottomDownPicker}
              dropDownContainerStyle={styles.dropdownContent}
            />
            <Image
              style={styles.searchIcon}
              source={require("../assets/AIJadu/Login/search1.png")}
            />
          </View>
        </View>
        <Image source={require("../assets/AIJadu/Login/blueCircle.png")} />
        <View style={styles.mainPage}>
          <Image
            style={styles.mainPageImage}
            source={require("../assets/AIJadu/Login/AIsell1.png")}
          />
          <View style={styles.mainPageHeading}>
            <Text style={styles.headingText}>WHAT IS AICANSELL{`\n`}</Text>
            <Text style={styles.subheadingText}>
              Respond to tough situations
            </Text>
            <Text style={styles.subheadingText}>
              Check Your Skills-on-the-go
            </Text>
          </View>
        </View>
        <View style={styles.compareSkillsContainer}>
          <Text style={styles.compareSkillsText}>
            COMPARE YOURSELF ON SKILLS THAT
          </Text>
          <Text style={styles.compareSkillsText}>
            EMPLOYERS FIND CRITICAL, TO HIRE OR PROMOTE
          </Text>
        </View>
        <View style={styles.doJaduContainer}>
          <Image source={require("../assets/AIJadu/signUp/RoboatImage.png")} />
          <View style={styles.doJaduContainerText}>
            <Text style={styles.doJaduHeading}>WHY DO-JADU?</Text>
            <Text style={styles.doJaduSubheading}>
              Employability{`\n`} Promotion &{`\n`} Career Growth
            </Text>
          </View>
        </View>
        <View style={styles.challengeContainer}>
          <Text style={styles.challengeText}>
            Take challenge and Win Something
          </Text>
          <SliderBox
            images={imageUrls}
            dotColor="#000000"
            inactiveDotColor="#90A4AE"
            autoplay={true}
            circleLoop={true}
            autoplayInterval={1000}
            style={styles.sliderBox}
          />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.bottomContainerBox}>
            <Text style={styles.bottomContainerText}>
              EXPLORE - HOW OTHERS RESPONDED TO SITUATIONS
            </Text>
            <Text style={styles.bottomContainerText}>
              and improve your skills
            </Text>
            <TouchableOpacity style={styles.learnFromOthersButton}>
              <Text style={styles.buttonText}>LEARN FROM OTHERS JADU</Text>
            </TouchableOpacity>
          </View>
        
          <View style={styles.signupContainer}>
          <Image
            style={styles.bottomHalfCircle}
            source={require("../assets/AIJadu/Login/bottomHalfCircle.png")}
          />
            <Text style={styles.signupText}>Don’t have an account?</Text>
            <Text style={styles.signupLink}>Please Signup here</Text>
            
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainComponent: {
    flex: 1,
    backgroundColor: "#E4E4E4",
  },
  sideImage: {
    alignSelf: "flex-end",
  },
  headerContainer: {
    flexDirection: "row",
    position: "absolute",
    height: 115,
    width: 360,
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-evenly",
  },
  bottomDownPicker: {
    width: 200,
    borderWidth: 0,
    borderRadius: 27,
    marginLeft: 10,
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
    marginLeft: 0,
  },
  spacer: {
    width: 10,
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
  mainPageImage: {
    margin: 12,
  },
  mainPageHeading: {
    width: 280,
    alignItems: "center",
    height: 100,
    flex: 1,
  },
  headingText: {
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 27,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  subheadingText: {
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 15,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 8,
    color: "#371BC6",
  },
  compareSkillsContainer: {
    width: 300,
    height: 100,
    alignSelf: "center",
    marginTop: -12,
  },
  compareSkillsText: {
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 17,
    justifyContent: "center",
    color: "#1C6ADC",
    alignSelf: "center",
  },
  doJaduContainer: {
    width: 380,
    height: 124,
    backgroundColor: "#ffffff",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 15,
  },
  doJaduContainerText: {
    alignSelf: "center",
    width: 230,
  },
  doJaduHeading: {
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 26,
    alignSelf: "center",
  },
  doJaduSubheading: {
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 17,
    color: "#FEA01A",
    alignSelf: "center",
  },
  challengeContainer: {
    width: 380,
    height: 175,
    backgroundColor: "#fff",
    alignSelf: "center",
    margin: 10,
    borderRadius: 15,
  },
  challengeText: {
    fontWeight: "700",
    fontSize: 13,
    alignSelf: "center",
    margin: 5,
  },
  sliderBox: {
    width: 300,
    alignSelf: "center",
    borderRadius: 10,
    height: 140,
  },
  bottomContainer: {
    backgroundColor: "blue",
    flex: 1,
    width: 400,
    borderTopEndRadius: 55,
    alignSelf: "center",
    borderTopLeftRadius: 55,
  },
  bottomContainerBox: {
    width: 350,
    height: 165,
    backgroundColor: "#fff",
    flex: 1,
    position: "absolute",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 15,
    alignItems: "center",
    margin: 10,
  },
  bottomContainerText: {
    fontWeight: "700",
    fontSize: 13,
    lineHeight: 16,
  },
  learnFromOthersButton: {
    width: 200,
    height: 51,
    borderRadius: 27,
    backgroundColor: "#FEA01A",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 19,
    alignSelf: "center",
  },
  bottomHalfCircle: {
    // flexDirection: "column",
    zIndex: 1,
    // marginTop: 140,
    justifyContent:"flex-start"
  },
  signupContainer: {
    width: 390,
    // height: 100,
    // position: "absolute",
    alignSelf: "center",
    marginTop: 15,
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  signupText: {
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 14,
    color: "#Ffff",
  },
  signupLink: {
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 14,
    color: "#FEA01A",
  },
});

export default AiJadu;
