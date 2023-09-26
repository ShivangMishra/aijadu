import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { gray, orange, purple, white } from "../colors";
import {
  backArrow,
  blueBubble,
  bottomBubble,
  itemImg,
  phones,
  smallLogo,
  topBubble,
} from "../assets";
import CustomButton from "../components/CustomButton";

export default function ImproveIn({ navigation }) {
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

  const data = [
    {},
    {
      img: itemImg,
      title: "SPONSORED JOB INTERVIEWS",
      description: "For cadilla Medical Representatives",
    },
    {
      img: itemImg,
      title: "SPONSORED JOB INTERVIEWS",
      description: "For cadilla Medical Representatives",
    },
    {
      img: itemImg,
      title: "SPONSORED JOB INTERVIEWS",
      description: "For cadilla Medical Representatives",
    },
    {
      img: itemImg,
      title: "SPONSORED JOB INTERVIEWS",
      description: "For cadilla Medical Representatives",
    },
    {
      img: itemImg,
      title: "SPONSORED JOB INTERVIEWS",
      description: "For cadilla Medical Representatives",
    },
  ];
  
  const renderTopImage = () => {
    return (
      <View style={styles.topContainer}>
        <Image style={styles.topImage} source={phones} />
        <View style={styles.imageTextContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              padding: 0,
              alignItems: "center",
            }}
          >
            <Text style={{ color: orange, fontSize: 20, fontWeight: "700" }}>
              DO
            </Text>
            <Text style={{ color: purple, fontSize: 20, fontWeight: "700" }}>
              &nbsp; JADU
            </Text>
          </View>
          <Text style={[styles.imageText, { fontSize: 15 }]}>
            CHALLENGES THAT UP YOUR SKILLS
          </Text>
          <Text style={[styles.imageText, { fontSize: 13, fontWeight: "600" }]}>
            Take these challenges& win prizes every week (Top 3 responses)
          </Text>
        </View>
      </View>
    );
  };
  const renderItem = ({ item }) => {
    if(Object.keys(item).length === 0) {
      return renderTopImage();
    }
    return (
      <View style={styles.entry}>
        <Image source={item.img} />
        <View style={styles.textView}>
          <CustomButton
            text={item.title}
            buttonStyle={{
              height: 35,
            }}
            textStyle={{ fontSize: 10, fontWeight: "700" }}
            arrow={true}
          />
          <Text
            style={{
              fontSize: 12,
              color: orange,
              fontWeight: "600",
              marginTop: 15,
            }}
          >
            {item.description}
          </Text>
        </View>
      </View>
    );
  };

  const renderItems = () => {
    return <FlatList data={data} renderItem={renderItem} />;
  };

  return (
    <View style={styles.container}>
      <View style={{zIndex: 4, width: "100%", }}>
      {renderHeader()}
      {/* {renderTopImage()} */}
      {renderItems()}
      </View>
      <Image source={topBubble} style={styles.topBubble} />
      <Image source={blueBubble} style={styles.blueBubble} />
      <Image source={bottomBubble} style={styles.bottomBubble} />
      <View style={styles.bottomContainer}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: gray,
    alignItems: "center",
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
    zIndex: 2,
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
  topContainer: {
    // width: "95%",
    height: 270,
    marginHorizontal: 15,
    backgroundColor: white,
    marginTop: "25%",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  topImage: {
    width: 319,
    height: 153,
  },
  imageTextContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1%",
  },
  imageText: {
    fontWeight: "700",
    fontSize: 20,
    color: "#FFB600",
    textAlign: "center",
    width: 290,
  },
  entry: {
    height: 135,
    marginHorizontal: 15,
    // width: "100%",
    flexDirection: "row",
    backgroundColor: white,
    marginTop: 20,
    borderRadius: 24,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  textView: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  bottomContainer: {
    backgroundColor: purple,
    width: "100%",
    borderTopRightRadius: 79,
    borderTopLeftRadius: 79,
    height: "30%",
    position: "absolute",
    bottom: 0,
    // zIndex: 1,
  }
});
