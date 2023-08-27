import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const SignUpPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState([]);

  const [isOpen1, setIsOpen1] = useState(false);
  const [currentValue1, setCurrentValue1] = useState([]);

  const [isOpen2, setIsOpen2] = useState(false);
  const [currentValue2, setCurrentValue2] = useState([]);

  const [isOpen3, setIsOpen3] = useState(false);
  const [currentValue3, setCurrentValue3] = useState([]);

  const items = [
    { label: "Mr", value: "Mr" },
    { label: "Mrs", value: "Mrs" },
    { label: "Ms", value: "Ms" },
  ];

  const items2 = [
    { label: "Programming", value: "2000" },
    { label: "HR", value: "HR" },
    { label: "Reporting Manager", value: "Reporting" },
    { label: "Project Manager", value: "Project Manager" },
  ];

  const items1 = [
    { label: "2000", value: "2000" },
    { label: "2001", value: "2001" },
    { label: "2002", value: "2002" },
    { label: "2003", value: "2003" },
    { label: "2004", value: "2004" },
  ];

  const items3 = [
    { label: "IT", value: "IT" },
    { label: "Textile", value: "Textile" },
    { label: "Steel", value: "Steel" },
    { label: "Mining", value: "Mining" },
    { label: "Aviation", value: "Aviation" },
  ];

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Image
          style={styles.headerImage}
          source={require("../assets/AIJadu/Login/sideImage.png")}
        />
        <View style={styles.overlayContainer}>
          <Image
            style={styles.arrowPic}
            source={require("../assets/AIJadu/signUp/leftArrow.png")}
          />
          <View style={styles.headerContainer}>
            <Image source={require("../assets/AIJadu/signUp/AILogo.png")} />
          </View>
        </View>

        <Image source={require("../assets/AIJadu/Login/blueCircle.png")} />

        <Image
          style={styles.bottomHalfCircle}
          source={require("../assets/AIJadu/Login/bottomHalfCircle.png")}
        />

        <View style={styles.container}>
          <Text style={styles.signupText}> SIGNUP / CREATE ACCOUNT</Text>
          <View style={styles.infoContainer}>
            <View style={styles.infoTextContainer}>
              <View style={styles.mrContainer}>
                <DropDownPicker
                  items={items}
                  open={isOpen}
                  setOpen={() => setIsOpen(!isOpen)}
                  value={currentValue}
                  setValue={(val) => setCurrentValue(val)}
                  maxHeight={200}
                  autoScroll
                  placeholder="Mr "
                  placeholderStyle={{
                    fontWeight: "700",
                    // color: "#FEA01A",
                    fontSize: 14,
                    lineHeight: 16,
                  }}
                  style={{
                    // Custom styles for the DropDownPicker
                    backgroundColor: "#F1F1F1", // Set your desired background color
                    borderRadius: 27, // Set your desired border radius
                    borderWidth: 0,
                  }}
                />
              </View>
              <View style={styles.nameContainer}>
                <Image
                  style={styles.profile}
                  source={require("../assets/AIJadu/SignUpPage/profileLogo.png")}
                />
                <TextInput
                  placeholder="Name"
                  style={styles.nameContainerText}
                />
              </View>
            </View>
          </View>
          <View style={styles.reuseContainer}>
            <Image
              style={styles.reuseContainerImage}
              source={require("../assets/AIJadu/SignUpPage/emailLogo.png")}
            />
            <TextInput
              style={styles.reuseContainerText}
              placeholder="  Email"
            />
          </View>

          <View style={styles.stateContainer}>
            <View style={styles.state}>
              <Image
                style={styles.logo}
                source={require("../assets/AIJadu/SignUpPage/locationLogo.png")}
              />

              <TextInput
                style={styles.stateText}
                placeholder="    State"
                placeholderTextColor={"#000000"}
              />
            </View>

            <View style={styles.city}>
              <Image
                style={styles.logo}
                source={require("../assets/AIJadu/SignUpPage/locationLogo.png")}
              />
              <TextInput placeholder=" City" placeholderTextColor={"#000000"} />
            </View>
          </View>
        </View>

        <View style={styles.institute}>
          <Image
            style={styles.instituteLogo}
            source={require("../assets/AIJadu/SignUpPage/instituteLogo.png")}
          />
          <TextInput
            style={styles.reuseContainerText}
            placeholder="Organization/ Institute"
          />
        </View>

        <View style={styles.functionContainer}>
          <View style={styles.roleFunctionContainer}>
            <Image
              style={{ marginLeft: 20 }}
              source={require("../assets/AIJadu/SignUpPage/industryLogo.png")}
            />

            <DropDownPicker
              items={items2}
              open={isOpen1}
              setOpen={() => setIsOpen1(!isOpen1)}
              value={currentValue1}
              setValue={(val) => setCurrentValue1(val)}
              maxHeight={200}
              autoScroll
              placeholder="Role/Function"
              placeholderStyle={{
                fontWeight: "500",
                // color: "#FEA01A",
                fontSize: 14,
                // lineHeight: 30,
                flexDirection: "row",
              }}
              style={{
                // Custom styles for the DropDownPicker
                backgroundColor: "#F1F1F1", // Set your desired background color
                borderRadius: 27, // Set your desired border radius
                width: 140,
                marginRight: 20,
                alignSelf: "flex-end",
                borderWidth: 0,
                flexDirection: "row",
                // marginLeft:5
                // backgroundColor:"red"
              }}
            />
          </View>

          <View style={styles.calenderFunctionContainer}>
            <Image
              style={{ marginLeft: 20 }}
              source={require("../assets/AIJadu/SignUpPage/yearLogo.png")}
            />

            <DropDownPicker
              items={items1}
              open={isOpen2}
              setOpen={() => {
                setIsOpen2(!isOpen2);
              }}
              value={currentValue}
              setValue={(val) => setCurrentValue(val)}
              maxHeight={200}
              autoScroll
              placeholder="Year"
              placeholderStyle={{
                fontWeight: "700",

                fontSize: 14,
              }}
              style={{
                backgroundColor: "#F1F1F1",
                borderRadius: 27,
                width: 100,
                alignSelf: "flex-end",
                borderWidth: 0,
                flexDirection: "row",
              }}
            />
          </View>
        </View>

        <View style={styles.reuseContainer2}>
          <Image
            style={styles.reuseContainerImage}
            source={require("../assets/AIJadu/SignUpPage/industryLogo.png")}
          />

          <DropDownPicker
            items={items3}
            open={isOpen3}
            setOpen={() => {
              setIsOpen3(!isOpen3);
            }}
            value={currentValue3}
            setValue={(val) => setCurrentValue3(val)}
            maxHeight={200}
            autoScroll
            placeholder="Industry"
            placeholderStyle={{
              fontWeight: "700",

              fontSize: 14,
            }}
            style={{
              backgroundColor: "#F1F1F1",
              borderRadius: 27,
              width: 320,
              alignSelf: "flex-end",
              borderWidth: 0,
              flexDirection: "row",
              alignSelf: "center",
              marginRight: 40,
            }}
            dropDownContainerStyle={{
              width: 300,
              marginLeft: 20,
              borderRadius: 18,
              height: 200,
              // zIndex: 1,
            }}
          />
        </View>

        <View style={styles.reuseContainer}>
          <Image
            style={styles.reuseContainerImage}
            source={require("../assets/AIJadu/SignUpPage/phoneLogo.png")}
          />
          <TextInput style={styles.reuseContainerText} placeholder="  Phone" />
        </View>

        <View style={styles.reuseContainer}>
          <Image
            style={styles.reuseContainerImage}
            source={require("../assets/AIJadu/SignUpPage/PasswordLogo.png")}
          />

          <TextInput
            style={styles.reuseContainerText}
            placeholder="  Password"
          />

          <Image
            style={styles.arrowImage}
            source={require("../assets/AIJadu/SignUpPage/eyeclosedLogo.png")}
          />
        </View>

        <View style={styles.reuseContainer}>
          <Image
            style={styles.reuseContainerImage}
            source={require("../assets/AIJadu/SignUpPage/PasswordLogo.png")}
          />

          <TextInput
            style={styles.reuseContainerText}
            placeholder="Confirm Password"
          />

          <Image
            style={styles.arrowImage}
            source={require("../assets/AIJadu/SignUpPage/eyeclosedLogo.png")}
          />
        </View>

        <View style={styles.termConditionContainer}>
          <Image
            style={{ margin: 5 }}
            source={require("../assets/AIJadu/SignUpPage/Rectangle.png")}
          />
          <Text style={styles.termConditionContainer1}>I agree to the</Text>
          <Text style={styles.termConditionContainer2}>
            Terms & Conditions{" "}
          </Text>
          <Text style={styles.termConditionContainer1}>and</Text>
          <Text style={styles.termConditionContainer2}> Privacy Policy</Text>
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}> Create Account</Text>
        </TouchableOpacity>

        <Text
          style={{
            fontWeight: "700",
            fontSize: 13,
            lineHeight: 15,
            alignSelf: "center",
          }}
        >
          Signup With
        </Text>

        <Image
          style={{ alignSelf: "center", margin: 10 }}
          source={require("../assets/AIJadu/SignUpPage/socialmediaLogo.png")}
        />
        <View style={styles.account}>
          <Text style={styles.termConditionContainer3}>
            Already have an account?
          </Text>
          <Text style={styles.termConditionContainer4}>Login </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#E4E4E4",
  },

  headerImage: {
    alignSelf: "flex-end",
  },

  overlayContainer: {
    position: "absolute",
    alignItems: "center",
    marginTop: 40,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 317,
    height: 42,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    justifyContent: "center",
  },
  arrowPic: {
    marginRight: 10,
  },

  container: {
    marginTop: 100,
    width: 370,
    height: 800,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    alignSelf: "center",
    position: "absolute",
    // justifyContent:"space-around",
  },

  bottomHalfCircle: {
    position: "absolute",
    bottom: 0,
    left: 0,
  },

  signupText: {
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 22,
    color: "#371BC6",
    alignSelf: "center",
  },

  infoContainer: {
    flexDirection: "row",
    // justifyContent: "space-evenly",
    justifyContent: "space-around",
    alignContent: "space-between",
  },
  infoTextContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 10,
  },
  mrContainer: {
    flexDirection: "row",
    width: 89,
    height: 51,
    borderRadius: 27,
    backgroundColor: "#F1F1F1",
    justifyContent: "space-around",
    alignSelf: "center",
    marginRight: 10,
    position: "relative",
    zIndex: 1,
  },
  bottomArrow: {
    alignSelf: "center",
  },
  mrContainerText: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 17,
  },
  nameContainer: {
    flexDirection: "row",
    width: 255,
    height: 51,
    backgroundColor: "#F1F1F1",
    alignItems: "center",
    borderRadius: 27,
  },
  profile: {
    margin: 10,
  },
  // reuseContainer1:{
  //   marginTop: 10,
  //   flexDirection: "row",
  //   alignItems: "center",
  //   width: 360,
  //   height: 51,
  //   backgroundColor: "#F1F1F1",
  //   alignSelf: "center",
  //   borderRadius: 27,

  // },
  reusableContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    width: 360,
    height: 51,
    backgroundColor: "#F1F1F1",
    alignSelf: "center",
    borderRadius: 27,
  },
  reusableContainerText: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 17,
  },

  stateContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 10,
    // marginBottom:10,
  },
  state: {
    width: 175,
    height: 51,
    borderRadius: 27,
    backgroundColor: "#F1F1F1",
    // justifyContent: "center",
    flexDirection: "row",
    alignSelf: "center",
    marginRight: 10,
  },
  city: {
    width: 175,
    height: 51,
    borderRadius: 27,
    backgroundColor: "#F1F1F1",
    // justifyContent: "center",
    flexDirection: "row",
    alignSelf: "center",
  },
  logo: {
    alignSelf: "center",
    margin: 6,
  },

  stateText: {},
  // reusableContainer1: {},
  institute: {
    width: 360,
    height: 51,
    backgroundColor: "#F1F1F1",
    marginTop: 80,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 27,
    flexDirection: "row",
    // justifyContent:"space-around"
  },
  instituteLogo: {
    margin: 10,
    flexDirection: "row",
  },
  functionContainer: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor:"red",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  roleFunctionContainer: {
    width: 180,
    height: 51,
    borderRadius: 51,
    backgroundColor: "#F1F1F1",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "relative",
    zIndex: 2,
    // flexWrap:"wrap"
  },
  roleFunctionContainerText: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 17,
    alignSelf: "center",
  },

  calenderFunctionContainer: {
    width: 140,
    height: 51,
    borderRadius: 51,
    backgroundColor: "#F1F1F1",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "relative",
    zIndex: 2,
    marginRight: 20,
  },
  calenderFunctionContainerText: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 17,
    alignSelf: "center",
  },
  reuseContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    width: 360,
    height: 51,
    backgroundColor: "#F1F1F1",
    alignSelf: "center",
    borderRadius: 27,
    // position:"relative",
    // zIndex:1,
  },
  arrowImage: {
    marginLeft: 10, // Move the arrow to the left side
    marginRight: 10, // Provide some space between arrow and text
  },
  reuseContainerImage: {
    margin: 10,
  },
  reuseContainerText: {
    flex: 1, // Allow the text to take up remaining space
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 17,
  },

  termConditionContainer: {
    width: 250,
    height: 40,
    // backgroundColor:'pink',
    alignSelf: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 10,
  },
  termConditionContainer1: {
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 15,
  },
  termConditionContainer2: {
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 15,
    color: "#FEA01A",
  },

  loginButton: {
    width: 208,
    height: 51,
    backgroundColor: "#FEA01A",
    borderRadius: 33,
    margin: 10,
    justifyContent: "center",
    alignSelf: "center",
  },
  loginButtonText: {
    fontWeight: "700",
    fontSize: 16,
    alignSelf: "center",
    lineHeight: 20,
  },
  account: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 10,
  },
  termConditionContainer3: {
    fontWeight: "600",
    fontSize: 13,
    lineHeight: 16,
  },

  termConditionContainer4: {
    fontWeight: "700",
    fontSize: 13,
    lineHeight: 16,
    backgroundColor: "#FEA01A",
  },
  reuseContainer2: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    width: 360,
    height: 51,
    backgroundColor: "#F1F1F1",
    alignSelf: "center",
    borderRadius: 27,
    // position: "relative", // Remove this line
    zIndex: 1, // Remove this line
  },
  nameContainerText: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 17,
  },
});

export default SignUpPage;
