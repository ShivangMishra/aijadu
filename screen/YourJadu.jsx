import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { FlatList } from "react-native";
import { FontAwesome5, Entypo } from "@expo/vector-icons";

const YourJadu = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [currentValue, setCurrentValue] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [todayQuestion, setTodayQuestion] = useState([
    "option1",
    "option2",
    "option3",
    "option4",
  ]);
  const [selectedOption, setSelectedOption] = useState();

  const items1 = [
    { id: "1", name: "Value Selling" },
    { id: "2", name: "Managing Our Manager" },
    { id: "3", name: "Personal Branding" },
    { id: "4", name: "Influence" },
    // { id: "5", name: "JOB" },
    // { id: "6", name: "freelancer" },
    // Add more items as needed
  ];

  // Function to filter items based on the search query
  const filterItems = (query) => {
    const filtered = items1.filter((item1) =>
      item1.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  const items = [
    { label: "Coding", value: "Coding" },
    { label: "Sales", value: "Sales" },
    { label: "Painting", value: "Painting" },
    { label: "Speaking", value: "Speaking" },
    { label: "Front-End", value: "Front-End " },
  ];

  const handleValueChange = (value) => {
    setCurrentValue(value);
    setSelectedValue(value);
  };

  return (
    <ScrollView style={{ backgroundColor: "#E4E4E4" }}>
      <View style={styles.mainContainer}>
        <View style={styles.container1}>
          <Image
            style={styles.sideImage}
            source={require("../assets/AIJadu/Login/sideImage.png")}
          />
          <Image
            style={styles.logoImage}
            source={require("../assets/AIJadu/yourJadu/LOGOO.png")}
          />

          <Image
            style={styles.blueCircle}
            source={require("../assets/AIJadu/Login/blueCircle.png")}
          />
          <View style={styles.titleContainer}>
            <View style={styles.titleTextContainer}>
              <Text style={styles.titleText}>Get into the</Text>
              <Text style={styles.titleTextBlue}> Winning Streak!</Text>
            </View>

            <View style={styles.titleTextContainer}>
              <Text style={styles.titleText}> Make every interaction</Text>
              <Text style={styles.titleTextBlue}> Smarter with Aicansell.</Text>
            </View>
          </View>

          <Text style={styles.subtitle}>
            Master the art of influencing people around you
          </Text>

          <View style={styles.yourJaduTextContainer}>
            <Text style={styles.yourJaduTextBlue}>Your</Text>
            <Text style={styles.yourJaduText}> JADU</Text>
            <Text style={styles.yourJaduTextBlue}> for</Text>
            <Text style={styles.yourJaduText}> Today</Text>
          </View>
        </View>

        <View
          style={{
            ...styles.youJaduContainer,
            backgroundColor: "white",
            marginHorizontal: 20,
            borderWidth: 1,
            borderRadius: 13,
            width: "100%",
          }}
        >
          <View
            style={{
              ...styles.youJaduHeaderContainer,
              height: 40,
              flexDirection: "row",
              borderBottomWidth: 1,
            }}
          >
            <View
              style={{
                ...styles.youJaduHeaderContainer1,
                backgroundColor: "#FEA01A",
                borderTopLeftRadius: 13,
                width: "33%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                Angry Customer
              </Text>
            </View>
            <View
              style={{
                ...styles.youJaduHeaderContainer2,
                backgroundColor: "#360DFF",
                width: "34%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ fontWeight: "bold", fontSize: 12, color: "white" }}
              >
                Demanding Boss
              </Text>
            </View>
            <View
              style={{
                ...styles.youJaduHeaderContainer3,
                backgroundColor: "#FEA01A",
                borderTopRightRadius: 13,
                width: "33%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 12,
                }}
              >
                Father of rich {`\n`} girl-friend
              </Text>
            </View>
          </View>
          <View
            style={{
              ...styles.youJaduBodyHeaderContainer,
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 7,
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: 10, color: "#360DFF" }}>
              How would you respond to this situation. (Max 30 words)
            </Text>
          </View>
          <View
            style={{
              ...styles.youJaduBodyContainer,
              justifyContent: "center",
              alignItems: "flex-start",
              paddingVertical: 7,
              flexDirection: "row",
            }}
          >
            <Image
              style={{ height: "90%", borderRadius: 13 }}
              source={require("../assets/AIJadu/yourJadu/Hr.png")}
            />
            <View
              style={{
                ...styles.youJaduBodyContainer1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextInput
                style={{
                  ...styles.inputTextContainer,
                  height: 70,
                  paddingHorizontal: 9,
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
                placeholder="I need this by yesterday! I don't care if
you have to work till late night."
              />
              <TextInput
                style={{
                  ...styles.inputTextContainer,
                  height: 20,
                  paddingHorizontal: 9,
                }}
                placeholder="Type Your Response Here "
              />
              <TouchableOpacity
                style={{
                  ...styles.submitFormContainerOrangeText,
                  marginTop: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                  borderRadius: 3,
                  borderColor: "#371BC6",
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 10 }}>Submit</Text>
              </TouchableOpacity>
              <View style={{ flexDirection: "row", marginTop: 9 }}>
                <Image
                  style={{ marginHorizontal: 10 }}
                  source={require("../assets/AIJadu/yourJadu/images09.png")}
                />
                <Image
                  source={require("../assets/AIJadu/yourJadu/Group.png")}
                />
              </View>
            </View>
          </View>
        </View>

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 13,
            color: "#360DFF",
            alignSelf: "center",
            marginVertical: 10,
          }}
        >
          JADU Quiz for Today
        </Text>

        <View
          style={{
            ...styles.jaduQuizContainer,
            marginHorizontal: 20,
            borderWidth: 1,
            borderRadius: 13,
            width: "100%",
            justifyContent: "center",
            backgroundColor: "#F2F2F2",
          }}
        >
          <View style={{ ...styles.jaduQuizHeaderContainer }}>
            <Text
              style={{
                flexDirection: "row",
                fontWeight: "bold",
                fontSize: 13,
                alignSelf: "flex-start",
                marginVertical: 16,
                paddingHorizontal: 16,
              }}
            >
              Personal Sales Excellence is
            </Text>
          </View>
          <FlatList
            data={todayQuestion}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              console.log("option", item);
              return (
                <View
                  style={{
                    ...styles.jaduQuizBodyContainer,
                    backgroundColor: "white",
                    height: 30,
                    marginVertical: 5,
                    width: "90%",
                    alignSelf: "center",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    paddingHorizontal: 10,
                  }}
                >
                  <Text style={{}}>{item}</Text>
                  <TouchableOpacity
                    style={{
                      height: 15,
                      width: 15,
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: "black",
                      backgroundColor:
                        selectedOption === index ? "#FEA01A" : "white",
                    }}
                    onPress={() => {
                      setSelectedOption(index);
                    }}
                  ></TouchableOpacity>
                </View>
              );
            }}
          />
          <View
            style={{
              ...styles.jaduQuizFooterContainer,
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 16,
              marginTop: 30,
              marginBottom: 20,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 13 }}>
              Correct Response-{" "}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 10,
                paddingTop: 2,
              }}
            >
              Inherited
            </Text>
          </View>
        </View>

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 13,
            color: "#360DFF",
            marginTop: 10,
          }}
        >
          AI IntelliSearch - Learn in 3 min
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 5 }}>
          Personal Branding, Sales Intelligence and lots more
        </Text>
        <View
          style={{
            ...styles.jaduQuizContainer,
            marginHorizontal: 20,
            borderWidth: 1,
            borderRadius: 13,
            width: "100%",
            justifyContent: "center",
            backgroundColor: "#E4DFDF",
          }}
        >
          <View
            style={{
              ...styles.jaduQuizHeaderContainer,
              backgroundColor: "white",
              width: "90%",
              borderRadius: 3,
              borderWidth: 1,
              borderColor: "#371BC6",
              alignSelf: "center",
              marginVertical: 10,
              paddingHorizontal: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextInput style={{ width: "90%" }} placeholder="Search Anything" />
            <FontAwesome5 name="search" size={15} color="#FEA01A" />
          </View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 13,
              marginHorizontal: 16,
              color: "#371BC6",
            }}
          >
            Suggested
          </Text>
          {/* <FlatList
            style={{}}
            data={todayQuestion}
            keyExtractor={(item, index) => index.toString()}
            renderItem={}
          /> */}
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              marginBottom: "20%",
              marginHorizontal: 11,
            }}
          >
            {todayQuestion.map((item) => {
              console.log("item", item);
              return (
                <View
                  style={{
                    ...styles.jaduQuizBodyContainer,
                    backgroundColor: "white",
                    height: 25,
                    margin: 5,
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    paddingHorizontal: 5,
                    borderRadius: 3,
                    borderWidth: 1,
                    borderColor: "#371BC6",
                  }}
                >
                  <Text style={{}}>{item}</Text>
                  <Entypo name="cross" size={15} color="black" />
                </View>
              );
            })}
          </View>
        </View>
        <View
          style={{
            zIndex: -1,
            marginTop: -50,
            alignSelf: "flex-start",
            marginLeft: -20,
          }}
        >
          <Image source={require("../assets/AIJadu/yourJadu/lastCircle.png")} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#E4E4E4",
    alignItems: "center",
    justifyContent: "space-around",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  container1: {
    flex: 3,
    width: 380,
  },
  sideImage: {
    alignSelf: "flex-end",
    marginTop: -20,
  },
  logoImage: {
    alignSelf: "center",
    marginTop: -70,
  },
  blueCircle: {
    zIndex: 1,
    marginTop: 140,
    position: "absolute",
  },
  titleContainer: {
    alignSelf: "center",
    marginTop: 10,
  },
  titleTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  titleText: {
    fontWeight: "700",
    fontSize: 13,
    lineHeight: 17,
    color: "#FEA01A",
  },
  titleTextBlue: {
    fontWeight: "700",
    fontSize: 13,
    lineHeight: 17,
    color: "#371BC6",
  },
  subtitle: {
    fontWeight: "700",
    fontSize: 13,
    lineHeight: 16,
    alignSelf: "center",
    margin: 10,
  },
  yourJaduTextContainer: {
    flexDirection: "row",
    alignSelf: "center",
    margin: 10,
  },
  yourJaduText: {
    fontWeight: "700",
    fontSize: 13,
    lineHeight: 17,
    color: "#371BC6",
  },
  yourJaduTextBlue: {
    fontWeight: "700",
    fontSize: 13,
    lineHeight: 17,
    color: "#FEA01A",
  },
  container2: {
    width: 380,
    height: 250,
    // backgroundColor: "lightgreen",
    borderWidth: 1,
    borderRadius: 13,
  },
  container3: {
    width: 380,
    height: 260,
    // backgroundColor: "lightblue",
  },
  container4: {
    width: 400,
    height: 205,
    backgroundColor: "orange",
    alignSelf: "center",
  },
  submitFormContainerOrangeText: {
    width: 70,
    height: 24,
    fontWeight: "700",
    fontSize: 10,
    textAlign: "center",
    textAlignVertical: "center",
    borderWidth: 1,
  },
  submitFormContainerOrangeText1: {
    width: 126,
    height: 38,
    fontWeight: "700",
    fontSize: 10,
    backgroundColor: "#FEA01A",
    borderTopRightRadius: 12,
    textAlign: "center",
    textAlignVertical: "center",
  },
  submitFormContainer: {
    flexDirection: "row",
  },
  submitFormContainerBlueText: {
    width: 126,
    height: 38,
    fontWeight: "700",
    fontSize: 10,
    backgroundColor: "#360DFF",
    color: "#FFF",
    textAlign: "center",
    textAlignVertical: "center",
  },
  submitFormContainerBlueTextHeading: {
    fontWeight: "700",
    fontSize: 10,
    lineHeight: 12,
    color: "#360DFF",
    alignSelf: "center",
    margin: 5,
  },
  submitFormContainerForm: {
    flexDirection: "row",
  },
  inputTextContainer: {
    width: "90%",
    height: 74,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#360DFF",
    fontWeight: "400",
    fontSize: 10,
    margin: 5,
  },
  inputTextContainer1: {
    width: 203,
    fontWeight: "400",
    fontSize: 8,
    lineHeight: 10,
    borderWidth: 1,
    borderColor: "#360DFF",
    alignSelf: "center",
    borderRadius: 4,
  },
  yourJaduTextBlue1: {
    fontWeight: "700",
    fontSize: 13,
    lineHeight: 17,
    color: "#371BC6",
    alignSelf: "center",
    margin: 5,
  },
  bottomDownPicker: {
    width: 380,
    height: 200,

    borderRadius: 13,

    height: 34,
    backgroundColor: "#E4E4E4",
    // alignItems:"center",
    // alignSelf:"center"
  },
  selectedValueText: {
    fontSize: 13,
    fontWeight: "800",
    // marginTop: 10,
    // textAlign: 'center',
    marginTop: 190,
    // marginLeft:10,
  },
  container4: {
    width: 400,
    height: 300,
    backgroundColor: "#E4DFDF",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  searchContainer: {
    width: 360,
    height: 230,
    backgroundColor: "#E4DFDF",
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 13,
    // flexDirection:"row",
    flexWrap: "wrap",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
    borderRadius: 8,
    width: 355,
    // height:40,
  },
  item1: {
    padding: 5,
    backgroundColor: "#fff",
    margin: 5,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "50%",
  },
});

export default YourJadu;
