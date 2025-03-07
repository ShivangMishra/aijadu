import { Image, Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import { purple, white } from "../colors";
import { Text } from "react-native";
import CustomButton from "./CustomButton";
import { errorIcon } from "../assets";

export default function ErrorModal(props) {
    const { visible, toggleModal, message, containerStyle } = props;
  return (
    <Modal
      animationType="slide" // You can customize the animation type
      transparent={true} // This makes the modal transparent
      visible={visible} // Pass the state variable to control visibility
      onRequestClose={toggleModal} // Handle modal closing via back button on Android
    >
      <View style={[styles.container, containerStyle]}>
        <Image
          style={styles.image}
          source={errorIcon}
        />
        <Text style={styles.text}>{message || "Something went wrong"}</Text>
        <CustomButton onPress={toggleModal} text="Okay" buttonStyle={{paddingHorizontal: 40, height: 50, width: "auto"}}/>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        position: "absolute",
        top: "40%",
        backgroundColor: purple,
        width: "90%",
        height: 250,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    },
    text: {
        color: white,
        marginVertical: 20,
    }, 
    image: {
      width: 118,
      height: 118,
    }
});