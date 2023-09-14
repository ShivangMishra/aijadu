import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { FlatList } from "react-native";
import { FontAwesome5, Entypo } from "@expo/vector-icons";
import { gray, purple, white } from "../colors";
import { ApiContext } from "../apis/ApiContext";
import CustomButton from "../components/CustomButton";
import { emailJadu } from "../assets";

const YourJadu = ({navigation}) => {
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
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);

  const [feedback, setFeedback] = useState("");
  const items1 = [
    { id: "1", name: "Value Selling" },
    { id: "2", name: "Managing Our Manager" },
    { id: "3", name: "Personal Branding" },
    { id: "4", name: "Influence" },
    // { id: "5", name: "JOB" },
    // { id: "6", name: "freelancer" },
    // Add more items as needed
  ];
  const [quizListData, setQuizListData] = useState([]);
  const [quizResult, setQuizResult] = useState([]);
  const { fetchQuizList, fetchQuizResult, fetchSituations, submitSituationResponse, chatbotApi } =
    useContext(ApiContext);

  const [currentQuestion, setCurrentQuestion] = useState({
    id: 4,
    text: "uga",
    options: [
      { id: 1, text: "option1" },
      { id: 2, text: "option2" },
      { id: 3, text: "option3" },
    ],
  });

  const [selectedSituationIndex, setSelectedSituationIndex] = useState(0);

  const [situations, setSituations] = useState([
    {category: "Category 1"},{category: "Category 2"},{category: "Category 3"}
  ]);

  const [situationResponses, setSituationResponses] = useState([
    "", "", ""
  ]);

  useEffect(() => {
    fetchQuizList({ setQuizListData });
  }, []);

  useEffect(() => {
    fetchSituations({ setSituations });
  }, []);

  useEffect(() => {
    // {
    //   id: 4,
    //   item_name: "where does the sun rose",
    //   option1: "east",
    //   option2: "west",
    //   option3: "south",
    //   QuizAnswer_CHOICES: [
    //     ["Opt1", "Option 1"],
    //     ["Opt2", "Option 2"],
    //     ["Opt3", "Option 3"],
    //   ],
    // },
    console.log("quizData", quizListData);
    if (!quizListData[0]) {
      return;
    }
    const curQues = quizListData[0];
    const curQuesObj = {
      id: curQues.id,
      text: curQues.item_name,
      options: [
        { id: "1", text: curQues.option1 },
        { id: "2", text: curQues.option2 },
        { id: "3", text: curQues.option3 },
      ],
    };

    console.log("CurQuesObj", JSON.stringify(curQuesObj));
    setCurrentQuestion(curQuesObj);
  }, [quizListData]);

  useEffect(() => {
    const testResponse = [
      {
        category: "Personal",
        id: 8,
        item_description: "tell no confidently",
        item_name: "how to do",
        role: "ai_rs",
        thumbnail:
          "https://aicansellbucket.s3.amazonaws.com/media/BookmarkItems.png?AWSAccessKeyId=AKIAWYG4QYUOBEA5YRLZ&Signature=4WB%2BCaxFOrO5st94zSRcg8m2O44%3D&Expires=1694542207",
      },
      {
        category: "Personal",
        id: 4,
        item_description: "emotional bankbalance",
        item_name: "emotional bankbalance",
        role: "ai_rs",
        thumbnail:
          "https://aicansellbucket.s3.amazonaws.com/c.png?AWSAccessKeyId=AKIAWYG4QYUOBEA5YRLZ&Signature=%2BM8%2BnT1irMuxeTLwz2tH3ieKVSQ%3D&Expires=1694542207",
      },
    ];
    console.log("situations", situations);
    if (!situations[0]) {
      return;
    }
    setSelectedSituationIndex(1);
    // const
    // setTodayQuestion();
  }, [situations]);
  // Function to filter items based on the search query
  const filterItems = (query) => {
    const filtered = items1.filter((item1) =>
      item1.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  useEffect(() => {
    console.log("quiz result", quizResult);
    if (!quizResult.feedback1) {
      return;
    }
    const { feedback1, feedback2, feedback3 } = quizResult;
    const feedbacks = [feedback1, feedback2, feedback3];

    const feedback = feedbacks[selectedOptionIndex];
    setFeedback(feedback);
  }, [quizResult]);

  const handleMcqSubmit = () => {
    console.log("selectedOptionIndex", selectedOptionIndex);
    fetchQuizResult({ setQuizResult, questionId: currentQuestion.id });
    // fetchQuizResult({ data });
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

  const renderSituationSection = () => {
    return (  <View
      style={{
        // ...styles.youJaduContainer,
        backgroundColor: "white",
        marginHorizontal: 20,
        borderWidth: 1,
        borderRadius: 13,
        width: "100%",
        elevation: 5,
        marginBottom: "5%",
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
            {situations[0].category}
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
            {situations[1].category}
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
            {situations[2] ? situations[2].category : "Default"}
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
          // source={{uri: situations[selectedSituationIndex].thumbnail}}
        />
        <View
          style={{
            // ...styles.youJaduBodyContainer1,
            width: "53%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              ...styles.inputTextContainer,
              height: 70,
              paddingHorizontal: 9,
              paddingVertical: 5,
              // justifyContent: "flex-start",
              // alignItems: "flex-start",
            }}>
            {/* placeholder="I need this by yesterday! I don't care if
you have to work till late night." */}
            {situations[selectedSituationIndex].item_name + "\n" + 
            situations[selectedSituationIndex].item_description + 
            "\n" + situations[selectedSituationIndex].role}
          </Text>
          <TextInput
            style={{
              ...styles.inputTextContainer,
              height: 20,
              paddingHorizontal: 9,
            }}
            placeholder="Type Your Response Here "
            onChangeText={(text) => {
              const newSituationResponses = [...situationResponses];
              newSituationResponses[selectedSituationIndex] = text;
              setSituationResponses(newSituationResponses);
            }}
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
            onPress={() => {
              console.log("Submit");
              submitSituationResponse({
                response: situationResponses[selectedSituationIndex],
                 situationId: situations[selectedSituationIndex].id,
                 navigation,
                });
              // fetchQuizResult();
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
    </View>)
  }

  const renderEmailSection = () => {
    return (  <View
      style={{
        // ...styles.youJaduContainer,
        backgroundColor: "white",
        marginHorizontal: 20,
        borderWidth: 1,
        borderRadius: 13,
        width: "100%",
        elevation: 5,
        marginBottom: "5%",
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
            {situations[0].category}
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
            {situations[1].category}
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
            {situations[2] ? situations[2].category : "Default"}
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
          How would you respond to this Email. (Max 30 words)
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
          style={{ borderRadius: 13, top: 15, left: -10}}
          source={emailJadu}
          // source={{uri: situations[selectedSituationIndex].thumbnail}}
        />
        <View
          style={{
            // ...styles.youJaduBodyContainer1,
            width: "53%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              ...styles.inputTextContainer,
              height: 70,
              paddingHorizontal: 9,
              paddingVertical: 5,
              // justifyContent: "flex-start",
              // alignItems: "flex-start",
            }}>
            {/* placeholder="I need this by yesterday! I don't care if
you have to work till late night." */}
            {situations[selectedSituationIndex].item_name + "\n" + 
            situations[selectedSituationIndex].item_description + 
            "\n" + situations[selectedSituationIndex].role}
          </Text>
          <TextInput
            style={{
              ...styles.inputTextContainer,
              height: 20,
              paddingHorizontal: 9,
            }}
            placeholder="Type Your Response Here "
            onChangeText={(text) => {
              const newSituationResponses = [...situationResponses];
              newSituationResponses[selectedSituationIndex] = text;
              setSituationResponses(newSituationResponses);
            }}
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
            onPress={() => {
              console.log("Submit");
              submitSituationResponse({
                response: situationResponses[selectedSituationIndex],
                 situationId: situations[selectedSituationIndex].id,
                 navigation,
                });
              // fetchQuizResult();
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
    </View>)
  }

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

        {renderSituationSection()}
        {renderEmailSection()}
        
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
              {currentQuestion.text}
            </Text>
          </View>
          <FlatList
            data={currentQuestion.options}
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
                  <Text style={{}}>{item.text}</Text>
                  <TouchableOpacity
                    style={{
                      height: 15,
                      width: 15,
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: "black",
                      backgroundColor:
                        selectedOptionIndex === index ? "#FEA01A" : "white",
                    }}
                    onPress={() => {
                      setSelectedOptionIndex(index);
                    }}
                  ></TouchableOpacity>
                </View>
              );
            }}
          />
          <CustomButton
            disabled={selectedOptionIndex === -1}
            text="Submit"
            buttonStyle={{
              backgroundColor: white,
              borderColor: purple,
              borderWidth: 1,
              borderRadius: 5,
              elevation: 0,
              alignSelf: "center",
              width: 100,
              height: 30,
              marginTop: 20,
            }}
            onPress={handleMcqSubmit}
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
              Feedback {" - "}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 10,
                paddingTop: 2,
              }}
            >
              {feedback}
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
            <TextInput style={{ width: "90%" }} placeholder="Search Anything" value={searchQuery}
            onChangeText={(text)=> {setSearchQuery(text)}}
            />
            <TouchableOpacity onPress={() => {
              console.log("Search: ", searchQuery);
              chatbotApi({userInput: searchQuery});
            }}>
            <FontAwesome5 name="search" size={15} color="#FEA01A" />
            </TouchableOpacity>
          </View>
          {/* <Text
            style={{
              fontWeight: "bold",
              fontSize: 13,
              marginHorizontal: 16,
              color: "#371BC6",
            }}
          >
            Suggested
          </Text> */}
          {/* <FlatList
            style={{}}
            data={todayQuestion}
            keyExtractor={(item, index) => index.toString()}
            renderItem={}
          /> */}
          {/* <View
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
          </View> */}
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
    position:"relative",
    backgroundColor: gray,
    alignItems: "center",
    paddingHorizontal: 16,
    // backgroundColor: 'red'
  },
  container1: {
    flex: 3,
    width: 380,
  },
  sideImage: {
    posiion: "absolute",
    alignSelf: "flex-end",
    marginRight: -16,
    right: 0
    // marginTop: -20,
  },
  logoImage: {
    alignSelf: "center",
    marginTop: -70,
  },
  blueCircle: {
    zIndex: 1,
    marginTop: 140,
    position: "absolute",
    marginLeft: -16,
    left: 0,
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
