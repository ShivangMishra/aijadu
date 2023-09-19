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
      Alert.alert("Login Failed", responseJson.detail);
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
      Alert.alert("An error occurred", responseJson.detail);
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
      redirect: "follow",
      headers: headers,
    };
    console.log("requestOptions", JSON.stringify(requestOptions));
    const response = await fetch(
      `https://aicansellapp.com/api/send-confirmation-email/`,
      requestOptions
    );
    return response.detail ? false : true;
  };

  const fetchQuizList = async ({setQuizListData}) => {
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

  const fetchQuizResult = async ({questionId, setQuizResult}) => {
    setIsLoading(true);
    
    const headers = new Headers();
    const token = await AsyncStorage.getItem("accessToken");
    console.log("token", token);
    headers.append("Authorization", "Bearer " + token);
    headers.append("Cookie", "csrftoken=dEcHVmmrtrjQM7qPnrS3hpHPJmFx6toS");
    
    const requestOptions = {
      method: "PUT",
      redirect: "follow",
      body: JSON.stringify({id: questionId}),
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
  }

  const fetchSituations = async ({setSituations, setEmailSituations}) => {
    setIsLoading(true);
    
    const headers = new Headers();
    const token = await AsyncStorage.getItem("accessToken");
    console.log("token", token);
    headers.append("Authorization", "Bearer " + token);
    headers.append("Cookie", "csrftoken=dEcHVmmrtrjQM7qPnrS3hpHPJmFx6toS");
    
    const requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: headers,
    };
    // console.log("url", url);  
    console.log("requestOptions", JSON.stringify(requestOptions));
    const response = await fetch(
      "https://aicansellapp.com/sean/itemli",
      requestOptions
    );
    // console.log("quiz list response", response);
    if (response.ok) {
      const responseJson = await response.json();
      console.log(JSON.stringify(responseJson));
      const emailSituations = [];
      const situations = [];
      responseJson.forEach((item) => {
        if(item.item_type === "email"){
          emailSituations.push(item);
        } else {
          situations.push(item);
        }
      });
      setSituations(situations);
      setEmailSituations(emailSituations);
      setIsLoading(false);
    } else {
      const responseJson = await response.json();
      console.log("situations not OK", responseJson);
    }
  }
  const submitSituationResponse = async ({situationResponse, situationId, navigation}) => { 
    setIsLoading(true);
    
    const headers = new Headers();
    const token = await AsyncStorage.getItem("accessToken");
    console.log("token", token);
    headers.append("Authorization", "Bearer " + token);
    headers.append("Cookie", "csrftoken=dEcHVmmrtrjQM7qPnrS3hpHPJmFx6toS");
    
    const requestOptions = {
      method: "PUT",
      redirect: "follow",
      body: JSON.stringify({item_answer: situationResponse}),
      headers: headers,
    };
    // console.log("url", url);  
    console.log("requestOptions", JSON.stringify(requestOptions));
    const response = await fetch(
      "https://aicansellapp.com/sean/api/item_results/" + situationId,
      requestOptions
    );
    if (response.ok) {
      const responseJson = await response.json();
      console.log(JSON.stringify(responseJson));
      navigation.navigate("Analysis", {analysisData: responseJson});
      setIsLoading(false);
    } else {
      Alert.alert("An error occurred", "Something went wrong");
      const responseJson = await response.text();
      console.log("situations response put not OK", responseJson);
    }
  }

  const chatbotApi = async ({ userInput, setResponse, navigation, setModal }) => {
    setIsLoading(true);
    
    const headers = new Headers();
    const token = await AsyncStorage.getItem("accessToken");
    console.log("token", token);
    headers.append("Authorization", "Bearer " + token);
    headers.append("Cookie", "csrftoken=dEcHVmmrtrjQM7qPnrS3hpHPJmFx6toS");
    
    const requestOptions = {
      method: "POST",
      redirect: "follow",
      body: JSON.stringify({user_input: userInput}),
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
      Alert.alert("Received reply from Chatbot", responseJson.response.choices[0].message.content);
    } else {
      Alert.alert("An error occurred", "Something went wrong");
      // const responseJson = await response.json();
      // console.log("situations response put not OK", responseJson);
    }
  }
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
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
