import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

import Swiper from "react-native-swiper";
import Promotion from "../screen/Promotion";
import IcanSell from "../screen/IcanSell";
import YourJadu from "../screen/YourJadu";
import ImproveIn from "../screen/ImproveIn";
import InterviewMain from "../screen/InterviewMain";
import InterviewRecord from "../screen/InterviewRecord";
import AvatarPreview from "../screen/AvatarPreview";
import Cartoon from "../screen/Cartoon";
import CartoonTemplates from "../screen/CartoonTemplates";
import AnalysisSub from "../screen/AnalysisSub";
import InterviewAvatar from "../screen/InterviewAvatar";

const styles = StyleSheet.create({
  wrapper: {},
});

export default function SwiperComponent({navigation}) {
  return (
    <Swiper loop={false} style={styles.wrapper} showsButtons={false} showsPagination={false}>
      <IcanSell navigation={navigation}/>
      <Promotion navigation={navigation}/>
      <ImproveIn navigation={navigation}/>
      
      <InterviewMain navigation={navigation}/>
      <InterviewRecord navigation={navigation}/>
      <InterviewAvatar navigation={navigation}/>
      <AvatarPreview navigation={navigation}/>
      <Cartoon navigation={navigation}/>
      <CartoonTemplates navigation={navigation}/>
      <AnalysisSub navigation={navigation}/>
      
      <YourJadu navigation={navigation}/>

      
    </Swiper>
  );
}
