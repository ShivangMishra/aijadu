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
