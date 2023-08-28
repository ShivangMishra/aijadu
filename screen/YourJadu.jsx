import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { FlatList } from "react-native";

const YourJadu = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [currentValue, setCurrentValue] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const items1 = [
    { id: '1', name: 'Value Selling' },
    { id: '2', name: 'Managing Our Manager' },
    { id: '3', name: 'Personal Branding' },
    { id: '4', name: 'Influence' },
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
    <ScrollView>
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
        <View style={styles.container2}>
          <View style={styles.submitFormContainer}>
            <Text style={styles.submitFormContainerOrangeText}>
              Angry Customer
            </Text>
            <Text style={styles.submitFormContainerBlueText}>
              Demanding Boss
            </Text>
            <Text style={styles.submitFormContainerOrangeText1}>
              Father of rich{`\n`}
              girl-friend
            </Text>
          </View>
          <Text style={styles.submitFormContainerBlueTextHeading}>
            How would you respond to this situation. (Max 30 words)
          </Text>
          <View style={styles.submitFormContainerForm}>
            <Image
              style={{ margin: 10 }}
              source={require("../assets/AIJadu/yourJadu/Hr.png")}
            />
            <View>
              <TextInput
                style={styles.inputTextContainer}
                placeholder="  I need this by yesterday! I don't care if 
            you have to work till late night"
              />

              <TextInput
                style={styles.inputTextContainer1}
                placeholder="  Type Your Response Here "
              />
              <TouchableOpacity
                style={{
                  fontWeight: "800",
                  fontSize: 8,
                  lineHeight: 10,
                  borderWidth: 1,
                  borderColor: "#360DFF",
                  alignSelf: "center",
                  borderRadius: 4,
                  width: 65,
                  height: 18,
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 5,
                }}
              >
                <Text style={{ fontWeight: "800", fontSize: 8, lineHeight: 9 }}>
                  Submit
                </Text>
              </TouchableOpacity>
              <View
                style={{ flexDirection: "row", justifyContent: "space-around" }}
              >
                <Image
                  source={require("../assets/AIJadu/yourJadu/Group.png")}
                />

                <Image
                  source={require("../assets/AIJadu/yourJadu/images09.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.container3}>
          <Text style={styles.yourJaduTextBlue1}>JADU Quiz for Today</Text>
          <View style={styles.bottomDownPicker}>
            <DropDownPicker
              items={items}
              open={isOpen}
              setOpen={() => setIsOpen(true)}
              value={currentValue}
              setValue={(val) => setCurrentValue(val)}
              maxHeight={200}
              autoScroll
              placeholder="  Personal Sales Excellence is"
              showTickIcon={true}
              showArrowIcon={true}
              closeAfterSelect={false}
              dropDownDirection="Bottom"
              //   disableBorderRadius={false}
              theme="LIGHT"
              style={styles.bottomDownPicker}
              dropDownContainerStyle={{
                width: 380,
                // marginLeft: 20,
                borderRadius: 13,
                backgroundColor: "#E4E4E4",
                height: 160,
              }}
              //
              placeholderStyle={{
                fontSize: 16,

                backgroundColor: "#E4E4E4",
              }}
              textStyle={{
                // Styling the text inside the dropdown
                fontSize: 16, // Font size
                color: "#000000",
                backgroundColor: "#fff",
                fontWeight: "700",
                fontSize: 12,
                lineHeight: 15,
                height: 29,
                // textAlign:"center",
                textAlignVertical: "center",
                // borderWidth:1
              }}
            />
          </View>
          <Text style={styles.selectedValueText}>
            Correct Response: {currentValue}
          </Text>
        </View>
      </View>
      <View>
      
        <View style={styles.container4}>
        <Text
            style={{
              fontWeight: "800",
              fontSize: 13,
              lineHeight: 15,
              color: "blue",
              alignSelf: "center",
            //   backgroundColor: "#E4E4E4",
              margin:4,
            }}
          >
            AI IntelliSearch - Learn in 3 min
          </Text>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 10,
              lineHeight: 12,
            //   color: "blue",
              alignSelf: "center",
            //   backgroundColor: "#E4E4E4",
              margin:4,

            }}
          >
            Personal Branding, Sales Intelligence and lots more
          </Text>
          <View style={styles.searchContainer}>
          <TextInput
        style={styles.input}
        placeholder="Search items..."
        onChangeText={(text) => {
          setSearchQuery(text);
          filterItems(text);
        }}
        value={searchQuery}
      />
    <FlatList
  data={filteredItems.length > 0 ? filteredItems : items1}
  keyExtractor={(item) => item.id} // Change to `item.id`
  renderItem={({ item }) => ( // Change to `item`
    <View style={styles.item1}>
      <Text>{item.name}</Text>
    </View>
  )}
/>
          </View>
          <Image
        style={{marginTop:-30,alignSelf:"flex-start"}}
         source={require("../assets/AIJadu/Login/bottomHalfCircle.png")} />
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
    paddingVertical: 20,
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
    marginTop: 20,
  },
  titleTextContainer: {
    flexDirection: "row",
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
    margin: 30,
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
    width: 126,
    height: 38,
    fontWeight: "700",
    fontSize: 10,
    backgroundColor: "#FEA01A",
    borderTopLeftRadius: 12,
    // justifyContent:"center",
    // alignItems:"center",
    // alignSelf:"center",
    textAlign: "center",
    textAlignVertical: "center",
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
    width: 203,
    height: 74,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#360DFF",
    fontWeight: "400",
    fontSize: 10,
    lineHeight: 12,
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
    alignItems:"center",
    justifyContent:"center",
    zIndex:1,
  },
  searchContainer:{
    width:360,
    height:230,
    backgroundColor:"#E4DFDF",
    alignSelf:"center",
    borderWidth:1,
    borderRadius:13,

  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
    borderRadius: 8,
  },
  item1: {
    padding: 5,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
});

export default YourJadu;
