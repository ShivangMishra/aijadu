import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { Image } from "react-native";

const MainPage = ({props}) => {
  return (
    <ScrollView>
    <View style={styles.mainContainer}>
      <Image
        style={styles.headerContainerImage}
        source={require("../assets/AIJadu/Login/sideImage.png")}
      />
      <View style={styles.overlayContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={()=> props.navigation.goBack()}>
          <Image
            style={[styles.arrowImage]}
            source={require("../assets/AIJadu/signUp/leftArrow.png")}
          />
          </TouchableOpacity>
          <View style={styles.headerContainerImageBlock}>
            <Image
              style={styles.logoImage}
              source={require("../assets/AIJadu/signUp/AILogo.png")}
            />
          </View>
        </View>
      </View>

      <View style={styles.middleText}>
        <Image
          style={styles.middleTextImage}
          source={require("../assets/AIJadu/Login/blueCircle.png")}
        />
        <View style={styles.middleTextHeadings} >
          <Text style={styles.middleTextHeadingsText1}>You Are Ready To</Text>
          <Text style={styles.middleTextHeadingsText2} >DO JADU</Text>
          <Text style={styles.middleTextHeadingsText3} >     Thank you for signing-up{`\n`}We have sent a verification link{`\n`}     on your registered Email.</Text>
        </View>
      </View>

      <Image 
      source={require("../assets/AIJadu/signUp/mainLogo.png")}
       />
       <TouchableOpacity style={styles.registerButton} >
        <Text style={styles.registerButtonText} >GO TO REGISTERED EMAIL & VERIFY NOW</Text>
       </TouchableOpacity>

       <Text style={styles.emailButton} > Did not receive verification email? </Text>

       <TouchableOpacity style={styles.resendButton} >
        <Text style={styles.resendButtonText} >RESEND NOW</Text>
       </TouchableOpacity>

       <Image
       style={styles.bottomHalfCircle}
        source={require("../assets/AIJadu/Login/bottomHalfCircle.png")}
       />
       
    </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  mainContainer: {
   
    width:"100%",
    backgroundColor: "#E4E4E4",
   marginTop:50,
  
  },
  overlayContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  headerContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
   paddingTop:10

  },
  arrowImage: {
    marginRight: 10,
  },
  headerContainerImageBlock: {
    width: "80%",
    height: 42,
    borderRadius: 14,
    backgroundColor: "#ffff",
    justifyContent: "center",
  },
  logoImage: {
    alignSelf: "center",
  },
  headerContainerImage: {
    alignSelf: "flex-end",
    // marginTop:-22,
  },
  middleText: {
    // backgroundColor: "red",
    width: 380,
    height: 100,
    flexDirection:"row",
    alignItems:"center",
    // justifyContent:"space-between"

},
  middleTextHeadings:{
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"center",
    alignSelf:"center",
    marginLeft:50,
    


},
  middleTextImage: {
    alignSelf:"baseline",
    marginTop:-22
    

},
middleTextHeadingsText1:{
    fontWeight:"600",
    fontSize:20,
    lineHeight:25,
    color:"#FDA100",
    alignSelf:"center"
},
middleTextHeadingsText2:{
    fontWeight:"bold",
    fontSize:38,
    lineHeight:46,
    color:"#371BC6"
},
middleTextHeadingsText3:{
    fontWeight:"600",
    fontSize:13,
    lineHeight:16,
    color:"#000000"
},
registerButton:{
    backgroundColor:"#371BC6",
    width:"80%",
    height:51,
    alignSelf:"center",
    borderRadius:27,
    justifyContent:"center",
    marginTop:30,
},
registerButtonText:{
    fontWeight:"600",
    fontSize:14,
    lineHeight:17,
    color:"#ffffff",
    alignSelf:"center"
},
emailButton:{
    fontWeight:"600",
    fontSize:13,
    lineHeight:16,
    color:"#000",
    width:'53%',
    height:16,
    alignSelf:"center",
    marginTop:30,
},
resendButton:{
    backgroundColor:"#FEA01A",
    width:'50%',
    height:51,
    alignSelf:"center",
    borderRadius:27,
    justifyContent:"center",
    marginTop:30,
    marginBottom:30,
},
resendButtonText:{
    fontWeight:"700",
    fontSize:14,
    lineHeight:19,
    alignSelf:"center"
},
bottomHalfCircle:{
    alignSelf:"baseline",
    justifyContent:"flex-start",
    flexDirection:"column-reverse",
    marginTop:15
},
});

export default MainPage ;
