import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

const Promotion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState([]);
  const items = [
    { label: "Coding", value: "Coding" },
    { label: "Sales", value: "Sales" },
    { label: "Painting", value: "Painting" },
    { label: "Speaking", value: "Speaking" },
    { label: "Front-End", value: "Front-End " },
  ];

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Image
          style={styles.sideImage}
          source={require("../assets/AIJadu/Login/sideImage.png")}
        />
        <View style={styles.headerContainer}>
          <Image
          style={{alignSelf:"center"}}
           source={require("../assets/AIJadu/signUp/leftArrow.png")} />
          <Image source={require("../assets/AIJadu/signUp/AILogo.png")} />

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

        <View style={styles.infoContainer}>
          <Image
            style={{ position: "absolute", marginTop: -20 }}
            source={require("../assets/AIJadu/Login/blueCircle.png")}
          />
          <Text style={styles.text}>
            EMPLOYABILITY,PROMOTION{`\n`}      & CAREER GROWTH
          </Text>

          <Image source={require("../assets/AIJadu/Login/infoContainer.png")} />
          <Text style={styles.text1}>
            JOBS THAT REQUIRE{`\n`}    SPECIFIC SKILLS
          </Text>

          <View style={styles.inputTextContainer}>
            <TextInput placeholder="     Search By Skills" />
            <Image
            style={{alignSelf:"center",marginRight:10}}
             source={require("../assets/AIJadu/Login/search1.png")} />
          </View>

          <View style={styles.inputTextContainer}>
            <TextInput placeholder="      Search By Skills" />
            <Image
            style={{alignSelf:"center",marginRight:10}}
             source={require("../assets/AIJadu/Login/search1.png")} />
          </View>
          <View style={styles.iconContainer}>
            <Image
              style={styles.iconContainerImage}
              source={require("../assets/AIJadu/iconContainer/iconContainerImage.png")}
            />
            <Image
              style={styles.iconContainerImage}
              source={require("../assets/AIJadu/iconContainer/iconContainerImage1.png")}
            />
            <Image
              style={styles.iconContainerImage}
              source={require("../assets/AIJadu/iconContainer/iconContainerImage2.png")}
            />
            <Image
              style={styles.iconContainerImage}
              source={require("../assets/AIJadu/iconContainer/iconContainerImage4.png")}
            />
            <Image
              style={styles.iconContainerImage}
              source={require("../assets/AIJadu/iconContainer/iconContainerImage6.png")}
            />
            <Image
              style={styles.iconContainerImage}
              source={require("../assets/AIJadu/iconContainer/iconContainerImage7.png")}
            />
            <Image
              style={styles.iconContainerImage}
              source={require("../assets/AIJadu/iconContainer/iconContainerImage8.png")}
            />
          </View>
          <Image
          style={{marginTop:-20, }} 
          source={require('../assets/AIJadu/Login/bottomHalfCircle.png')} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#E4E4E4",
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
    
    justifyContent: "space-evenly",
  },

  bottomDownPicker: {
    width: 200,
   
    borderRadius: 30,
   
    height: 34,
    // alignItems:"center",
    // alignSelf:"center"
   
  },
  searchIcon: {},

  infoContainer: {
    flex: 8,
    marginTop: 80,
  },
  text: {
    alignSelf: "center",
    fontWeight: "700",
    color: "#371BC6",
    fontSize: 20,
    lineHeight: 25,
  },
  text1: {
    alignSelf: "center",
    fontWeight: "700",
    color: "#371BC6",
    fontSize: 20,
    lineHeight: 25,
    marginTop: 40,
  },
  inputTextContainer: {
    width: 380,
    height: 54,
    // backgroundColor:"pink",
    marginTop: 20,
    borderRadius: 27,
    alignSelf: "center",
    // alignItems:"center",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
  },

  iconContainer: {
    // flex: 2,
    height: 147,
    backgroundColor: "#fff",
    width: 362,
    alignSelf: "center",
    borderRadius: 16,
    flexWrap: "wrap",
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-evenly",
    marginTop: 10,
zIndex:1  },
  iconContainerImage: {
    margin: 10,
  },
});

export default Promotion;
