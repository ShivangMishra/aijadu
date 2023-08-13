import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screen/Login';
import SignUp from './screen/MainPage';
import MainPage from './screen/MainPage';
import SignUpPage from './screen/SignUpPage';

export default function App() {
  return (
 <View>
  {/* <Login/> */}
  {/* <MainPage/> */}
  <SignUpPage/>
 </View>
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
