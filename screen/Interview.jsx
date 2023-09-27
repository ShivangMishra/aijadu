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
import { blue, checkboxColor, purple, white } from "../colors";
import { discImg } from "../assets";
import CustomButton from "../components/CustomButton";
import Checkbox from "expo-checkbox";

const Interview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState([]);
  const [disclaimer, setDisclaimer] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const items = [
    { label: "Coding", value: "Coding" },
    { label: "Sales", value: "Sales" },
    { label: "Painting", value: "Painting" },
    { label: "Speaking", value: "Speaking" },
    { label: "Front-End", value: "Front-End " },
  ];

  renderDisclaimer = () => {
    return (<View style={styles.disclaimerContainer}>
      <Text style={{alignSelf:"center",marginTop:8, fontSize: 20, fontWeight: "700"}}>
        DISCLAIMER
      </Text>
      <Image source={discImg}/>
      <Text style={[styles.disclaimerText, {width: 220}]}>
      1.I agree to the Terms of Condition and Terms of Privacy started here in
      </Text>
      <Text style={[styles.disclaimerText, {width: 270}]}>
      2.I am the original creator of this video, and its content, audio/graphics and am not violating any third party copyrights by posting this video.
      </Text>
      <Text style={[styles.disclaimerText, {width: 320}]}>
      3. I have taken adequate care in using language or visual element that it doesnt offend others, is abusive, sexist, casteist or hurts religious sentiments.
      </Text>
      <Text style={[styles.disclaimerText, {width: 309}]}>
      I acknowledge that AicanSell team will screen all upload videos and may not approve videos that may be deemed objectionable, at the side discretion of the AicanSell Management
      </Text>

      <CustomButton
        text="I ACCEPT"
        onPress={() => {setDisclaimer(false)}}
        buttonStyle={{marginTop: 20}}
      />
    </View>)
  }
  return (
    <ScrollView style={styles.mainContainer}>
      <Image
        style={styles.sideImage}
        source={require("../assets/AIJadu/Login/sideImage.png")}
      />
      <View style={styles.headerContainer}>
        <Image 
        style={{alignSelf:"center"}}
         source={require("../assets/AIJadu/signUp/leftArrow.png")} />
        <Image
        style={{alignSelf:"center"}}
         source={require("../assets/AIJadu/signUp/AILogo.png")} />

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
          style={{alignSelf:"center",marginTop:8}}
          source={require("../assets/AIJadu/Login/search1.png")}
        />
      </View>

      <View style={styles.middleContainer}>
        <Image
          style={{ position: "absolute", marginTop:-6 }}
          source={require("../assets/AIJadu/Login/blueCircle.png")}
        />

        <Text
          style={{
            alignSelf: "center",
            fontWeight: "700",
            fontSize: 22,
            lineHeight: 26,
          }}
        >
          DO JADU
        </Text>
        <Text
          style={{
            alignSelf: "center",
            fontWeight: "600",
            fontSize: 15,
            lineHeight: 19,
          }}
        >
          {"INTERVIEW> ENTHUSIASM> LEVEL-1"}
        </Text>
        <Text
          style={{
            alignSelf: "center",
            fontWeight: "700",
            fontSize: 15,
            lineHeight: 15,
            color: "#FF0000",
            marginTop: 20,
          }}
        >
          MY RECORDED VIDEO> PREVIEW
        </Text>
        <Image
         style={{
            alignSelf: "center",
            width:380
            // fontWeight: "700",
            // fontSize: 12,
            // lineHeight: 15,
            // color: "#371BC6",
            // marginTop: 20,
          }}
         source={require("../assets/AIJadu/Interview/Interview.png")} />
        <Text
          style={{
            alignSelf: "center",
            fontWeight: "700",
            fontSize: 12,
            lineHeight: 15,
            color: "#371BC6",
            marginTop: 20,
          }}
        >
          RECORD TIME: 02:00 Minutes
        </Text>

        <View
          style={{
            flexDirection: "row",
            width: 270,
            height: 40,

            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            justifyContent: "space-evenly",
          }}
        >
          <TouchableOpacity
            style={{
              width: 126,
              height: 29,
              backgroundColor: "#371BC6",
              borderRadius: 18,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "800",
                fontSize: 10,
                alignSelf: "center",
              }}
            >
              SAVE FOR LATER
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 126,
              height: 29,
              backgroundColor: "#371BC6",
              borderRadius: 18,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "800",
                fontSize: 10,
                alignSelf: "center",
              }}
            >
              SAVE FOR LATER
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            alignSelf: "center",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            // backgroundColor:"red",
            width: 220,
            height: 30,
          }}
        >
           <Checkbox
          value={accepted}
          onValueChange={()=>setAccepted(!accepted)}
          color={true ? checkboxColor : undefined}
          style={{
            width: 14,
            height: 14,
            borderColor: blue,
            borderWidth: 2,
            marginRight: 10,
          }}
        />
          <Text style={{ fontWeight: "600", fontSize: 12, lineHeight: 15 }}>
            I agree to have read the -{" "}
          </Text>
          <TouchableOpacity onPress={()=>setDisclaimer(true)}>
          <Text
            style={{
              fontWeight: "600",
              fontSize: 12,
              lineHeight: 15,
              color: "#FEA01A",
            }}
          >
            Disclaimer
          </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            width: 230,
            height: 42,
            backgroundColor: "#FEA01A",
            borderRadius: 27,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "800",
              fontSize: 15,
              lineHeight:19, 
              alignSelf: "center",
            }}
          >
           UPLOAD THIS VIDEO
          </Text>
        </TouchableOpacity>

        <View
          style={{
            width: 412,
            height: 300,
            backgroundColor: "#371BC6",
            borderTopLeftRadius: 79,
            borderTopRightRadius: 79,
            marginTop: 45,
            // position: "absolute",
            // bottom: 0,
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              fontWeight: "800",
              fontSize: 18,
              lineHeight: 21,
              color: "#fff",
              marginTop: 20,
            }}
          >
            MY SAVED JADU’S
          </Text>

          <View
            style={{
              // flex:1,
              flexDirection: "row",
              height: 200,
            //   backgroundColor: "red",
              alignItems: "center",
              width: 380,
              alignSelf: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Image
              source={require("../assets/AIJadu/Interview/whiteLeftArrow.png")}
            />

            <View style={{ flexWrap: "wrap", flexDirection: "column" }}>
              <Image
                source={require("../assets/AIJadu/Interview/roboImage.png")}
              />
              <Text
                style={{
                  fontWeight: "800",
                  fontSize: 10,
                  lineHeight: 12,
                  color: "#FFF",
                }}
              >
                Lorem ipsum dolor{`\n`} sit amet. Et nemo
              </Text>
            </View>

            <View style={{ flexWrap: "wrap", flexDirection: "column" }}>
              <Image
                source={require("../assets/AIJadu/Interview/roboImage.png")}
              />
              <Text
                style={{
                  fontWeight: "800",
                  fontSize: 10,
                  lineHeight: 12,
                  color: "#FFF",
                }}
              >
                Lorem ipsum dolor{`\n`} sit amet. Et nemo
              </Text>
            </View>

            <View style={{ flexWrap: "wrap", flexDirection: "column" }}>
              <Image
                source={require("../assets/AIJadu/Interview/roboImage.png")}
              />
              <Text
                style={{
                  fontWeight: "800",
                  fontSize: 10,
                  lineHeight: 12,
                  color: "#FFF",
                }}
              >
                Lorem ipsum dolor{`\n`} sit amet. Et nemo
              </Text>
            </View>
            <Image
              source={require("../assets/AIJadu/Interview/leftWhiteArrow.png")}
            />
          </View>
          <View style={{ flexDirection: "row",marginTop:10 }}>
            <Image
              source={require("../assets/AIJadu/Login/bottomHalfCircle.png")}
            />

            <Text
              style={{
                fontWeight: "600",
                fontSize: 13,
                lineHeight: 16,
                color: "#fff",
                alignSelf: "center",
                   marginLeft:50
              }}
            >
              Terms & Conditions | Privacy Policy
            </Text>
          </View>
        </View>
      </View>
      {disclaimer && renderDisclaimer()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#E4E4E4",
  },
  headerContainer: {
    marginTop: 20,
    flex: 1,

    flexDirection: "row",

    justifyContent: "space-evenly",
  },
  disclaimerContainer: {
    backgroundColor: white,
    width: "100%",
    position: "absolute",
    bottom: 0,
    height: "65%",
    paddingTop: 10,
    // justifyContent: "space-evenly",
    alignItems: "center",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  bottomDownPicker: {
    width: 222,

    borderRadius: 30,

    height: 34,
    alignItems: "center",
  },
  sideImage: {
    alignSelf: "flex-end",
    position: "absolute",
    marginTop: -35,
  },
  middleContainer: {
    flex: 6,
    // backgroundColor: "yellow",
    marginTop: 50,
  },
  disclaimerText: {
    width: "100%",
    textAlign: "center",
    color: purple,
    fontWeight: "700",
    fontSize: 13,
    marginBottom: 10,
  }
});

export default Interview;
