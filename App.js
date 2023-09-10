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

      <ApiProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Navigation} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Form" component={Form} />
          <Stack.Screen name="AnotherPage" component={AnotherPage} />
          <Stack.Screen name="SignUpPage" component={SignUpPage} />
          <Stack.Screen name="MainPage" component={MainPage} />
          <Stack.Screen name="AiJadu" component={AiJadu} />
          <Stack.Screen name="Promotion" component={Promotion} />
          <Stack.Screen name="Interview" component={Interview} />
          <Stack.Screen name="IcanSell" component={IcanSell} />
          <Stack.Screen name="YourJadu" component={YourJadu} />
          <Stack.Screen name="MyApi" component={MyApi} />
          <Stack.Screen name="PostAPi" component={PostAPi} />
          <Stack.Screen name="Search" component={Search} />
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
