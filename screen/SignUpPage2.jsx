import { useContext, useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomTextInput from "../components/CustomTextInput";
import { checkboxColor, gray, orange, white } from "../colors";
import {
  aiCanSellLogo,
  backArrow,
  blueBubble,
  bottomBubble,
  emailIcon,
  facebookLogo,
  googleLogo,
  linkedinLogo,
  passwordIcon,
  profileIcon,
  smallLogo,
  topBubble,
} from "../assets";
import CheckBox from "expo-checkbox";
import CustomButton from "../components/CustomButton";
import CustomHeader from "../components/CustomHeader";
import { ApiContext } from "../apis/ApiContext";

export default function SignUpScreen({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [tncAccepted, setTncAccepted] = useState(false);

  const {register} = useContext(ApiContext)

  const submit = () => {
    if(firstName.trim() === "") {
      Alert.alert("First Name cannot be blank");
      return;
    } 
    if(lastName.trim() === "") {
      Alert.alert("Last Name cannot be blank");
      return;
    } 
    if(username.trim() === "") {
      Alert.alert("Username cannot be blank");
      return;
    } 
    if(email.trim() === "") {
      Alert.alert("Email cannot be blank");
      return;
    } 
    if(password.trim() === "") {
      Alert.alert("Password cannot be blank");
      return;
    } 
    if(confirmPassword.trim() === "") {
      Alert.alert("Confirm Password cannot be blank");
      return;
    } 
    if(!tncAccepted) {
      Alert.alert("Please accept the Terms and Conditions");
      return;
    } 
    if(confirmPassword !== password){
      Alert.alert("Passwords do not match");
      return;
    }
    register({data: {first_name: firstName, last_name: lastName, username, email, password}, navigation});
  };

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backArrow} onPress={navigation.goBack}>
          <Image source={backArrow} />
        </TouchableOpacity>
        <View style={styles.header}>
          <Image source={smallLogo} />
        </View>
      </View>
    );
  };

  const renderFormHeader = () => {
    return (
      <View style={styles.formHeaderContainer}>
        <Text style={styles.formHeaderText}>SIGNUP / CREATE ACCOUNT</Text>
      </View>
    );
  };

  const renderFormFields = () => {
    return (
      <View style={styles.formFieldsContainer}>
        <CustomTextInput
          placeholder="First Name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
          containerStyle={{ width: "100%" }}
          password={false}
          imgSrc={profileIcon}
        />

        <CustomTextInput
          placeholder="Last Name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
          containerStyle={{ width: "100%" }}
          password={false}
          imgSrc={profileIcon}
        />

        <CustomTextInput
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
          containerStyle={{ width: "100%" }}
          password={false}
          imgSrc={profileIcon}
        />

        <CustomTextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          containerStyle={{ width: "100%" }}
          password={false}
          imgSrc={emailIcon}
        />

        <CustomTextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          containerStyle={{ width: "100%" }}
          password={true}
          imgSrc={passwordIcon}
        />

        <CustomTextInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          containerStyle={{ width: "100%" }}
          password={true}
          imgSrc={passwordIcon}
        />
        {/* <CustomTextInput
          placeholder="Last Name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
          containerStyle={{ width: "100%" }}
          password={false}
        /> */}
      </View>
    );
  };

  const renderTermsAndConditions = () => {
    return (
      <View style={styles.tncContainer}>
        <CheckBox
          value={tncAccepted}
          onValueChange={() => setTncAccepted(!tncAccepted)}
          color={tncAccepted ? checkboxColor : undefined}
          style={{
            width: 14,
            height: 14,
            borderColor: checkboxColor,
            borderWidth: 2,
            marginRight: 5,
          }}
        />
        <Text style={styles.tncText}>I agree to the&nbsp;</Text>
        <Text style={[styles.tncText, { color: orange }]}>
          Terms & Conditions&nbsp;
        </Text>
        <Text style={styles.tncText}>and</Text>
        <Text style={[styles.tncText, { color: orange }]}>Privay Policy</Text>
      </View>
    );
  };

  const renderSignUpButton = () => {
    return (
      <CustomButton
        text="CREATE ACCOUNT"
        buttonStyle={{ marginVertical: "1%" }}
        onPress={submit}
      />
    );
  };

  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        <Text style={{ fontSize: 16, fontWeight: "700" }}>Signup With</Text>
        {renderSocialMediaOptions()}

        <View style={{ flexDirection: "row", marginTop: "3%" }}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            Already have an account?&nbsp;
          </Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 16, fontWeight: "700", color: orange }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderSocialMediaOptions = () => {
    return (
      <View style={styles.socialMediaOptionsContainer}>
        <TouchableOpacity>
          <Image source={facebookLogo} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={googleLogo} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={linkedinLogo} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {renderHeader()}
      <KeyboardAvoidingView style={styles.mainContainer}>
        {renderFormHeader()}
        {renderFormFields()}
        {renderTermsAndConditions()}
        {renderSignUpButton()}
        {renderFooter()}
      </KeyboardAvoidingView>
      <Image source={topBubble} style={styles.topBubble} />
      <Image source={blueBubble} style={styles.blueBubble} />
      <Image source={bottomBubble} style={styles.bottomBubble} />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gray,
    // paddingHorizontal: "2.8%",
    // paddingBottom: "5%",
  },
  backArrow: {
    position: "relative",
    left: -40,
    top: "2%",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    // backgroundColor: "red",
    marginTop: "12%",
    marginBottom: "-18%",
    zIndex: 1
  },
  header: {
    backgroundColor: white,
    width: "70%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 13,
    zIndex: 1,
  },
  formHeaderContainer: {
    justifyContent: "center",
    alignItems: "center",
    // height: 22,
    // backgroundColor: "red",
    // backgroundColor: "red"
  },
  formHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#371BC6",
  },
  mainContainer: {
    flex: 1,
    paddingTop: "3%",
    paddingBottom: "5%",
    backgroundColor: "#fff",
    borderRadius: 15,
    marginTop: "23%",
    alignItems: "center",
    zIndex: 1,
    marginHorizontal: "2.8%",
    marginBottom: "3%",
  },
  formFieldsContainer: {
    paddingHorizontal: "4%",
    paddingTop: "2%",
    // flex: 0.75,
    // justifyContent: "center",
  },
  tncContainer: {
    // backgroundColor: "red",
    paddingVertical: "2%",
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    width: "75%",
    marginTop: "22%",
  },
  tncText: {
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
  },
  footer: {
    width: "100%",
    alignItems: "center",
    marginTop: "3%",
  },
  socialMediaOptionsContainer: {
    flex: 1,
    width: "50%",
    marginTop: "1.5%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  topBubble: {
    position: "absolute",
    top: -40,
    // left: "48%",
    alignSelf: "flex-end",
    // width: 220,
    // height: "10%",
    // backgroundColor: 'red'
  },
  blueBubble: {
    position: "absolute",
    left: 0,
    top: "10%",
  },
  bottomBubble: {
    position: "absolute",
    left: 0,
    bottom: 0,
  },
});
