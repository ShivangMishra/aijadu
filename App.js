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
<AiJadu/>

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
