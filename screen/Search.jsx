import { View, Text, TextInput, } from "react-native";
import React, { useState } from "react";

const Search = () => {
    const [searchText, setSearchText] = useState("");
    const [data, setData] = useState([]);


    const textChanged = async(text)=>{
        setSearchText(text);
        console.warn(text)
        const url = `http://192.168.3.125:3000/users?q=${text}`
        let result= await fetch(url);
        result= await result.json();
        if (result ){
            setData(result)
        }

       
    }
    
  return (
    <View>
      <TextInput
      value={searchText}
       onChangeText={(text) => {
          textChanged(text); 
        }}
        style={{
          width: 300,
          height: 40,
          borderWidth: 1,
          borderRadius: 15,
          alignSelf: "center",
          margin: 10,
        }}
        placeholder=" Search"
      />
      {
        data.length ?
        data.map((item)=><View style={{flexDirection:"row",justifyContent:"space-between",padding:10}} >
        <Text>{item.name }</Text>
        <Text>{item.age }</Text>
        <Text>{item.email }</Text>

        </View>)
        :null
      }
    </View>
  );
};

export default Search;
