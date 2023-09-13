import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import Login from './Login'
import Form from './Form'
import AnotherPage from './AnotherPage'
import SignUpPage from './SignUpPage'
import MainPage from './MainPage'
import IcanSell from './IcanSell'
import AiJadu from './AiJadu'
import Promotion from './Promotion'
import Interview from './Interview'
import YourJadu from './YourJadu'
import ApiAPP from './ApiAPP'
import MyApi from './MyApi'
import PostAPi from './PostAPi'
import Search from './Search'
import SignUpScreen from './SignUpPage2'
import ForgotPassword from './ForgotPassword'
import SwiperComponent from '../components/CustomSwiper'
import EmailVerification from './EmailVerification'
import Login2 from './Login2'
import WhatIs from './WhatIs'
import ResetPassword from './ResetPassword'
import Analysis from './Analysis'


const Navigation = (props) => {
  return (
    <View style={styles.container}>

    <Button title='Login Screen' onPress={()=>{props.navigation.navigate(Login)}}  />
    <Button title='Forgot Password Screen' onPress={()=>{props.navigation.navigate(ForgotPassword)}}  />
    {/* <Button title='Form Button' onPress={()=>{props.navigation.navigate(Form)}}  /> */}
    {/* <Button title='DropDown Page Button' onPress={()=>{props.navigation.navigate(AnotherPage)}}  /> */}
    <Button title='SignUp Screen' onPress={()=>{props.navigation.navigate(SignUpPage)}}  />
    <Button title='Email Verification Screen' onPress={()=>{props.navigation.navigate(MainPage)}}  />
    {/* <Button title='AiJadu Page Button' onPress={()=>{props.navigation.navigate(AiJadu)}}  /> */}
    <Button title='Swiper Screen' onPress={()=>{props.navigation.navigate(SwiperComponent)}}  />
    <Button title='Login2' onPress={()=>{props.navigation.navigate(Login2)}}  />
    
    <Button title='Promotion Screen' onPress={()=>{props.navigation.navigate(Promotion)}}  />
    <Button title='InterView Screen' onPress={()=>{props.navigation.navigate(Interview)}}  />
    <Button title='What AIcanSell Screen' onPress={()=>{props.navigation.navigate(IcanSell)}}  />
    <Button title='Build Your Jadu Screen' onPress={()=>{props.navigation.navigate(YourJadu)}}  />
     {/* <Button title='MyApi Page Button' onPress={()=>{props.navigation.navigate(MyApi)}}  />  */}
     {/* <Button title='PostAPi Page Button' onPress={()=>{props.navigation.navigate(PostAPi)}}  />  */}
     {/* <Button title='Search Page Button' onPress={()=>{props.navigation.navigate(Search)}}  />  */}
     <Button title='Sign Up Screen' onPress={()=>{props.navigation.navigate(SignUpScreen)}}  />
     <Button title='Email verification Screen' onPress={()=>{props.navigation.navigate(EmailVerification)}}  />
     <Button title='What is Screen' onPress={()=>{props.navigation.navigate(WhatIs)}}  />
     <Button title='Reset Password' onPress={()=>{props.navigation.navigate(ResetPassword)}}  />
     <Button title='Analysis' onPress={()=>{props.navigation.navigate(Analysis)}}  />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  }
})

export default Navigation