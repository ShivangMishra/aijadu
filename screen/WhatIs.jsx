import { Image, StyleSheet, View, Text } from "react-native";
import { blue, gray, orange, purple, white } from "../colors";
import { blueBubble, bottomBubble, topBubble, whatIsImg1 } from "../assets";

export default function WhatIs() {
    const renderBox1 = () => {
        return (
            <View style={styles.box1Container}>
                <View style={styles.box1TopContainer}>
                    <Image
                    source={whatIsImg1}/>
                    <View style={styles.box1TopTextContainer}>
                        <Text style={{fontSize: 20, fontWeight: "700"}}>WHAT IS AICANSELL</Text>
                        <Text style={{fontSize: 12, color: purple}}>Respond to tough situations</Text>
                        <Text style={{fontSize: 12, color: orange}}>Check Your Skills-on-the-go</Text>
                    </View>
                </View>
                <Text style={styles.box1BottomText}>
                {"COMPARE YOURSELF ON SKILLS THAT\nEMPLOYERS FIND CRITICAL, TO HIRE OR PROMOTE"}
                </Text>
            </View>
        )
    };
    const renderBox2 = () => {

    };
    const renderBox3 = () => {

    };
    return (
        <View style={styles.container}>

            {renderBox1()}
            {renderBox2()}
            {renderBox3()}
            <Image source={topBubble} style={styles.topBubble} />
      <Image source={blueBubble} style={styles.blueBubble} />
      <Image source={bottomBubble} style={styles.bottomBubble} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: gray,
        alignItems: "center",
    },

    topBubble: {
        zIndex: -1,
        position: "absolute",
        top: -40,
        // left: "48%",
        right: 0,
        // width: 220,
        // height: "10%",
        // backgroundColor: 'red'
      },
      blueBubble: {
        position: "absolute",
        left: 0,
        top: "10%",
        zIndex: -1,
      },
      bottomBubble: {
        position: "absolute",
        left: 0,
        bottom: 0,
      },

      box1Container: {
        elevation: 5,
        backgroundColor: white,
        margin: 10,
        padding: 10,
        width: 380,
        height: 212,
        borderRadius: 15,
        alignItems: "center",
      },

      box1TopContainer: {
        flexDirection: "row",
        // justifyContent: "space-between",
      },

      box1Image: {
        width: 97,
        height: 97,
        borderRadius: 12,
        alignSelf: "flex-start",
        
      },
      box1TopTextContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 0.75,
        backgroundColor: "red",
        marginLeft: 10,
      },
      box1BottomText: {
        fontSize: 14,
        fontWeight: "700",
        color: blue,
        textAlign: "center",
        marginTop: 10,
        width: 260,
        // backgroundColor: "red"
      }
});