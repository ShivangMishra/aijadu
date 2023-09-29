import {
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { gray, purple, white } from "../colors";
import { backArrow, smallLogo } from "../assets";

const IcanSell = ({navigation}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState([]);
  const items = [
    { label: "Coding", value: "Coding" },
    { label: "Sales", value: "Sales" },
    { label: "Painting", value: "Painting" },
    { label: "Speaking", value: "Speaking" },
    { label: "Front-End", value: "Front" },
  ];
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


  return (
    <View style={{height: "100%", width: "100%"}}>
    <ScrollView style={{backgroundColor: gray}}>
      {renderHeader()}
      <View style={styles.mainContainer}>
      
        <Image
          style={styles.sideImage}
          source={require("../assets/AIJadu/Login/sideImage.png")}
        />

        <View style={styles.mainBox}>
          <Image
            style={{ position: "absolute", alignSelf: "baseline", marginTop: 50 }}
            source={require("../assets/AIJadu/Login/blueCircle.png")}
          />
          <View style={styles.container1}>
            <View style={styles.container1UpperTextContainer}>
              <Image source={require("../assets/AIJadu/Login/AIsell1.png")} />

              <View style={styles.container1UpperText}>
                <Text
                  style={{ fontWeight: "700", fontSize: 20, marginTop:15, justifyContent:'flex-start', marginLeft:-20 }}
                >
                  WHAT IS AICANSELL
                </Text>
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: 12,
                    color: "#371BC6",
                    marginTop: 15,
                  }}
                >
                  Respond to tough situations
                </Text>
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: 12,
                    lineHeight: 14,
                    color: "#FEA01A",
                    marginTop: 6,
                  }}
                >
                  Check Your Skills-on-the-go
                </Text>
              </View>
            </View>
            <Text style={{
                alignSelf: "center",
                marginTop: 30,
                fontWeight: "900",
                fontSize: 14,
                lineHeight: 17,
                color: "#1C6ADC",
              }}>
            COMPARE YOURSELF ON SKILLS THAT
            </Text>
            <Text style={{
                alignSelf: "center",
                fontWeight: "900",
                fontSize: 14,
                lineHeight: 17,
                color: "#1C6ADC",
              }}> EMPLOYERS FIND CRITICAL, TO</Text>
            <Text style={{
                alignSelf: "center",
                fontWeight: "900",
                fontSize: 14,
                lineHeight: 17,
                marginBottom:20,
                color: "#1C6ADC",
              }}>HIRE OR PROMOTE</Text>
           
          </View>
          <View style={styles.container2}>
            <Image
              style={{ height: "100%", borderBottomLeftRadius:15, borderTopLeftRadius:15 }}
              source={require("../assets/AIJadu/Interview/robo.png")}
            />
            <View style={styles.container2Text}>
              <Text style={{ fontWeight: "800", fontSize: 20, lineHeight: 27 }}>
                WHY DO-JADU?
              </Text>
              <Text
                style={styles.doJaduTextStyle}
              >
                Employability
              </Text>
              <Text style={styles.doJaduTextStyle}> Promotion &</Text>
              <Text style={styles.doJaduTextStyle}> Career Growth</Text>
            </View>
          </View>
          <View style={styles.container3}>
            <Text
              style={{
                fontWeight: "800",
                fontSize: 14,
                alignSelf: "center",
                marginTop: 10,
                lineHeight:18,
                paddingBottom:2
              }}
            >
              TAKE CHALLENGES & RESPOND TO SITUATIONS
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                marginVertical:15
              }}
            >
              <Image
                source={require("../assets/AIJadu/Interview/smartPhone.png")}
              />
              <Text
                style={{
                  fontWeight: "600",
                  fontSize: 12,
                  lineHeight: 15,
                  marginLeft: 10,
                  alignSelf: "center",
                }}
              >
                win iphones & Laptops
              </Text>
            </View>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                width: "50%",
                height: 51,
                backgroundColor: "#FEA01A",
                borderRadius: 27,
                justifyContent: "space-around",
                alignItems: "center",
                marginBottom:10,
                elevation:10
              }}
            >
              <Text style={{ fontWeight: "700", fontSize: 14, lineHeight: 18 }}>
                Do Jadu
              </Text>
              <Image
                source={require("../assets/AIJadu/Interview/leftWhiteArrow.png")}
              />
            </TouchableOpacity>
          </View>
          {/* <View style={styles.cutOffBottomLeft} />
          <View style={styles.cutOffBottomRight} /> */}

          <View style={styles.container4 }>
     
            <View
              style={{
                width: "90%",
                height: "60%",
                backgroundColor: "#fff",
                borderRadius: 15,
                alignSelf: "center",
                justifyContent: "space-evenly",
                marginTop: 30,
              }}
            >
              <Text
                style={{
                  fontWeight: "800",
                  fontSize: 13,
                  alignSelf: "center",
                  paddingTop:15
                }}
              >
                EXPLORE - HOW OTHERS RESPONDED TO SITUATIONS
              </Text>
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: 12,
                  alignSelf: "center",
                  marginTop: 0,
                }}
              >
                and improve your skills
              </Text>

              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  width: '50%',
                  height: 51,
                  marginTop: "11.5%" ,
                  backgroundColor: "#FEA01A",
                  borderRadius: 27,
                  justifyContent: "space-around",
                  alignItems: "center",
                  alignSelf: "center",
                  marginBottom:10,
                  paddingHorizontal:10,
                  elevation:10 
                }}
              >
                <Text
                  style={{ fontWeight: "700", fontSize: 14, lineHeight: 18,paddingLeft:5, }}
                >
                  LEARN FROM{`\n`}
                  OTHERS JADU{" "}
                </Text>
                <Image
                  source={require("../assets/AIJadu/Interview/leftWhiteArrow.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.signUpContainer}>
              <View style={{ flexDirection: "row" }}>
                {/* <TouchableOpacity>
                  <Text style={styles.signUpContainerText1}>
                    Don’t have an account?{" "}
                  </Text>
                </TouchableOpacity> */}
                {/* <TouchableOpacity>
                  <Text style={styles.signUpContainerText2}>
                    Please Signup here
                  </Text>
                </TouchableOpacity> */}
              </View>


            </View>
           
          </View>
        </View>
      </View>
      
    </ScrollView>
    <Image
    style={styles.bottomCircle}
    source={require("../assets/AIJadu/Login/bottomHalfCircle.png")}
  />
  </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#E4E4E4",
    flexDirection: "column",
    width: '100%',
    marginTop: 70
  },
  sideImage: {
    alignSelf: "flex-end",
    position: "absolute",
    marginTop: -70,
  },
  // headerContainer: {
  //   marginTop: 20,
  //   flex: 2,
  //   flexDirection: "row",
  //   justifyContent: "space-around",
  // },

  bottomDownPicker: {
    width: 222,
    borderRadius: 30,
    height: 10,
    alignItems: "center",
  },
  mainBox: {
    flex: 14,
    marginTop: 30,
  },
  container1: {
    flex: 3,
    backgroundColor: "#fff",
    width: "95%",
    borderRadius: 15,
    alignSelf: "center",
    // height:165,
  },
  doJaduTextStyle:{
    fontWeight: "800",
    fontSize: 14,
    lineHeight: 17,
    color: "#FEA01A",
    alignSelf: "center",
  },
  container2: {
    flex: 2,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignSelf: "center",
    width: '95%',
    height:'100%',
    borderRadius: 15,
    marginTop: 10,
    paddingVertical:1,
    // justifyContent:"center",
    alignItems: "center",
  },
  container3: {
    flex: 4,
    backgroundColor: "#fff",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 10,
    borderRadius: 15,
    width: "95%",
  
  },
  container4: {
    flex: 1,
  backgroundColor: purple,
  width: "100%",
  paddingTop:12,
  // height
  alignSelf: "center",
  justifyContent: "center",
  borderTopLeftRadius:60,
  borderTopRightRadius:60,
  marginTop: 5,
  height: 270,
 
  },
  container1UpperTextContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  container1UpperText: {
    alignSelf: "center",
    justifyContent: "center",
    marginLeft: 30,
  },
  container2Text: {
    margin: 30,
  },
  signUpContainer: {
    alignItems: "center",
    justifyContent: "space-around",
    justifyContent: "center",
    marginTop: 20,
    width: "100%",
    alignSelf: "center",
  },
  leftSideStyle: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 0,
    height: 0,
    borderLeftWidth: 25,
    borderRightWidth: 25,
    borderBottomWidth: 35,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "white",
    zIndex: 1,
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
    // marginTop: -30,
    // position:"absolute",
    // alignSelf: "flex-end",
    position: "absolute",
    bottom: 0,
  },
  cutOffBottomLeft: {
    position: "absolute",
    left: 0,
    bottom: 0,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderBottomColor: "white",
    borderRightColor: "transparent",
  },
  cutOffBottomRight: {
    position: "absolute",
    right: 0,
    bottom: 0,
    borderLeftWidth: 10,
    borderBottomWidth: 10,
    borderBottomColor: "white",
    borderLeftColor: "transparent",
  },
  backArrow: {
    position: "relative",
    left: -40,
    top: "2%",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    alignSelf: "center",
    top: 45,
    // backgroundColor: "red",
    // marginBottom: "-18%",
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
});

export default IcanSell;
