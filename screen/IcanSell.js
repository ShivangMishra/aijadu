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
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";

const IcanSell = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState([]);
  const navigation = useNavigation();
  const items = [
    { label: "Coding", value: "Coding" },
    { label: "Sales", value: "Sales" },
    { label: "Painting", value: "Painting" },
    { label: "Speaking", value: "Speaking" },
    { label: "Front-End", value: "Front" },
  ];

  return (
    <Header dropDownData={items} navigation={navigation} setDropDownValue={setCurrentValue} selectedValue={currentValue} />
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#E4E4E4",
    // justifyContent: "space-evenly",
    flexDirection: "column",
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
    // alignItems:"center",
    // backgroundColor:"red",
    // justifyContent:"center"
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
    width: 380,
    borderRadius: 15,
    alignSelf: "center",
    // height:165,
  },
  container2: {
    flex: 2,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignSelf: "center",
    width: 380,
    borderRadius: 15,
    marginTop: 10,
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
    width: 380,
    height: 165,
  },
  container4: {
    flex: 1,
    backgroundColor: "blue",
    width: 400,
    height: 260,
    marginTop: 10,
    // alignSelf: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
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
    // alignSelf:"center",
    // justifyContent:"center",
    margin: 30,
  },
  signUpContainer: {
    // flexDirection: "row",
    alignItems: "center",
    // alignSelf:"flex-start",
    justifyContent: "space-around",
    justifyContent: "center",
    marginTop: 20,
    // position:"absolute"
    width: 300,
    height: 50,
    // backgroundColor: "red",
    alignSelf: "center",
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
});

export default IcanSell;
