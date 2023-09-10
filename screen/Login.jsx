import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import React, { useContext, useEffect, useState } from "react";
import { Image } from "react-native";
import { ApiContext } from "../apis/ApiContext";
import { ValidateLogin } from "../utils/Validation";
import { Dimensions } from "react-native";
import { KeyboardAvoidingView } from "react-native";
const Login = () => {
  const navigation = useNavigation();

  const { height, width } = Dimensions.get("window");

  const { login } = useContext(ApiContext);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    console.log(loginData.email);
    setError(ValidateLogin(loginData.email, loginData.password));
  }, [loginData.password, loginData.email]);

  const checkDisable = () => {
    if (error) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <ScrollView>
      <View style={[styles.mainContainer, { height: height + 50 }]}>
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
              onChangeText={(text) => {
                setLoginData({ ...loginData, email: text });
              }}
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
              onChangeText={(text) => {
                console.log(text);
                setLoginData({ ...loginData, password: text });
              }}
            />
          </View>

          <View style={styles.passwordContainer}>
            <TouchableOpacity>
              <Text style={styles.passwordContainerText1}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.passwordContainerText2}> Reset here </Text>
            </TouchableOpacity>
          </View>


          <TouchableOpacity
            style={styles.loginButton}
            onPress={async () => {
              await login({
                data: loginData,
                setError: setError,
                navigation: navigation,
                setModal: setModal,
              });
            }}
          >
            <Text style={styles.loginButtonText}> Login</Text>
          </TouchableOpacity>

          <View style={styles.signUpContainer}>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity>
                <Text style={styles.signUpContainerText1}>
                  Don’t have an account?{" "}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.signUpContainerText2}>
                  Please Signup here
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity>
                <Text style={styles.signUpContainerText3}>Skip</Text>
              </TouchableOpacity>
            </View>
          </View>


          <Image
            style={styles.bottomCircle}
            source={require("../assets/AIJadu/Login/bottomHalfCircle.png")}
          />
        </View>
      </View >
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // width: "100%",
    backgroundColor: "#E4E4E4",
    alignItems: "center",
    flex: 1
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
    flex: 1,
    width: 400,
    backgroundColor: "#371BC6",
    marginTop: 20,
    borderTopLeftRadius: 79,
    borderTopRightRadius: 79,
    alignItems: "center",
    justifyContent: "space-evenly",
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
    margin: 5,
  },
  infoContainerImage: {
    alignSelf: "center",
    flexDirection: "row-reverse",
    marginRight: 10,
  },
  infoContainerText: {
    justifyContent: "center",
    marginLeft: 90,
    fontWeight: "700",
    fontSize: 12,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },

  passwordContainerText1: {
    fontWeight: "800",
    fontSize: 14,
    lineHeight: 17,
    color: "#fff",
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
    marginTop: 20,
    justifyContent: "center",
  },
  loginButtonText: {
    fontWeight: "700",
    fontSize: 16,
    alignSelf: "center",
    lineHeight: 20,
  },
  signUpContainer: {
    // flexDirection: "row",
    alignItems: "center",
    // alignSelf:"flex-start",
    justifyContent: "space-around",
    justifyContent: "center",
    marginTop: 20,
    // position:"absolute"
    width: 300,
    height: 50,
    // backgroundColor: "red",
  },

  signUpContainerText1: {
    fontWeight: "800",
    fontSize: 14,
    lineHeight: 17,
    marginLeft: 20,
    color: "#ffff",
  },

  signUpContainerText2: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 17,
    color: "#FEA01A",
    // marginTop: 15,
  },
  signUpContainerText3: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 17,
    color: "#FEA01A",
    marginTop: 10,
  },
  bottomCircle: {
    // marginTop: -40,
    // position:"absolute",
    alignSelf: "baseline",
  },
});

export default Login;
