import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
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
  avatar,
  avatarLeft,
  backArrow,
  blueBubble,
  bottomBubble,
  bottomItem,
  cartoon11,
  cartoon12,
  cartoon21,
  cartoon22,
  cartoonTemplate,
  discImg,
  downArrow,
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
  upArrow,
  videoThumbnail,
} from "../assets";
import CustomButton from "../components/CustomButton";
import Label from "../components/Label";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import CustomTextInput from "../components/CustomTextInput";

export default function CartoonTemplates({ navigation }) {
  const [disclaimer, setDisclaimer] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [inputValue, setInputValue] = useState(
    "My bissgest goat would be to fast-track my deliverables"
  );
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

  const renderRecordAudio = () => {
    return (
      <View
        style={{
          // elevation: 5,
          backgroundColor: white,
          borderRadius: 25,
          width: "92%",
          marginHorizontal: 15,
          // justifyContent: "center",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Text style={{ fontSize: 12, fontWeight: "700", color: purple }}>
          TYPE TEXT & USE OUR CARTOON TEMPLATES
        </Text>
        <Text
          style={{
            marginTop: 5,
            fontSize: 12,
            fontWeight: "700",
            color: purple,
          }}
        >
          INDIVIDUAL INTERVIEW
        </Text>

        <Image source={cartoonTemplate} />
        <View
          style={{
            flexDirection: "row",
            width: 225,
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 12, fontWeight: "700", color: purple }}>
            INTERVIEWER
          </Text>
          <Text style={{ fontSize: 12, fontWeight: "700", color: purple }}>
            CANDIDATE
          </Text>
        </View>
      </View>
    );
  };

  const renderBottomContainer = () => {
    return (
      <View style={styles.bottomContainer}>
        <Text style={{ fontSize: 18, color: white, fontWeight: "800" }}>
          MY SAVED JADU'S
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

        <View
          style={{
            // elevation: 5,
            backgroundColor: white,
            borderRadius: 25,
            width: "92%",
            marginHorizontal: 15,
            height: 105,
            // justifyContent: "center",
            alignItems: "center",
            padding: 10,
            paddingTop: 20,
            marginTop: 10,
          }}
        >
          <Text
            style={{ textAlign: "center", fontSize: 12, fontWeight: "600" }}
          >
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book.
          </Text>
        </View>

        <View style={{ marginTop: 10, flexDirection: "row", width: "90%", alignSelf: "center", justifyContent: "space-between" }}>
          <CustomButton
            buttonStyle={{
              backgroundColor: "transparent",
              elevation: 0,
              borderColor: purple,
              borderWidth: 1,
              width: 175,
              height: 42,
            }}
            textStyle={{ color: purple, fontSize: 12, fontWeight: "700" }}
            text="PREVIEW"
          />
          <CustomButton
            buttonStyle={{
              backgroundColor: "transparent",
              elevation: 0,
              borderColor: purple,
              borderWidth: 1,
              width: 175,
              height: 42,
            }}
            textStyle={{ color: purple, fontSize: 12, fontWeight: "700" }}
            
            text="UPLOAD THIS RESPONSE"
          />
        </View>
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
    paddingBottom: 5,
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
