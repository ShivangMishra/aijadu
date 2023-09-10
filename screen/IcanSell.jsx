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

const IcanSell = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState([]);
  const items = [
    { label: "Coding", value: "Coding" },
    { label: "Sales", value: "Sales" },
    { label: "Painting", value: "Painting" },
    { label: "Speaking", value: "Speaking" },
    { label: "Front-End", value: "Front" },
  ];

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Image
          style={styles.sideImage}
          source={require("../assets/AIJadu/Login/sideImage.png")}
        />

        {/* <View style={styles.headerContainer}>
          <Image
            style={{ alignSelf: "center" }}
            source={require("../assets/AIJadu/signUp/leftArrow.png")}
          />
          <Image source={require("../assets/AIJadu/signUp/AILogo.png")} />

          <View style={styles.bottomDownPicker}>
            <DropDownPicker
              items={items}
              open={isOpen}
              setOpen={() => setIsOpen(!isOpen)}
              value={currentValue}
              setValue={(val) => setCurrentValue(val)}
              maxHeight={200}
              autoScroll
              placeholder="             I want to improve in"
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
          </View>
          <Image
            style={{
              alignSelf: "center",
              justifyContent: "center",
              marginTop: 7,
            }}
            source={require("../assets/AIJadu/Login/search1.png")}
          />
        </View> */}

        <View style={styles.mainBox}>
          <Image
            style={{ position: "absolute", alignSelf: "baseline" }}
            source={require("../assets/AIJadu/Login/blueCircle.png")}
          />
          <View style={styles.container1}>
            <View style={styles.container1UpperTextContainer}>
              <Image source={require("../assets/AIJadu/Login/AIsell1.png")} />

              <View style={styles.container1UpperText}>
                <Text
                  style={{ fontWeight: "700", fontSize: 20, marginTop:15 }}
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
                marginBottom:10
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
                  marginBottom:10
                 
                }}
              >
                <Text
                  style={{ fontWeight: "700", fontSize: 14, lineHeight: 18 }}
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

              
            </View>
            <Image
              style={styles.bottomCircle}
              source={require("../assets/AIJadu/Login/bottomHalfCircle.png")}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#E4E4E4",
    flexDirection: "column",
    width:'100%',
    marginTop: 20
  },
  sideImage: {
    alignSelf: "flex-end",
    position: "absolute",
    marginTop: -20,
  },
  headerContainer: {
    marginTop: 20,
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-around",
  },

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
  backgroundColor: "blue",
  width: "100%",
  paddingTop:12,
 
  alignSelf: "center",
  justifyContent: "center",
 
 
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
  leftSideStyle:{
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
    marginTop: -30,
    // position:"absolute",
    alignSelf: "baseline",
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
});

export default IcanSell;
