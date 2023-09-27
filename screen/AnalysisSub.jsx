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
  downBlack,
  smallLogo,
  sub1,
  sub2,
  topBubble,
} from "../assets";
import { cloneElement, useState } from "react";

export default function AnalysisSub({ navigation }) {
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

  return (
    <View style={styles.container}>
      <View style={{ zIndex: 4, width: "100%", alignItems: "center" }}>
        {renderHeader()}
        <View style={styles.topTextContainer}>
          <Text style={{ fontSize: 22, fontWeight: "700" }}>DO JADU</Text>
          <Text
            style={{
              width: 250,
              textAlign: "center",
              fontSize: 15,
              fontWeight: "600",
            }}
          >
            {"TOTAL SIMULATIONS ATTEMPTED- ORGANIZATION NAME"}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "800",
              color: purple,
              marginTop: 10,
            }}
          >
            {"Interview> Enthusiasm> Level-1"}
          </Text>
        </View>

        <View style={{ height: 20, width: "100%", alignItems: "center", marginBottom: 12}}>
         <View style={{justifyContent: "center", flexDirection: "row", justifyContent: "space-between", width: "95%", paddingHorizontal: 20}}>
         <Text style={{ fontSize: 10, fontWeight: "600", alignSelf:"flex-start", marginBottom: 5 }}>Select Period</Text>
          <TouchableOpacity>
          <Image source={downBlack}/>
          </TouchableOpacity>
         </View>
          <View
            style={{ backgroundColor: black, height: 1, width: 360 }}
          ></View>
        </View>
        <FlatList
          data={[
            {
              title: "SALES",
              image: sub1,
              subCompetencies: [
                { label: "Sub Competency 1", value: "3" },
                { label: "Sub Competency 2", value: "2" },
                { label: "Sub Competency 3", value: "5" },
              ],
            },
            {
              title: "PERSONAL BRANDING",
              image: sub2,
              subCompetencies: [
                { label: "Sub Competency 1", value: "3" },
                { label: "Sub Competency 2", value: "2" },
                { label: "Sub Competency 3", value: "5" },
              ],
            },
          ]}
          renderItem={({ item }) => (
            <View
              style={{
                width: 370,
                paddingHorizontal: 10,
                backgroundColor: white,
                borderRadius: 21,
                paddingVertical: 20,
                marginBottom: 15,
                borderColor: purple,
                borderWidth: 1,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                  paddingHorizontal: 10,
                }}
              >
                <Image source={item.image} />
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: 150,
                  }}
                >
                  <Text
                    style={{ fontSize: 12, fontWeight: "800", color: purple }}
                  >
                    Competency
                  </Text>
                  <Text
                    style={{ fontSize: 12, fontWeight: "800", color: purple }}
                  >
                    {item.title}
                  </Text>

                  <TouchableOpacity>
                    <Text
                      style={{
                        marginTop: 10,
                        fontSize: 12,
                        fontWeight: "800",
                        color: orange,
                      }}
                    >
                      CLICK TO SEE TIMELINE
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: gray,
                  padding: 5,
                  justifyContent: "space-between",
                  paddingHorizontal: 10,
                }}
              >
                <Text
                  style={{ fontSize: 12, fontWeight: "800", color: purple }}
                >
                  SUB COMPETENCY
                </Text>
                <Text
                  style={{ fontSize: 12, fontWeight: "800", color: purple }}
                >
                  COUNT
                </Text>
              </View>
              {item.subCompetencies.map((sub) => (
                <View
                  style={{
                    flexDirection: "row",
                    padding: 5,
                    justifyContent: "space-between",
                    paddingHorizontal: 10,
                  }}
                >
                  <Text
                    style={{ fontSize: 12, fontWeight: "800", color: orange }}
                  >
                    {sub.label}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "800",
                      color: orange,
                      marginRight: 15,
                    }}
                  >
                    {sub.value}
                  </Text>
                </View>
              ))}
            </View>
          )}
        />
      </View>

      <Text
        style={{
          position: "absolute",
          bottom: 10,
          color: purple,
          fontSize: 13,
          fontWeight: "600",
        }}
      >
        Terms & Conditions | Privacy Policy
      </Text>
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
