import { createContext, useEffect, useState } from "react";
import { BASE_URL } from "./config";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { async } from "validate.js";

export const ApiContext = createContext();
export const ApiProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiUserData, setApiUserData] = useState({});

  const getToken = async ({navigation}) => {
    const token = await AsyncStorage.getItem("accessToken");
    if (!token) {
      console.log("no token");
      navigation.navigate("Login2");
      return null;
    } else {
      console.log("token", token);
      const isVerified = await checkVerified();
        console.log("isVerified", isVerified);
        if (!isVerified) {
          // Alert.alert("Please verify your email");
          navigation.navigate("MainPage");
        } else {
          navigation.navigate("SwiperComponent");
        }
      return token;
    }
  };

  const login = async ({ data, setError, navigation, setModal }) => {
    setIsLoading(true);
    console.log(data);

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const body = {
      email: data.email === "" ? "aicansell7@gmail.com" : data.email,
      password: data.password === "" ? "1234Aicansell$" : data.password,
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

        const isVerified = await checkVerified();
        console.log("isVerified", isVerified);
        if (!isVerified) {
          // Alert.alert("Please verify your email");
          navigation.navigate("MainPage");
        } else {
          navigation.navigate("SwiperComponent");
        }
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
      // Alert.alert("Login Failed", responseJson.detail);
      setError(responseJson.detail);
      setModal(true);
      setIsLoading(false);
    }
  };

  const checkVerified = async () => {
    setIsLoading(true);

    const headers = new Headers();
    const token = await AsyncStorage.getItem("accessToken");
    console.log("token", token);
    headers.append("Authorization", "Bearer " + token);

    const requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: headers,
    };
    console.log("requestOptions", JSON.stringify(requestOptions));
    const response = await fetch(
      `https://aicansellapp.com/accounts/api/me/`,
      requestOptions
    );
    if (response.ok) {
      const responseJson = await response.json();
      console.log(responseJson);
      setIsLoading(false);
      return responseJson.is_email_confirmed;
    } else {
      const responseJson = await response.json();
      console.log(
        "check verified response not OK",
        JSON.stringify(responseJson)
      );
      // Alert.alert("An error occurred", responseJson.detail);
      Alert.alert("Session Expired", "Please login again");
      navigation.navigate("Login2");
      setIsLoading(false);
    }
  };

  const forgotPassword = async ({ data, setModal, setError }) => {
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
      // Alert.alert("Please check your email for reset password");
      // navigation.navigate("DashboardCompliance");
      setError("Email Is Sent");
      console.log("Email is sent");
      setIsLoading(false);
    } else {
      const responseJson = await response.json();
      console.log(
        "forgot password response not OK",
        JSON.stringify(responseJson)
      );
      // Alert.alert("An error occurred", responseJson.detail);
      setError(response.detail);
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
      confirmPassword:
        data.confirmPassword === "" ? "1235Aicansell$" : data.confirmPassword,
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
  };

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
    if (response.ok) {
      const responseJson = await response.json();
      console.log(responseJson);
      Alert.alert("Account created successfully. Proceed to login");
      navigation.navigate("Login2");
      // navigation.navigate("DashboardCompliance");
      setIsLoading(false);
    }
  };

  const verifyEmail = async () => {
    setIsLoading(true);

    const headers = new Headers();
    const token = await AsyncStorage.getItem("accessToken");
    console.log("token", token);
    headers.append("Authorization", "Bearer " + token);
    const requestOptions = {
      method: "POST",  
      headers: headers,
    };
    console.log("requestOptions", JSON.stringify(requestOptions));
    const response = await fetch(
      "https://aicansellapp.com/accounts/api/send-confirmation-email/",
      requestOptions
    );
    if (response.detail && response.detail.includes("token not valid")) {
      Alert.alert("Session Expired", "Please login again");
      navigation.navigate("Login2");
      setIsLoading(false);
      return;
    }
    return response.status === 201;
  };

  const fetchQuizList = async ({ setQuizListData }) => {
    const testRes = [
      {
        id: 4,
        item_name: "where does the sun rose",
        option1: "east",
        option2: "west",
        option3: "south",
        QuizAnswer_CHOICES: [
          ["Opt1", "Option 1"],
          ["Opt2", "Option 2"],
          ["Opt3", "Option 3"],
        ],
      },
      {
        id: 3,
        item_name: "how old is univeerse",
        option1: "east",
        option2: "west",
        option3: "south",
        QuizAnswer_CHOICES: [
          ["Opt1", "Option 1"],
          ["Opt2", "Option 2"],
          ["Opt3", "Option 3"],
        ],
      },
      {
        id: 2,
        item_name: "where did chandrayan 3 land",
        option1: "east",
        option2: "south",
        option3: "west",
        QuizAnswer_CHOICES: [
          ["Opt1", "Option 1"],
          ["Opt2", "Option 2"],
          ["Opt3", "Option 3"],
        ],
      },
      {
        id: 1,
        item_name: "where did the spaceship land",
        option1: "east",
        option2: "west",
        option3: "south",
        QuizAnswer_CHOICES: [
          ["Opt1", "Option 1"],
          ["Opt2", "Option 2"],
          ["Opt3", "Option 3"],
        ],
      },
    ];
    setIsLoading(true);

    const headers = new Headers();
    const token = await AsyncStorage.getItem("accessToken");
    console.log("token", token);
    headers.append("Authorization", "Bearer " + token);
    const requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: headers,
    };
    console.log("requestOptions", JSON.stringify(requestOptions));
    const response = await fetch(
      `https://aicansellapp.com/quiz/quiz_list/`,
      requestOptions
    );
    // console.log("quiz list response", response);
    if (response.ok) {
      const responseJson = await response.json();
      console.log(JSON.stringify(responseJson));
      setIsLoading(false);
      setQuizListData(responseJson);
    } else {
      console.log("quiz list response not OK", response);
    }
  };

  const fetchQuizResult = async ({ questionId, setQuizResult }) => {
    setIsLoading(true);

    const headers = new Headers();
    const token = await AsyncStorage.getItem("accessToken");
    console.log("token", token);
    headers.append("Authorization", "Bearer " + token);

    const requestOptions = {
      method: "PUT",
      redirect: "follow",
      body: JSON.stringify({ id: questionId }),
      headers: headers,
    };
    // console.log("url", url);
    console.log("requestOptions", JSON.stringify(requestOptions));
    const response = await fetch(
      "https://aicansellapp.com/quiz/api/quiz_results/" + questionId,
      requestOptions
    );
    // console.log("quiz list response", response);
    if (response.ok) {
      const responseJson = await response.json();
      console.log(JSON.stringify(responseJson));
      setQuizResult(responseJson);
      setIsLoading(false);
    } else {
      const responseJson = await response.json();
      console.log("quiz result not OK", responseJson);
    }
  };

  const fetchSituations = async ({ setSituations, setEmailSituations }) => {
    setIsLoading(true);

    const token = await AsyncStorage.getItem("accessToken");
    console.log("token", token);

    const requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    // console.log("url", url);
    console.log("requestOptions", JSON.stringify(requestOptions));
    const response = await fetch(
      new URL("https://aicansellapp.com/sean/itemli"),
      requestOptions
    );
    // console.log("quiz list response", response);
    if (response.ok) {
      const responseJson = await response.json();
      console.log(JSON.stringify(responseJson));
      const emailSituations = [];
      const situations = [];
      responseJson.forEach((item) => {
        if (item.item_type.toLowerCase() === "email") {
          emailSituations.push(item);
        } else {
          situations.push(item);
        }
      });
      console.log("EMAIL SITUATIONS", emailSituations);
      setSituations(situations);
      setEmailSituations(situations);
      setEmailSituations(emailSituations);
      setIsLoading(false);
    } else {
      const responseJson = await response.json();
      if(responseJson.detail && responseJson.detail.includes("token not valid")){
        Alert.alert("Session Expired", "Please login again");
        navigation.navigate("Login2");
        setIsLoading(false);
        return
      }
      console.log("situations not OK", responseJson);
    }
  };
  const submitSituationResponse = async ({
    situationResponse,
    situationId,
    navigation,
  }) => {
    setIsLoading(true);

    const headers = new Headers();
    const token = await AsyncStorage.getItem("accessToken");
    console.log("token", token);
    headers.append("Authorization", "Bearer " + token);
    headers.append("Cookie", "csrftoken=dEcHVmmrtrjQM7qPnrS3hpHPJmFx6toS");

    const requestOptions = {
      method: "PUT",
      redirect: "follow",
      body: JSON.stringify({ item_answer: situationResponse }),
      headers: headers,
    };
    // console.log("url", url);
    console.log("requestOptions", JSON.stringify(requestOptions));
    const response = await fetch(
      "https://aicansellapp.com/sean/api/item_results/" + situationId,
      requestOptions
    );
    let analysisData = {};

    if (response.ok) {
      const responseJson = await response.json();
      analysisData = responseJson;
      console.log("Analysis response - ", JSON.stringify(responseJson));


      analysisData = {
        analysis: analysisData.data,
        emotions: analysisData["coming across as"],
        recommends: analysisData.data,
      };
      console.log("analysis data", JSON.stringify(responseJson));
       // navigation.navigate("Analysis", {analysisData: responseJson});
      // setIsLoading(false);
    } else {
      let responseJson = await response.json();
      if(responseJson.detail && responseJson.detail.includes("token not valid")){
        Alert.alert("Session Expired", "Please login again");
        navigation.navigate("Login2");
        setIsLoading(false);
        return
      }

      Alert.alert("An error occurred", "Something went wrong");
      responseJson = await response.text();
      console.log("situations response put not OK", responseJson);
      return;
    }

    // recommends
    const requestOptions2 = {
      method: "GET",
      redirect: "follow",
      headers: headers,
      // body: JSON.stringify({ item_answer: situationResponse }),
    };
    const response2 = await fetch(
      "https://aicansellapp.com/sean/api/item_rec/" + situationId,
      requestOptions2
    );
    if (response2.ok) {
      const responseJson = await response2.json();
      analysisData = {
        ...analysisData,
        recommends: responseJson,
      };
      console.log(JSON.stringify(responseJson));
      // navigation.navigate("Analysis", { analysisData: analysisData });
      setIsLoading(false);
      navigation.navigate("Analysis", { analysisData: analysisData });
    } else {
      Alert.alert("An error occurred", "Something went wrong");
      const responseJson = await response2.text();
      console.log("analysis response put not OK", responseJson);
      return;
    }
  };

  const chatbotApi = async ({
    userInput,
    setQueryResult,
    navigation,
    setModal,
  }) => {
    setIsLoading(true);

    const headers = new Headers();
    const token = await AsyncStorage.getItem("accessToken");
    console.log("token", token);
    headers.append("Authorization", "Bearer " + token);
    headers.append("Cookie", "csrftoken=dEcHVmmrtrjQM7qPnrS3hpHPJmFx6toS");

    const requestOptions = {
      method: "POST",
      redirect: "follow",
      body: JSON.stringify({ user_input: userInput }),
      headers: headers,
    };
    // console.log("url", url);
    console.log("requestOptions", JSON.stringify(requestOptions));
    const response = await fetch(
      "https://aicansellapp.com/chatbot/",
      requestOptions
    );
    if (response.ok) {
      const responseJson = await response.json();
      console.log(JSON.stringify(responseJson));
      setIsLoading(false);
      // Alert.alert(
      //   "Received reply from Chatbot",
      //   responseJson.response.choices[0].message.content
      // );
      setQueryResult(responseJson.response.choices[0].message.content);
    } else {
      const responseJson = await response.json();
      if(responseJson.detail && responseJson.detail.includes("token not valid")){
        Alert.alert("Session Expired", "Please login again");
        navigation.navigate("Login2");
        setIsLoading(false);
        return
      }
      Alert.alert("An error occurred", "Something went wrong");
      // const responseJson = await response.json();
      // console.log("situations response put not OK", responseJson);
    }
  };
  return (
    <ApiContext.Provider
      value={{
        login,
        forgotPassword,
        resetPassword,
        register,
        verifyEmail,
        isLoading,
        fetchQuizList,
        fetchQuizResult,
        fetchSituations,
        submitSituationResponse,
        chatbotApi,
        getToken,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
