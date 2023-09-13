import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { gray, white } from "../colors";
import { backArrow, blueBubble, bottomBubble, smallLogo, topBubble } from "../assets";
import CustomHeader from "../components/CustomHeader";

export default function EmailVerification({navigation}) {

    const renderHeader = () => {
        return (
          <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.backArrow} onPress={navigation.goBack}>
              <Image source={backArrow} />
            </TouchableOpacity>
            <View style={styles.header}>
              <Image source={smallLogo } />
            </View>
          </View>
        );
      };

    //   const renderMidText = () => {
    //     return (
    //         // <View style={}></View>
    //     );
    //   }

  return (
    <View style={styles.container}>
    {renderHeader()}
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
    // paddingHorizontal: "2.8%",
    // paddingBottom: "5%",
  },
  topBubble: {
    position: "absolute",
    top: -40,
    // left: "48%",
    alignSelf: "flex-end",
    // width: 220,
    // height: "10%",
    // backgroundColor: 'red'
  },
  blueBubble: {
    position: "absolute",
    left: 0,
    top: "10%",
  },
  bottomBubble: {
    position: "absolute",
    left: 0,
    top: "93%",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    // backgroundColor: "red",
    marginTop: "10%",
    marginBottom: "-18%",
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

  backArrow: {
    position: "relative",
    left: -40,
    top: "2%",
  },
});
