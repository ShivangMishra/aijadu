import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { gray, orange, purple, white } from "../colors";
import {
  backArrow,
  blueBubble,
  bottomBubble,
  bottomItem,
  heart,
  itemImg,
  leftArrow,
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

export default function InterviewMain({ navigation }) {
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

  const renderVideo = () => {
    return (
      <View style={styles.videoContainer}>
        <Image source={videoThumbnail} />

        <View style={{ flexDirection: "row", width: "100%", marginTop: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <Image source={tinyImg} />
            <View style={{ width: 123, marginLeft: 5 }}>
              <Text style={{ fontSize: 9, fontWeight: "600" }}>
                INTERVIEW STORY TELLING
              </Text>
              <Text style={{ fontSize: 5, fontWeight: "600" }}>
                Lorem ipsum dolor sit amet. Et nemo dolores aut magni repellat
                sed nisi quia ut repellat vo luptates a rerum repellat! Rem
                obcaecati voluptates qui quas quamsed consequatur consequuntur
                non c umque reiciendis eos reiciendis mollitia.
              </Text>
            </View>
          </View>
          <View style={{ flex: 1, marginLeft: 5 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Label icon={heart} text="120k" />
              <Label icon={share} text="Share" />
              <Label icon={save} text="Save" />
            </View>
            <CustomButton
              text="SUBSCRIBE"
              buttonStyle={{
                width: 93,
                height: 23,
                borderRadius: 4,
                alignSelf: "flex-end",
                marginTop: 5,
              }}
              textStyle={{ fontSize: 10, fontWeight: "600" }}
            />
          </View>
        </View>
      </View>
    );
  };

  const renderElement2 = () => {
    return (
      <View
        style={{
          margin: 15,
          borderRadius: 11,
          height: 205,
          elevation: 5,
          paddingVertical: 20,
          backgroundColor: white,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 12, fontWeight: "800", marginBottom: 5 }}>
          YOU'LL ENHANCE:
        </Text>
        <Text
          style={{
            fontSize: 10,
            fontWeight: "600",
            color: orange,
            width: 200,
            textAlign: "center",
          }}
        >
          Use of power words linked to desired role, memorability, Enthusiam
        </Text>

        <View
          style={{
            width: "95%",
            height: 1.5,
            backgroundColor: purple,
            marginVertical: 15,
          }}
        />
        <Text style={{ fontSize: 12, fontWeight: "800" }}>
          JADU’S LEFT TO NEXT LEVEL: 05
        </Text>

        <View
          style={{
            width: "95%",
            height: 1,
            backgroundColor: purple,
            marginVertical: 15,
          }}
        />

        <Text style={{ fontSize: 12, fontWeight: "800", marginBottom: 5 }}>
          ON COMPLETION OF THIS LEVEL:
        </Text>
        <Text style={{ fontSize: 10, fontWeight: "600", color: orange }}>
          Win - Persuasive skills courses from - john Maxwell
        </Text>
      </View>
    );
  };

  const renderMidElement = () => {
    return (
      <View
        style={{
          margin: 15,
          borderRadius: 11,
          height: 296,
          elevation: 5,
          paddingVertical: 20,
          backgroundColor: white,
          //   justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "800", marginBottom: 30 }}>
          I WANT TO RESPOND BY:
        </Text>

        <CustomButton
          text="RECORD OWN VIDEO"
          buttonStyle={{ width: 300, height: 43, marginBottom: 30 }}
          textStyle={{ fontSize: 12, fontWeight: "700" }}
        />
        <CustomButton
          text="RECORD AUDIO WITH AVATAR"
          buttonStyle={{ width: 300, height: 43, marginBottom: 30 }}
          textStyle={{ fontSize: 12, fontWeight: "700" }}
        />
        <CustomButton
          text="TEXT TYPED INTO CARTOON TEMPLATE"
          buttonStyle={{ width: 300, height: 43 }}
          textStyle={{ fontSize: 12, fontWeight: "700" }}
        />
      </View>
    );
  };
  
  const renderBottomContainer = () => {
    return (
      <View style={styles.bottomContainer}>
        <Text style={{ fontSize: 18, color: white, fontWeight: "800" }}>
          EXPERT JADU VIDEOS
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
          <Image source={leftArrow} style={{marginRight: 10}}/>

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
              INTERVIEW STORY TELLING
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
              INTERVIEW STORY TELLING
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
              INTERVIEW STORY TELLING
            </Text>
          </View>

          <Image source={rightArrow} style={{marginLeft: 10}}/>
        </View>

        <Text style={{fontSize: 13, color: white, marginTop: 40, marginBottom: 10}}>Terms & Conditions | Privacy Policy</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView style={{ zIndex: 4, width: "100%" }}>
        {renderHeader()}
        <View style={styles.topTextContainer}>
          <Text style={{ fontSize: 22, fontWeight: "700" }}>DO JADU</Text>
          <Text style={{ fontSize: 15, fontWeight: "600" }}>
            {"INTERVIEW> ENTHUSIASM> LEVEL-1"}
          </Text>
        </View>
        {renderVideo()}
        {renderElement2()}
        {renderMidElement()}
        {renderBottomContainer()}
        {/* {renderTopImage()} */}
        {/* {renderItems()} */}
      </ScrollView>
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
});
