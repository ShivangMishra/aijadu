import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import {
  gray,
  orange,
  purple,
  seanColor1,
  seanColor2,
  seanColor3,
  seanColor4,
  seanColor5,
  seanColor6,
  white,
} from "../colors";
import {
  backArrow,
  blueBubble,
  bottomBubble,
  minus,
  plus,
  smallLogo,
  thumb,
  topBubble,
} from "../assets";
import { useEffect, useState } from "react";
import CustomButton from "../components/CustomButton";
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";

export default function AnalysisChart({ navigation, route }) {
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

  //   const renderRadarChart =() => {
  //     return (
  //         <View>
  //           <Radar  data={data} options={options} />
  //         </View>
  //       )
  //   }

  const data = [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }];

  const captions = {
    // columns
    battery: "Battery Capacity",
    design: "Design",
    useful: "Usefulness",
    speed: "Speed",
    weight: "Weight",
  };
  const renderRadarChart = () => {};
  return (
    <View></View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    backgroundColor: gray,
    alignItems: "center",
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    // marginTop: "34%",
  },
  thankyouContainer: {
    justifyContent: "space-between",
    backgroundColor: white,
    borderRadius: 19,
    // justifyContent: "center",
    alignItems: "center",
    paddingVertical: "5%",
    height: 109,
    width: "100%",
    marginTop: "4%",
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
    bottom: 0,
    zIndex: -1,
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
  seanContainer: {
    backgroundColor: white,
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 13,
    zIndex: 1,
    paddingHorizontal: "2%",
    paddingTop: "1.5%",
    marginTop: "5%",
    borderColor: purple,
    borderWidth: 1,
    elevation: 1,
  },
  item: {
    width: "100%",
    height: 122,
    backgroundColor: "red",
    marginVertical: "2%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: "6%",
    borderRadius: 19,
  },
  seanInnerText: {
    color: white,
    fontSize: 12,
    fontWeight: "800",
    textAlign: "center",
  },
  thumbImg: {
    position: "absolute",
    bottom: 25,
    right: 50,
  },
  plusImg: {
    position: "absolute",
    top: 5,
    right: 10,
  },
  minusImg: {
    position: "absolute",
    top: 15,
    right: 15,
  },
});
