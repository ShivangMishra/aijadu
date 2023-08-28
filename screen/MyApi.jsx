import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

const MyApi = () => {
    const [data,setData]=useState([])

    const yourApi = async()=>{
        const url="http://192.168.29.187:3000/users"
        let result= await fetch(url)
        result= await result.json()
        setData(result)
    }

   useEffect(()=>{
    yourApi()
   },[])
    

  return (
    <View>
     {
        data.length ?
        data.map((item)=><View>
            <Text>{item.name}</Text>
            <Text>{item.age}</Text>
            <Text>{item.id}</Text>
        </View>)
        :null
     }
    </View>
  )
}

export default MyApi