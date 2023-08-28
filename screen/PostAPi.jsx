import { View, Text } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { Button } from "react-native";

const PostAPi = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const SaveData = async () => {
    console.warn(name);
    console.warn(age);
    console.warn(email);

    const url="http://192.168.29.187:3000/users";
    let result= await fetch(url, {
        method:"POST",
        headers:{
            "ContentType":"Application/Json"
        },
        body:JSON.stringify(name,email,age)
    })

    result= await result.json();
    if(result){
        console.warn("Data Saved")
    }
    
  };

  return (
    <View>
      <TextInput
        onChangeText={(Text) => {
          setName(Text);
        }}
        style={styles.textForm}
        placeholder="  Name"
      />

      <TextInput
        onChangeText={(Text) => {
          setEmail(Text);
        }}
        style={styles.textForm}
        placeholder="  Email"
      />

      <TextInput
        onChangeText={(Text) => {
          setAge(Text);
        }}
        style={styles.textForm}
        placeholder="  Age"
      />

      <Button style={styles.Buttons} onPress={SaveData} title="Save Data" />
    </View>
  );
};

const styles = StyleSheet.create({
  textForm: {
    width: 300,
    borderWidth: 1,
    fontSize: 15,
    fontWeight: "800",
    alignSelf: "center",
    margin: 20,
    height: 40,
  },
  Buttons: {
    width: 300,
  },
});

export default PostAPi;
