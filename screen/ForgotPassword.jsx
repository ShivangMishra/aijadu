import React, { useContext, useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { gray, orange, purple, white } from "../colors";
import { aiCanSellLogo, blueBubble, bottomBubble, emailBlackLogo, emailIcon, topBubble } from "../assets";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import { ApiContext } from "../apis/ApiContext";
import ErrorModal from "../components/ErrorModal";


export default function ForgotPassword({navigation}) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [modal, setModal] = useState(false);

  const { forgotPassword } = useContext(ApiContext);
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

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
        <Text style={styles.headerText}>FORGOT PASSWORD</Text>

        <CustomTextInput
          placeholder="Email Here"
          inputStyle={{ textAlign: "center", fontWeight: "bold" }}
          containerStyle={{ marginTop: "8%", backgroundColor: white, width: "70%" }}
          onChangeText={(text) => {
            setEmail(text);
            setError(false);
          }}
          imgSrc={emailBlackLogo}
        />
        <CustomButton
          text="RESET PASSWORD"
          buttonStyle={{ marginTop: "5%" }}
          onPress={() => {
            if (!validateEmail(email)) {
              setError(true);
            } else {
            forgotPassword({ data: {email: email}, setError, setModal });
            }
            Keyboard.dismiss();
          }}
        />
        <TouchableOpacity onPress={()=> {navigation.navigate("Login2")} }>
        <View style={{ flexDirection: "row", marginTop: "2.5%" }}>    
          <Text style={{ color: "white" }}>Back to&nbsp;</Text>         
          <Text style={{ color: orange }}>SIGN-IN</Text>
        </View>
        </TouchableOpacity>
        {error && (
          <View style={{ flexDirection: "row", marginTop: "5%" }}>
            <Text style={{ color: "white" }}>
              Please Enter a Valid Email Address&nbsp;
            </Text>
          </View>
        )}
      </View>
      // </KeyboardAvoidingView>
    );
  };

  return (
    // <ScrollView style={{backgroundColor: "red", flex: 1}}>
    <KeyboardAvoidingView style={styles.container}
    behavior="padding"
    keyboardVerticalOffset={20}
    >
      <ErrorModal message={error} visible={modal} toggleModal={()=>{setModal(false)}}/>
      {renderLogo()}
      {renderBottomContainer()}
      {/* <View style={styles.topBubble}> */}
        <Image source={topBubble} style={styles.topBubble}/>
        <Image source={blueBubble} style={styles.blueBubble}/>
        <Image source={bottomBubble} style={styles.bottomBubble}/>
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
    paddingBottom: "30%"
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
  }
});
