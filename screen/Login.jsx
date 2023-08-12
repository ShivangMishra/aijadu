import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";

const Login = () => {
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Image
          style={styles.sideImage}
          source={require("../assets/AIJadu/Login/sideImage.png")}
        />

        <Image
          style={styles.blueCircle}
          source={require("../assets/AIJadu/Login/blueCircle.png")}
        />

        <Image
          style={styles.heading}
          source={require("../assets/AIJadu/Login/heading.png")}
        />

        <View style={styles.container}>
          <Text style={styles.signInText}> Sign In </Text>

          <View style={styles.infoContainer}>
            <Image
              style={styles.infoContainerImage}
              source={require("../assets/AIJadu/Login/profile.png")}
            />

            <TextInput
              style={styles.infoContainerText}
              placeholder="Email Here "
              

            />
          </View>

          <View style={styles.infoContainer}>
            <Image
              style={styles.infoContainerImage}
              source={require("../assets/AIJadu/Login/lock.png")}
            />

            <TextInput
              style={styles.infoContainerText}
              placeholder="Password"
            />
          </View>

          <View style={styles.passwordContainer}>
            <Text style={styles.passwordContainerText1}>Forgot Password?</Text>
            <Text style={styles.passwordContainerText2}> Reset here </Text>
          </View>

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}> Login</Text>
          </TouchableOpacity>
          

          <View style={styles.signUpContainer}>
         
          <Image
          style={styles.bottomCircle}
              source={require("../assets/AIJadu/Login/bottomHalfCircle.png")}
            />

            <Text style={styles.signUpContainerText1}>
              Don’t have an account?{" "}
            </Text>
            <Text style={styles.signUpContainerText2}>
              
              Please Signup here
            </Text>
            
          </View>
         
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "#E4E4E4",
    alignItems: "center",
  },
  sideImage: {
    alignSelf: "flex-end",
    // position:"relative"
  },

  blueCircle: {
    alignSelf: "baseline",
    marginTop: -22,
  },

  heading: {
    marginTop: 15,
  },
  container: {
    width: 412,
    height: 390,
    backgroundColor: "#371BC6",
    marginTop: 100,
    borderTopLeftRadius: 79,
    borderTopRightRadius: 79,
    alignItems: "center",
    justifyContent:"space-around"
  },
  signInText: {
    alignItems: "center",
    alignSelf: "center",
    fontWeight: "800",
    fontSize: 23,
    color: "#FEA01A",
    marginTop: 15,
    lineHeight: 27,
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: "row",
    width: 310,
    height: 52,
    backgroundColor: "#FFFF",
    alignItems: "stretch",
    borderRadius: 33,
  },
  infoContainerImage: {
    alignSelf: "center",   
    flexDirection: "row-reverse",
    marginRight: 10,
  },
  infoContainerText: {
    justifyContent: "center",
    marginLeft: 90,
    fontWeight:"700",
    fontSize:12,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  passwordContainerText1: {
    fontWeight: "800",
    fontSize: 14,
    lineHeight: 17,
    color:"#fff"
  },

  passwordContainerText2: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 17,
    color: "#FEA01A",
  },
  loginButton: {
    width: 182,
    height: 52,
    backgroundColor: "#FEA01A",
    borderRadius: 33,
    margin: 10,
    justifyContent: "center",
  },
  loginButtonText: {
    fontWeight: "700",
    fontSize: 16,
    alignSelf: "center",
    lineHeight: 20,
  },
  signUpContainer:{

    flexDirection: "row",
    alignItems: "center",
    alignSelf:"flex-start",
    justifyContent:"space-around"
  },

  signUpContainerText1: {
    fontWeight: "800",
    fontSize: 14,
    lineHeight: 17,
    marginLeft:20,
    color:"#ffff"

  },

  signUpContainerText2: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 17,
    color: "#FEA01A",

  },
  bottomCircle:{
  },
});

export default Login;
