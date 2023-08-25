import { View, Text } from "react-native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

const AnotherPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState([]);
  const items = [
    { label: "Pyhon", value: "Python" },
    { label: "C++", value: "C++" },
    { label: "JAVA", value: "JAVA" },
    { label: "RUBY", value: "RUBY" },
    { label: "React Native", value: "React Native" },
    { label: "Android Dev", value: "Android Dev" },
    { label: "JavaSCript", value: "JavaSCript" },
  ];

  return (
    <View style={{ padding: 30 }}>
      <DropDownPicker
        items={items}
        open={isOpen}
        setOpen={() => setIsOpen(!isOpen)}
        value={currentValue}
        setValue={(val)=>setCurrentValue(val)}
        maxHeight={200}
        autoScroll
        placeholder="Select Your Favorite Language"
        placeholderStyle={{fontWeight:"900",color:"#FEA01A", fontSize:20, lineHeight:30}}
        showTickIcon={true}
        showArrowIcon={true}
        dropDownDirection="Bottom"
        disableBorderRadius={false}
        theme="LIGHT"

        multiple={true}
        min={1}
        max={4}
        mode="BADGE"
        badgeColors={["red","green", "blue", "pink" ]}
        badgeDotColors={["white"]}
        badgeTextStyle={{color:"white"}}
      />
    </View>
  );
};

export default AnotherPage;
