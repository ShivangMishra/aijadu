import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screen/Login';
import SignUp from './screen/MainPage';
import MainPage from './screen/MainPage';
import SignUpPage from './screen/SignUpPage';
import AnotherPage from './screen/AnotherPage';
import IcanSell from './screen/IcanSell';
import AISell from './screen/AISell';
import Form from './screen/Form';
import AiJadu from './screen/AiJadu';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigation from './screen/Navigation';
import Promotion from './screen/Promotion';


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

<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Navigation} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Form' component={Form} />
        <Stack.Screen name='AnotherPage' component={AnotherPage} />
        <Stack.Screen name='SignUpPage' component={SignUpPage} />
        <Stack.Screen name='MainPage' component={MainPage} />
        <Stack.Screen name='AiJadu' component={AiJadu} />
        <Stack.Screen name='Promotion' component={Promotion} />
      </Stack.Navigator>
    </NavigationContainer>

 </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
