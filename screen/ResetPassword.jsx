import React, { useContext, useEffect, useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { gray, orange, purple, white } from "../colors";
import {
  aiCanSellLogo,
  blueBubble,
  bottomBubble,
  emailBlackLogo,
  emailIcon,
  passwordIcon,
  profileIcon,
  topBubble,
} from "../assets";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import { ApiContext } from "../apis/ApiContext";
import ErrorModal from "../components/ErrorModal";
import { ValidateLogin } from "../utils/Validation";
import { useNavigation } from "@react-navigation/native";

export default function ResetPassword() {
    const navigation = useNavigation();

    const { login } = useContext(ApiContext);
  
    // const [loginData, setLoginData] = useState({
    //   email: "",
    //   password: "",
    // });

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState(false);
    const [modal, setModal] = useState(false);
  
    // useEffect(() => {
    //   console.log(loginData.email);
    // //   setError(ValidateLogin(loginData.email, loginData.password));
    // }, [loginData.password, loginData.email]);
  
  const validateEmail = (email) => {
    // return true;
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePassword = (password) => {
    // return true;
    return password.trim() !== "";
  }

  const renderLogo = () => {
    return (
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={aiCanSellLogo} />
      </View>
    );
  };

  const renderBottomContainer = () => {
    return (
      // <KeyboardAvoidingView style={{height:500, width: "100%", backgroundColor: "red"}}
      // behavior="padding"
      // keyboardVerticalOffset={40}>
      <View style={styles.bottomContainer}>
        <Text style={styles.headerText}>RESET PASSWORD</Text>

        <CustomTextInput
          placeholder="Password"
          inputStyle={{ textAlign: "center", fontWeight: "bold" }}
          containerStyle={{
            marginTop: "8%",
            backgroundColor: white,
            width: "70%",
          }}
          onChangeText={(text) => {
            setEmail(text);
            setError(false);
          }}
          imgSrc={passwordIcon}
          password={true}
        />

        <CustomTextInput
          placeholder="Password"
          inputStyle={{ textAlign: "center", fontWeight: "bold" }}
          containerStyle={{
            marginTop: "3%",
            backgroundColor: white,
            width: "70%",
          }}
          onChangeText={(text) => {
            setPassword(text);
            setError(false);
          }}
          imgSrc={passwordIcon}
          password={true}
        />
    {/* <TouchableOpacity onPress={()=>{
            navigation.navigate("Login2");
          }}>
        <View style={{ flexDirection: "row", marginTop: "2.5%" }}>
      
          <Text style={{ color: "white" }}>Back to&nbsp;</Text>
          
          <Text style={{ color: orange, fontWeight: "bold" }}>Sign In</Text>
        </View>
        </TouchableOpacity> */}
        <CustomButton
          text="Reset Password"
          buttonStyle={{ marginTop: "5%", elevation: 5}}
          onPress={() => {
            if (!validatePassword(email)) {
              setError("Password cannot be empty");
              setModal(true)
            } else if(email !== password) {
                setError("Passwords do not match");
              setModal(true);
            }
            else {
                setError("Failed to load token");
                setModal(true);
            //   login({ data: { email: email, password: password }, navigation, setError, setModal });
            }
            Keyboard.dismiss();
          }}
        />
        <View style={{ flexDirection: "row", marginTop: "2.5%" }}>
          <Text style={{ color: "white" }}>Back to&nbsp;</Text>
          <TouchableOpacity onPress={()=> {navigation.navigate("SignUpScreen")}}>
          <Text style={{ color: orange, fontWeight: "bold" }}>
            Sign In
          </Text>
          </TouchableOpacity>
        </View>
        {error && (
          <View style={{ flexDirection: "row", marginTop: "2%" }}>
            <Text style={{ color: "white" }}>
              Please enter a valid passwordContainer&nbsp;
            </Text>
          </View>
        )}
      </View>
      // </KeyboardAvoidingView>
    );
  };

  return (
    // <ScrollView style={{backgroundColor: "red", flex: 1}}>
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={20}
    >
      <ErrorModal
        message={error}
        visible={modal}
        containerStyle = {{elevation: 10}}
        toggleModal={() => {
          setModal(false);
        }}
      />
      {renderLogo()}
      {renderBottomContainer()}
      {/* <View style={styles.topBubble}> */}
      <Image source={topBubble} style={styles.topBubble} />
      <Image source={blueBubble} style={styles.blueBubble} />
      <Image source={bottomBubble} style={styles.bottomBubble} />
      {/* </View> */}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    backgroundColor: gray,
    alignItems: "center",
    // justifyContent: "center",
  },
  logoContainer: {
    // flex: 1,
    marginTop: "55%",
    paddingBottom: "30%",
    // backgroundColor: "red",
  },
  bottomContainer: {
    flex: 0,
    width: "100%",
    position: "absolute",
    bottom: 0,
    // marginTop: "30%",
    // height: "50%",
    height: 390,
    borderTopRightRadius: 79,
    borderTopLeftRadius: 79,
    backgroundColor: purple,
    paddingTop: "8%",
    alignItems: "center",
  },
  headerText: {
    fontSize: 23,
    fontWeight: "bold",
    color: orange,
  },
  topBubble: {
    position: "absolute",
    top: 0,
    alignSelf: "flex-end",
    // width: 220,
    // height: "10%",
    // backgroundColor: 'red'
  },
  blueBubble: {
    position: "absolute",
    left: 0,
    top: "14%",
  },
  bottomBubble: {
    position: "absolute",
    left: 0,
    bottom: 0,
    alignSelf: "flex-end",
  },
});
