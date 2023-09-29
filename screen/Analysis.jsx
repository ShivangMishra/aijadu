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
import { BarChart } from "react-native-gifted-charts";

export default function Analysis({ navigation, route }) {
  const { analysisData } = route.params;
  const DATA = [
    {
      title: "YOU ARE COMING ACROSS AS",
      words: ["Enthusiastic", "Memorable"],
      color: seanColor1,
      id: 1,
    },
    {
      title: "POWER WORDS YOU USED",
      words: ["Handling tough Situations", "Linkage to Role"],
      color: seanColor2,
      id: 2,
    },
    {
      title: "WEAK WORDS, YOU SHOULD TRY REPLACING",
      words: ["Enthusiastic", "Memorable"],
      id: 3,
      color: seanColor3,
    },
  ];

  const DATA2 = [
    {
      title: "YOU ARE COMING ACROSS AS",
      words: ["Enthusiastic", "Memorable"],
      color: seanColor4,
      id: 4,
    },
    {
      title: "POWER WORDS YOU USED",
      words: ["Handling tough Situations", "Linkage to Role"],
      color: seanColor5,
      id: 5,
    },
    {
      title: "WEAK WORDS, YOU SHOULD TRY REPLACING",
      words: ["Enthusiastic", "Memorable"],
      id: 6,
      color: seanColor6,
    },
  ];

  const CHART_DATA = [
    { value: 50, label: "Happy" },
    { value: 80, label: "Sad" },
    { value: 90, label: "Angry" },
    { value: 70, label: "Fear" },
  ];
  const [data1Expanded, setData1Expanded] = useState(false);
  const [data2Expanded, setData2Expanded] = useState(false);

  const [data1, setData1] = useState(DATA);
  const [data2, setData2] = useState(DATA2);

  const [chartData, setChartData] = useState();

  useEffect(() => {
    // Check if analysisData is available
    if (analysisData) {
      //recommends, GET
      const recommends = analysisData.recommends;
      const analysis = analysisData.analysis;
      const emotions = analysisData.emotions || "";
      setData2((prevData) => [
        {
          ...prevData[0],
          words: [recommends.positive_traits],
        },
        {
          ...prevData[1],
          words: recommends.competency_power_words,
        },
        {
          ...prevData[2],
          words: recommends.competency_weak_words,
        },
      ]);

      setData1((prevData) => [
        {
          ...prevData[0],
          words: [analysis.coming_across_as],
        },
        {
          ...prevData[1],
          words: [analysis.positive_traits],
        },
        {
          ...prevData[2],
          words: [analysis.negative_traits],
        },
      ]);
      setChartData(stringToArray(emotions));
    }
  }, [analysisData]);

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

  const renderThankYou = () => {
    return (
      <View style={styles.thankyouContainer}>
        <Text style={{ fontSize: 14, fontWeight: "700" }}>Thank You!</Text>

        <View style={{width: "100%", flexWrap: "wrap" }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "700",
              textAlign: "center",
              width: "100%",
              color: purple,
            }}
          >
            WE HAVE RECIEVED YOUR RESPONSE
          </Text>
          <View style={{flexDirection: "row", justifyContent: "center", width: "100%", alignItems: "center"}}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "700",
              // backgroundColor: "red",
              // textAlign: "center",
              // width: 245,
              color: orange,
            }}
          >
            HOLD-ON{" "}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "700",
              textAlign: "center",
              // backgroundColor: "green",
              // width: 245,
              color: purple,
            }}
          >
            FOR YOUR SCORE RESULT
          </Text>
          </View>
        </View>
      </View>
    );
  };

  const renderTitle = () => {
    return (
      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 22, fontWeight: "700" }}>DO JADU</Text>
        <Text style={{ fontSize: 15, fontWeight: "600" }}>
          INTERVIEW{"> "}ENTHUSIASM{"> "}LEVEL-1
        </Text>
      </View>
    );
  };

  const renderItem = ({ item }) => {
    return (
      <View
        style={[styles.item, { backgroundColor: item.color }]}
        key={item.id}
      >
        <Text style={styles.seanInnerText}>{item.title}</Text>
        <Text style={[styles.seanInnerText, { width: 150 }]}>
          {item.words.reduce((text, word) => text + ", " + word)}
        </Text>
        <Image style={styles.thumbImg} source={thumb} /> 
      </View>
    );
  };

  const stringToArray = (str) => {
    // str = "'z': 1, 'y':2, 'x':3";
    if (str.trim() === "") {
      return [];
    }
    const arr = str.split(",");
    console.log("str", str);
    console.log("arr", arr);
    const chartD = arr.map((item) => {
      const entry = item.split(":");
      return {
        label: entry[0],
        value: parseInt(entry[1].trim()),
      };
    });
    console.log(chartD);
    // if(chartD.length === 0) {
    //   alert("No data available for bar chart. Using default data for demo");
    return chartD;
    // }
    // return chartD;
  };

  const renderChart = () => {
    console.log("chartData", chartData);
    if(!chartData || chartData.length === 0) {
      return null;
    }
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: white,
          borderRadius: 13,
          borderColor: purple,
          borderWidth: 1,
          width: "100%",
          marginTop: "5%",
          height: 300,
          paddingLeft: "13.5    %",
          justifyContent: "center",
        }}
      >
        <BarChart data={chartData} 
        frontColor={orange}
        />
      </View>
    );
  };

  const renderSeanAnalysis = (title, data, isExpanded, setExpanded) => {
    return (
      <View style={styles.seanContainer}>
        <Text style={{ fontSize: 16, fontWeight: "800" }}>{title}</Text>
        <View style={{ width: "100%" }}>
          {isExpanded
            ? data.map((item) => renderItem({ item }))
            : renderItem({ item: data[0] })}
        </View>
        <TouchableOpacity
          style={isExpanded ? styles.minusImg : styles.plusImg}
          onPress={() => {
            setExpanded((prevState) => !prevState);
          }}
        >
          {isExpanded ? <Image source={minus} /> : <Image source={plus} />}
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {renderHeader()}
      <ScrollView
        style={{ width: "100%", paddingHorizontal: "2.8%", marginTop: 80 }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {renderTitle()}
        {renderThankYou()}
        <Text
          style={{
            fontSize: 14,
            color: purple,
            fontWeight: "700",
            marginTop: "5%",
          }}
        >
          SENTICLOUD ANALYSIS FOR YOUR RESPONSE
        </Text>

        {renderChart()}
        {renderSeanAnalysis(
          "SEAN Analysis",
          data1,
          data1Expanded,
          setData1Expanded
        )}
        {renderSeanAnalysis(
          "SEAN Recommends",
          data2,
          data2Expanded,
          setData2Expanded
        )}
        <CustomButton
          buttonStyle={{
            backgroundColor: white,
            borderColor: purple,
            borderWidth: 1,
            margin: "5%",
            elevation: 0,
          }}
          text="TRY ANOTHER JADU"
          onPress={() => navigation.navigate("YourJadu")}
        />
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
    // height: 122,
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
