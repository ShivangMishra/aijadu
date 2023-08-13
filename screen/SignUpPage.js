import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";

const SignUpPage = () => {
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
              <TextInput
                placeholder="Mr"
                style={styles.mrContainerText}
                placeholderTextColor="#000000"
              />
              <Image
                style={styles.bottomArrow}
                source={require("../assets/AIJadu/SignUpPage/downArrow.png")}
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
            <TextInput
              placeholder=" City"
              placeholderTextColor={"#000000"}
            />
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
           placeholder="Organization/ Institute" />
        </View>

        <View style={styles.functionContainer}>
          <View style={styles.roleFunctionContainer}>
            <Image
              source={require("../assets/AIJadu/SignUpPage/industryLogo.png")}
            />
            <TextInput
              style={styles.roleFunctionContainerText}
              placeholder="Role/Function"
            />
            <Image
              source={require("../assets/AIJadu/SignUpPage/downArrow.png")}
            />
          </View>

          <View style={styles.calenderFunctionContainer}>
            <Image
              source={require("../assets/AIJadu/SignUpPage/yearLogo.png")}
            />
            <TextInput
              style={styles.calenderFunctionContainerText}
              placeholder="Year"
            />
            <Image
              source={require("../assets/AIJadu/SignUpPage/downArrow.png")}
            />
          </View>
        </View>

        <View style={styles.reuseContainer}>
          <Image
            style={styles.reuseContainerImage}
            source={require("../assets/AIJadu/SignUpPage/industryLogo.png")}
          />

          <TextInput
            style={styles.reuseContainerText}
            placeholder="  Industry"
          />

          <Image
            style={styles.arrowImage}
            source={require("../assets/AIJadu/SignUpPage/downArrow.png")}
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
          style={{ alignSelf: "center", margin:10,  }}
          source={require("../assets/AIJadu/SignUpPage/socialmediaLogo.png")}
        />
        <View style={styles.account} >
        <Text style={styles.termConditionContainer3}>Already have an account?</Text>
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
    width: 203,
    height: 51,
    borderRadius: 51,
    backgroundColor: "#F1F1F1",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  roleFunctionContainerText: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 17,
    alignSelf: "center",
  },

  calenderFunctionContainer: {
    width: 145,
    height: 51,
    borderRadius: 51,
    backgroundColor: "#F1F1F1",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
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
  account:{
    flexDirection:"row",
    alignSelf:"center",
    marginTop:10,
  },
  termConditionContainer3:{
    fontWeight:"600",
    fontSize:13,
    lineHeight:16,

  },

  termConditionContainer4:{
    fontWeight:"700",
    fontSize:13,
    lineHeight:16,
    backgroundColor:"#FEA01A"
    
  },
});

export default SignUpPage;
