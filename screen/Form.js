import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Formik, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Please Enter Your Full Name"),

  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8)
    .required("Enter Full Password")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "Password must be at least 8 characters and contain at least one letter and one number."
    ),
  confirmPassword: Yup.string()
    .min(8, "confirm password must be 8 character long")
    .oneOf([Yup.ref("password")], "Your password do not match.")
    .required("Confirm Password is required "),

  mobile: Yup.string()
    .min(10, "Must be 10 digits number")
    .max(10, "Must be 10 digits number")
    .required("Enter Full Password")
    .matches(/^[0-9+$]/, "Must be only Digits")
    .required("Please Enter Your mobile number"),
});

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    console.log("Name :", name);
    console.log("Email :", email);
    console.log("Password :", password);
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        email: "",
        password: "",
        confirmPassword: "",
        mobile: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={values=>Alert.alert(JSON.stringify(values))}
    >
      {({
        values,
        errors,
        touched,
        handleSubmit,
        setFieldTouched,
        isValid,
        handleChange,
      }) => (
        <View style={styles.mainContainer}>
          <Text
            style={{
              marginTop: 100,
              fontSize: 40,
              fontWeight: "700",
              marginBottom: 20,
            }}
          >
            Simple Form
          </Text>

          <TextInput
            value={values.name}
            onChangeText={handleChange("name")}
            style={styles.textInput}
            placeholder="  Inter Your Name"
            onBlur={() => setFieldTouched("name")}
          />
          {touched.name && errors.name && <Text style={styles.warning}>{errors.name}</Text>}
          <TextInput
            value={values.email}
            onChangeText={handleChange("email")}
            style={styles.textInput}
            placeholder="  Email"
            onBlur={() => setFieldTouched("email")}
          />
          {touched.email && errors.email && <Text style={styles.warning}>{errors.email}</Text>}

          <TextInput
            value={values.password}
            onChangeText={handleChange("password")}
            secureTextEntry={true}
            style={styles.textInput}
            placeholder="  Set Password"
            onBlur={() => setFieldTouched("password")}
          />
          {touched.password && errors.password && (
            <Text style>{errors.password}</Text>
          )}
          <TextInput
            value={values.confirmPassword}
            onChangeText={handleChange("confirmPassword")}
            style={styles.textInput}
            placeholder=" Confirm Password "
            onBlur={() => setFieldTouched("confirmPassword")}
            secureTextEntry={true}
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <Text style={styles.warning}>{errors.confirmPassword}</Text>
          )}
          <TextInput
            style={styles.textInput}
            placeholder=" Mobile Number "
            value={values.mobile}
            onChangeText={handleChange("mobile")}
            onBlur={() => setFieldTouched("mobile")}
            keyboardType="phone-pad"
          />
          {touched.mobile && errors.mobile && (
            <Text style={styles.warning}>{errors.mobile}</Text>
          )}

          <TouchableOpacity
            onPress={handleSubmit}
            disabled={!isValid}
            style={{
              width: 200,
              height: 50,
              backgroundColor: isValid ? "#a9a9a9" : "#696969",
              borderRadius: 15,
              marginTop: 10,
              justifyContent: "center",
            }}
          >
            <Text
              style={{ alignSelf: "center", color: "#fff", fontWeight: "700" }}
            >
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#d3d3d3",
    // justifyContent:"center",
    alignItems: "center",
    // justifyContent:"space-around"
  },
  textInput: {
    width: 300,
    height: 60,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 15,
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    fontWeight: "500",
  },
  warning:{
    color:"red",
    // alignSelf:"flex-start",
    marginRight:200,
  }
});

export default Form;
