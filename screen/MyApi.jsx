import { View, Text, StyleSheet, Button, Modal, TextInput } from "react-native";
import React, { useEffect, useState } from "react";

const MyApi = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(undefined);

  const yourApi = async () => {
    const url = "http://192.168.3.125:3000/users";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
    // if(result){
    //   console.warn("user deleted")
    // }
  };

  const userDeleted = async (id) => {
    const url = "http://192.168.3.125:3000/users";
    let result = await fetch(`${url}/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      console.warn("User Deleted");
      yourApi();
    }
  };

  const updateUser = (data) => {
    setShowModal(true);
    setSelectedUser(data);
  };

  useEffect(() => {
    yourApi();
  }, []);

  return (
    <View style={styles.mainContainer}>
      {data.length
        ? data.map((item) => (
            <View style={styles.formContainer}>
              <Text style={{ alignSelf: "center" }}>{item.name}</Text>
              <Text style={{ alignSelf: "center" }}>{item.age}</Text>
              <Text style={{ alignSelf: "center" }}>{item.id}</Text>
              <Button
                onPress={() => userDeleted(item.id)}
                style={{ alignSelf: "center" }}
                title="Delete"
              />
              <Button
                onPress={() => {
                  updateUser(item);
                }}
                style={{ alignSelf: "center" }}
                title="Update"
              />
            </View>
          ))
        : null}
      <Modal visible={showModal} transparent={true}>
        <UserModal
          setShowModal={setShowModal}
          selectedUser={selectedUser}
          yourApi={yourApi}
        />
      </Modal>
    </View>
  );
};

const UserModal = (props) => {
  const [name, setName] = useState(undefined);
  const [age, setAge] = useState(undefined);
  const [email, setEmail] = useState(undefined);

  useEffect(() => {
    if (props.selectedUser) {
      setName(props.selectedUser.name);
      setAge(props.selectedUser.age.toString());
      setEmail(props.selectedUser.email);
    }
  }, []);

  const SaveInfo = async () => {
    console.warn(name, age, email, props.selectedUser.id);
    const url = "http://192.168.3.125:3000/users";
    const id = props.selectedUser.id;

    let result = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age, email }),
    });
    result = await result.json();
    if (result) {
      console.warn("User Updated");
      props.yourApi();
      props.setShowModal(false);
    }
    // }
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        flex: 1,
        width: 200,
        height: 300,
      }}
    >
      <View
        style={{
          backgroundColor: "#FFF",
          height: 200,
          width: 200,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 20,
          shadowColor: "#000",
          shadowOpacity: 0.7,
          elevation: 10,
        }}
      >
        <TextInput
          placeholder="  name"
          style={styles.textInput}
          value={name}
          onChangeText={(Text) => setName(Text)}
        />
        <TextInput
          placeholder="  age"
          style={styles.textInput}
          value={age}
          onChangeText={(Text) => setAge(Text)}
        />
        <TextInput
          placeholder="  email"
          style={styles.textInput}
          value={email}
          onChangeText={(Text) => setEmail(Text)}
        />
        <Button
          style={{ marginBottom: 15 }}
          onPress={() => props.setShowModal(false)}
          title="Close"
        />
        <View style={{ marginTop: 5 }}>
          <Button onPress={SaveInfo} title="Update" />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#6495ed",
  },

  formContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  textInput: {
    width: 200,
    borderWidth: 2,
    margin: 5,
    borderRadius: 20,
    borderColor: "blue",
  },
});

export default MyApi;
