import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Touchable,
  TouchableOpacity
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
      
        <View style={{flexDirection: "row", alignItems:'center', marginTop:20,width:'60%', height:34}} >
          <Image style={{marginHorizontal:10}} source={require("../assets/AIJadu/signUp/leftArrow.png")} />
          <Image style={{marginRight:10}} source={require("../assets/AIJadu/signUp/AILogo.png")} />
          <View>
           <DropDownPicker
              items={items}
              open={isOpen}
              setOpen={() => setIsOpen(!isOpen)}
              value={currentValue}
              height={34}
              setValue={(val) => setCurrentValue(val)}
              placeholder="I want to improve in"
              placeholderStyle={{
                fontWeight: "700",
                fontSize: 12,
             
              }}
              showTickIcon={true}
              showArrowIcon={true}
              dropDownDirection="Bottom"
              disableBorderRadius={false}
            
               style={styles.bottomDownPicker}
             
            />
            </View>
            <TouchableOpacity style={{alignSelf:'flex-end', marginLeft: -50, }}>
            <Image
            //  style={{alignSelf:'flex-end', marginLeft: -50, }}
            source={require("../assets/AIJadu/Login/search1.png")}
          />
          </TouchableOpacity>
        </View>

        <View style={styles.infoContainer}>
          <Image
            style={{ position: "absolute", marginTop: -20 }}
            source={require("../assets/AIJadu/Login/blueCircle.png")}
          />
          <Text style={styles.text}>
            EMPLOYABILITY,PROMOTION{`\n`}      & CAREER GROWTH
          </Text>
          <View style={{ justifyContent:'center', marginTop:20}}>
          <Image style={{width: "92%" , height: 190,  alignSelf:'center'}} source={require("../assets/AIJadu/Login/infoContainer.png")} />
          </View>
          <Text style={styles.text1}>
            JOBS THAT REQUIRE{`\n`}    SPECIFIC SKILLS
          </Text>

          <View style={styles.inputTextContainer}>
            <TextInput style={styles.inputStyles} placeholder="Search By Skills" />
            <Image
            style={{alignSelf:"center",marginRight:10}}
             source={require("../assets/AIJadu/Login/search1.png")} />
          </View>

          <View style={styles.inputTextContainer}>
            <TextInput style={styles.inputStyles} placeholder="Search By Skills" />
            <Image
            style={{alignSelf:"center",marginRight:10}}
             source={require("../assets/AIJadu/Login/search1.png")} />
          </View>

          <View style={styles.iconContainer}>
            <View style={{flexDirection:'row', width:'100%', alignItems:'center', justifyContent:'space-around'}}>
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

            </View>
            
            <View style={{flexDirection:'row', width:'70%', alignItems:'center', justifyContent:'space-around'}}>
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
           
          </View>
          <Image
          style={{marginTop:-30, }} 
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
    paddingTop: 25,
    width:"100%",
    height:'100%'
  },
  sideImage: {
    alignSelf: "flex-end",
    position: "absolute",
    marginTop: 0,
  },
  inputStyles:{
      paddingLeft:28
    },

  headerContainer: {
    marginTop: 20,
    width: "80%",
    flexDirection: "row",
   justifyContent:"center",
   marginLeft: 40
  },

  bottomDownPicker: {
    // backgroundColor:'blue',
    width:'75%',
    borderWidth:0,
    borderRadius:15,
    height:34,
    paddingLeft:25
  },

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
    width: "90%",
    height: 54,
    marginTop: 20,
    borderRadius: 27,
    borderColor:'blue',
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
  },

  iconContainer: {
    
    height: 147,
    backgroundColor: "#fff",
    width: "90%",
    alignSelf: "center",
    borderRadius: 16,
    flexWrap: "wrap",
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-evenly",
    marginTop: 23,
    zIndex:1  },
  iconContainerImage: {
    marginVertical: 7.5,
    borderWidth:1,
    borderColor:"blue",
    borderRadius:5,
    height:50,
    width:50,
    padding:5
  },
});

export default Promotion;
