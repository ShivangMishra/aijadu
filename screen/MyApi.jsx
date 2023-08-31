import { View, Text, StyleSheet, Button } from "react-native";
import React, { useEffect, useState } from "react";

const MyApi = () => {
  const [data, setData] = useState([]);

  const yourApi = async () => {
    const url = "http://192.168.3.125:3000/users";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
    if(result){
      console.warn("user deleted")
    }
  };

  const userDeleted= async(id)=>{
    const url = "http://192.168.3.125:3000/users";
    let result = await fetch(`${url}/${id}`,{
      method:"Delete",
      
    });
    result  =await result.json();
    if(result){
      console.warn('User Deleted')
      yourApi()
    }
  }

  useEffect(() => {
    yourApi();
  }, []);

  return (
    <View style={styles.mainContainer} >
      {data.length
        ? data.map((item) => (
            <View style={styles.formContainer} >
              <Text style={{alignSelf:"center"}} >{item.name}</Text>
              <Text style={{alignSelf:"center"}} >{item.age}</Text>
              <Text style={{alignSelf:"center"}} >{item.id}</Text>
              <Button onPress={()=>userDeleted(item.id)}  style={{alignSelf:"center"}} title="Delete" />
              <Button style={{alignSelf:"center"}} title="Update" />
            </View>
          ))
        : null}
    </View>
  );
};
const styles=StyleSheet.create({

  mainContainer:{

    flex:1,
    backgroundColor:"#6495ed"

  },

  formContainer:{
    flexDirection:"row",
    justifyContent:"space-evenly",
  },

})

export default MyApi;
