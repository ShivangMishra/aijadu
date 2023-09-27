import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  black,
  blue,
  checkboxColor,
  gray,
  orange,
  purple,
  red,
  white,
} from "../colors";
import {
  avatarLeft,
  backArrow,
  blueBubble,
  bottomBubble,
  bottomItem,
  discImg,
  heart,
  itemImg,
  leftArrow,
  mic,
  phones,
  rightArrow,
  save,
  share,
  smallLogo,
  tinyImg,
  topBubble,
  videoThumbnail,
} from "../assets";
import CustomButton from "../components/CustomButton";
import Label from "../components/Label";
import Checkbox from "expo-checkbox";
import { useState } from "react";

export default function InterviewAvatar({ navigation }) {
  const [disclaimer, setDisclaimer] = useState(false);
  const [accepted, setAccepted] = useState(false);
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
  renderDisclaimer = () => {
    return (
      <View style={styles.disclaimerContainer}>
        <Text
          style={{
            alignSelf: "center",
            marginTop: 8,
            fontSize: 20,
            fontWeight: "700",
          }}
        >
          DISCLAIMER
        </Text>
        <Image source={discImg} />
        <Text style={[styles.disclaimerText, { width: 220 }]}>
          1.I agree to the Terms of Condition and Terms of Privacy started here
          in
        </Text>
        <Text style={[styles.disclaimerText, { width: 270 }]}>
          2.I am the original creator of this video, and its content,
          audio/graphics and am not violating any third party copyrights by
          posting this video.
        </Text>
        <Text style={[styles.disclaimerText, { width: 320 }]}>
          3. I have taken adequate care in using language or visual element that
          it doesnt offend others, is abusive, sexist, casteist or hurts
          religious sentiments.
        </Text>
        <Text style={[styles.disclaimerText, { width: 309 }]}>
          I acknowledge that AicanSell team will screen all upload videos and
          may not approve videos that may be deemed objectionable, at the side
          discretion of the AicanSell Management
        </Text>

        <CustomButton
          text="I ACCEPT"
          onPress={() => {
            setDisclaimer(false);
          }}
          buttonStyle={{ marginTop: 20 }}
        />
      </View>
    );
  };

  const renderRecordAudio = () => {
    return (
      <View
        style={{
          elevation: 5,
        //   width: "100%",
          backgroundColor: white,
          borderRadius: 25,
          marginHorizontal: 15,
          //   justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Text
          style={{
            color: red,
            fontSize: 12,
            fontWeight: "700",
            marginBottom: 5,
          }}
        >
          RECORD YOUR VIDEO
        </Text>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Image source={avatarLeft} />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 14,
              borderColor: black,
              borderWidth: 1,
              backgroundColor: gray,
              width: 138,
            }}
          >
            <TouchableOpacity>
            <Image source={mic} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{ color: purple, fontSize: 10, fontWeight: "700" }}>
          BUILD YOUR OWN AVATAR | ADD YOUR AVATAR
        </Text>
        <Text
          style={{
            color: purple,
            fontSize: 12,
            fontWeight: "700",
            marginTop: 5,
          }}
        >
          MAX RECORD TIME ALLOWED: 02:00 Minutes
        </Text>

        <View
          style={{
            flexDirection: "row",
            marginTop: 15,
            width: 320,
            justifyContent: "space-between",
          }}
        >
          <CustomButton
            text="PREVIEW"
            textStyle={{ color: white, fontSize: 10, fontWeight: "800" }}
            buttonStyle={{
              elevation: 0,
              backgroundColor: purple,
              width: 88,
              height: 29,
            }}
          />
          <CustomButton
            text="SAVE FOR LATER"
            textStyle={{ color: white, fontSize: 10, fontWeight: "800" }}
            buttonStyle={{
              elevation: 0,
              backgroundColor: purple,
              width: 126,
              height: 29,
            }}
          />
          <CustomButton
            text="DISCARD"
            textStyle={{ color: white, fontSize: 10, fontWeight: "800" }}
            buttonStyle={{
              elevation: 0,
              backgroundColor: purple,
              width: 88,
              height: 29,
            }}
          />
        </View>

        <View
          style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}
        >
          <Checkbox
            value={accepted}
            color={accepted ? checkboxColor : undefined}
            style={{
              width: 14,
              height: 14,
              borderColor: blue,
              borderWidth: 2,
              marginRight: 10,
            }}
            onValueChange={() => setAccepted(!accepted)}
          />
          <Text style={{ color: purple, fontSize: 12, fontWeight: "600" }}>
            I agree to have read the -
          </Text>
          <TouchableOpacity
            onPress={() => {
              setDisclaimer(!disclaimer);
            }}
          >
            <Text style={{ color: orange, fontSize: 12, fontWeight: "600" }}>
              Disclaimer
            </Text>
          </TouchableOpacity>
        </View>
        <CustomButton
          text="UPOAD THIS VIDEO"
          buttonStyle={{ elevation: 0, width: 230, height: 42, marginTop: 10 }}
        />
      </View>
    );
  };

  const renderBottomContainer = () => {
    return (
      <View style={styles.bottomContainer}>
        <Text style={{ fontSize: 18, color: white, fontWeight: "800" }}>
          MY SAVED VIDEOS
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 30,
            alignItems: "center",
            width: "80%",
          }}
        >
          <Image source={leftArrow} style={{ marginRight: 10 }} />

          <View>
            <Image source={bottomItem} />
            <Text
              style={{
                fontSize: 10,
                marginTop: 5,
                color: white,
                fontWeight: "800",
                width: 80,
              }}
            >
              Lorem ipsum dolor sit amet. Et nemo
            </Text>
          </View>
          <View>
            <Image source={bottomItem} />
            <Text
              style={{
                fontSize: 10,
                marginTop: 5,
                color: white,
                fontWeight: "800",
                width: 80,
              }}
            >
              Lorem ipsum dolor sit amet. Et nemo
            </Text>
          </View>
          <View>
            <Image source={bottomItem} />
            <Text
              style={{
                fontSize: 10,
                marginTop: 5,
                color: white,
                fontWeight: "800",
                width: 80,
              }}
            >
              Lorem ipsum dolor sit amet. Et nemo
            </Text>
          </View>

          <Image source={rightArrow} style={{ marginLeft: 10 }} />
        </View>

        <Text
          style={{
            fontSize: 13,
            color: white,
            marginTop: 40,
            marginBottom: 10,
          }}
        >
          Terms & Conditions | Privacy Policy
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={{ zIndex: 4, width: "100%", alignItems: "center" }}>
        {renderHeader()}
        <View style={styles.topTextContainer}>
          <Text style={{ fontSize: 22, fontWeight: "700" }}>DO JADU</Text>
          <Text style={{ fontSize: 15, fontWeight: "600" }}>
            {"INTERVIEW> ENTHUSIASM> LEVEL-1"}
          </Text>
        </View>
        {renderRecordAudio()}
        {/* {renderVideo()}
            {renderElement2()}
            {renderMidElement()} */}
        {/* {renderTopImage()} */}
        {/* {renderItems()} */}
      </View>
      {renderBottomContainer()}
      {disclaimer && renderDisclaimer()}
      <Image source={topBubble} style={styles.topBubble} />
      <Image source={blueBubble} style={styles.blueBubble} />
      <Image source={bottomBubble} style={styles.bottomBubble} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: gray,
    alignItems: "center",
  },
  backArrow: {
    position: "relative",
    left: -40,
    top: "2%",
  },
  topBubble: {
    position: "absolute",
    top: 0,
    alignSelf: "flex-end",
    zIndex: -1,
  },
  blueBubble: {
    position: "absolute",
    left: 0,
    zIndex: -1,
    top: "16.5%",
  },
  bottomBubble: {
    position: "absolute",
    left: 0,
    bottom: -5,
    zIndex: 10,
    alignSelf: "flex-end",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    // backgroundColor: "red",
    marginTop: "12%",
    marginBottom: "-18%",
    zIndex: 1,
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
  topContainer: {
    // width: "95%",
    height: 270,
    marginHorizontal: 15,
    backgroundColor: white,
    marginTop: "25%",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  topImage: {
    width: 319,
    height: 153,
  },
  imageTextContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1%",
  },
  imageText: {
    fontWeight: "700",
    fontSize: 20,
    color: "#FFB600",
    textAlign: "center",
    width: 290,
  },
  entry: {
    height: 135,
    marginHorizontal: 15,
    // width: "100%",
    flexDirection: "row",
    backgroundColor: white,
    marginTop: 20,
    borderRadius: 24,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  textView: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  bottomContainer: {
    backgroundColor: purple,
    width: "100%",
    borderTopRightRadius: 79,
    borderTopLeftRadius: 79,
    // height: 300,
    alignItems: "center",
    paddingTop: 30,
    position: "absolute",
    bottom: 0,
    paddingBottom: 10,
    zIndex: 1,
  },
  videoContainer: {
    padding: 10,
    backgroundColor: white,
    // width: "100%",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: "20%",
    marginHorizontal: 15,
  },
  topTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30%",
    marginBottom: 15,
  },

  disclaimerContainer: {
    zIndex: 12,
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
  disclaimerText: {
    width: "100%",
    textAlign: "center",
    color: purple,
    fontWeight: "700",
    fontSize: 13,
    marginBottom: 10,
  },
});
