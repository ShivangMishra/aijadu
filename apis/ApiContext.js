import { createContext, useState } from "react";
import { BASE_URL } from "./config";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { async } from "validate.js";

export const ApiContext = createContext();
export const ApiProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiUserData, setApiUserData] = useState({});

  const login = async ({ data, setError, navigation, setModal }) => {
    setIsLoading(true);
    console.log(data);

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const body = {
      email: data.email === "" ? "eikompgmap@gmail.com" : data.email,
      password: data.password === "" ? "1235Aicansell$" : data.password,
    };

    const requestOptions = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
      redirect: "follow",
    };
    console.log("requestOptions", JSON.stringify(requestOptions));
    const response = await fetch(
      `https://aicansellapp.com/api/token/`,
      requestOptions
    );
    if (response.ok) {
      const responseJson = await response.json();
      console.log(responseJson);
      try {
        await AsyncStorage.multiSet([
          ["accessToken", responseJson.access],
          // ["firstTime", responseJson.profile.first_time ? "True" : "False"],
          ["email", data.email],
        ]);
        setApiUserData(responseJson.profile);
        console.log(
          "\n\n\nsucess saving token in async storage by login\n\n\n"
        );
        navigation.navigate("SignUpPage");
        // navigation.navigate("DashboardCompliance");
      } catch (e) {
        console.log("saving error token in login\n\n\n " + e);
        setError(e);
      }
      // navigation.navigate("DashboardCompliance");
      setIsLoading(false);
    } else {
      const responseJson = await response.json();
      console.log("Login respone not OK", JSON.stringify(responseJson));
      Alert.alert("Login Failed", responseJson.detail);
      setModal(true);
      setIsLoading(false);
    }
  };

  const forgotPassword = async ({ data }) => {
    setIsLoading(true);
    console.log(data);

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const body = {
      email: data.email === "" ? "eikompgmap@gmail.com" : data.email,
    };

    const requestOptions = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
      redirect: "follow",
    };
    console.log("requestOptions", JSON.stringify(requestOptions));
    const response = await fetch(
      `https://aicansellapp.com/accounts/forgot_password/`,
      requestOptions
    );
    if (response.ok) {
      const responseJson = await response.json();
      console.log(responseJson);
      Alert.alert("Please check your email for reset password");
      // navigation.navigate("DashboardCompliance");
      setIsLoading(false);
    } else {
      const responseJson = await response.json();
      console.log(
        "forgot password response not OK",
        JSON.stringify(responseJson)
      );
      Alert.alert("An error occurred", responseJson.detail);
      setModal(true);
      setIsLoading(false);
    }
  };

  const resetPassword = async ({ data, setError, navigation, setModal }) => {
    setIsLoading(true);
    console.log(data);

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const body = {
      password: data.password === "" ? "1235Aicansell$" : data.password,
      confirmPassword: data.confirmPassword === "" ? "1235Aicansell$" : data.confirmPassword,
    };

    const requestOptions = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
      redirect: "follow",
    };
    console.log("requestOptions", JSON.stringify(requestOptions));
    const response = await fetch(
      `https://aicansellapp.com/accounts/reset_password/`,
      requestOptions
    );
    console.log("reset password response", response);

    // if (response.ok) {
    //   const responseJson = await response.json();
    //   console.log(responseJson);
    //   Alert.alert("Please check your email for reset password");
    //   // navigation.navigate("DashboardCompliance");
    //   setIsLoading(false);
    // } else {
    //   const responseJson = await response.json();
    //   console.log(
    //     "forgot password response not OK",
    //     JSON.stringify(responseJson)
    //   );
    //   Alert.alert("An error occurred", responseJson.detail);
    //   setModal(true);
    //   setIsLoading(false);
    // }
  }

  const register = async ({ data, setError, navigation, setModal }) => {
    setIsLoading(true);
    console.log(data);

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const body = {
      first_name: data.firstName === "" ? "ari1" : data.firstName,
      last_name: data.lastName === "" ? "se1" : data.lastName,
      username: data.username === "" ? "ase11" : data.username,
      email: data.email === "" ? "a1r@gmail.com" : data.email,
      password: data.password === "" ? "1235Aicansell$" : data.password,
    };

    const requestOptions = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
      redirect: "follow",
    };
    console.log("requestOptions", JSON.stringify(requestOptions));
    const response = await fetch(
      `https://aicansellapp.com/accounts/register/`,
      requestOptions
    );
  }

  const verifyEmail = async ({ data, setError, navigation, setModal }) => {
    setIsLoading(true);
    console.log(data);

    const requestOptions = {
      method: "POST",
      redirect: "follow",
    };
    console.log("requestOptions", JSON.stringify(requestOptions));
    const response = await fetch(
      `https://aicansellapp.com/api/send-confirmation-email/`,
      requestOptions
    );
    
  }
  return (
    <ApiContext.Provider
      value={{
        login,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
