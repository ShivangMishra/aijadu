import { View, Text, Button } from 'react-native'
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


const Navigation = (props) => {
  return (
    <View>

    <Button title='Login Button' onPress={()=>{props.navigation.navigate(Login)}}  />
    <Button title='Form Button' onPress={()=>{props.navigation.navigate(Form)}}  />
    <Button title='DropDown Page Button' onPress={()=>{props.navigation.navigate(AnotherPage)}}  />
    <Button title='SignUp Page Button' onPress={()=>{props.navigation.navigate(SignUpPage)}}  />
    <Button title='Main Page Button' onPress={()=>{props.navigation.navigate(MainPage)}}  />
    {/* <Button title='AiJadu Page Button' onPress={()=>{props.navigation.navigate(AiJadu)}}  /> */}
    <Button title='Promotion Page Button' onPress={()=>{props.navigation.navigate(Promotion)}}  />
    <Button title='InterView Page Button' onPress={()=>{props.navigation.navigate(Interview)}}  />
    <Button title='IcanSell Page Button' onPress={()=>{props.navigation.navigate(IcanSell)}}  />
    <Button title='YourJadu Page Button' onPress={()=>{props.navigation.navigate(YourJadu)}}  />
    {/* <Button title='MyApi Page Button' onPress={()=>{props.navigation.navigate(MyApi)}}  />
    <Button title='PostAPi Page Button' onPress={()=>{props.navigation.navigate(PostAPi)}}  /> */}
  
    </View>
  )
}

export default Navigation