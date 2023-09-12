import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screen/Login";
import SignUp from "./screen/MainPage";
import MainPage from "./screen/MainPage";
import SignUpPage from "./screen/SignUpPage";
import AnotherPage from "./screen/AnotherPage";
import IcanSell from "./screen/IcanSell";
import AISell from "./screen/AISell";
import Form from "./screen/Form";
import AiJadu from "./screen/AiJadu";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigation from "./screen/Navigation";
import Promotion from "./screen/Promotion";
import Interview from "./screen/Interview";
import YourJadu from "./screen/YourJadu";
import ApiAPP from "./screen/ApiAPP";
import MyApi from "./screen/MyApi";
import PostAPi from "./screen/PostAPi";
import Search from "./screen/Search";
import { ApiProvider } from "./apis/ApiContext";
import CustomHeader from "./components/header";
import SignUpScreen from "./screen/SignUpPage2";
import ForgotPassword from "./screen/ForgotPassword";
import CustomSwiper from "./components/CustomSwiper";
import SwiperComponent from "./components/CustomSwiper";
import EmailVerification from "./screen/EmailVerification";
import Login2 from "./screen/Login2";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      {/* <Login/> */}
      {/* <MainPage/> */}
      {/* <SignUpPage/> */}
      {/* <AnotherPage/> */}

      {/* <IcanSell/> */}

      {/* <AISell/> */}

      {/* <Form/> */}
      {/* <AiJadu/> */}
      {/* <CustomHeader /> */}
      <ApiProvider>
        <NavigationContainer>
          <Stack.Navigator>
            
          
            <Stack.Screen
              name="Home"
              component={Navigation}
              options={{ headerShown: false }}
            />
              <Stack.Screen
              name="Login2"
              component={Login2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Form" component={Form} />
            <Stack.Screen name="AnotherPage" component={AnotherPage} />
            <Stack.Screen
              name="SignUpPage"
              component={SignUpPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MainPage"
              component={MainPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AiJadu"
              component={AiJadu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Promotion"
              component={Promotion}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Interview"
              component={Interview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IcanSell"
              component={IcanSell}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="YourJadu"
              component={YourJadu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyApi"
              component={MyApi}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PostAPi"
              component={PostAPi}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpScreen"
              component={SignUpScreen}
              options={{ headerShown: false }}
            ></Stack.Screen>

            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false }}
            ></Stack.Screen>

            <Stack.Screen
              name="SwiperComponent"
              component={SwiperComponent}
              options={{ headerShown: false }}
            ></Stack.Screen>
             <Stack.Screen
              name="EmailVerification"
              component={EmailVerification}
              options={{ headerShown: false }}
            ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </ApiProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
