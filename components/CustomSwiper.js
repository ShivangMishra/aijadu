import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

import Swiper from "react-native-swiper";
import Promotion from "../screen/Promotion";
import IcanSell from "../screen/IcanSell";
import YourJadu from "../screen/YourJadu";

const styles = StyleSheet.create({
  wrapper: {},
});

export default function SwiperComponent({navigation}) {
  return (
    <Swiper style={styles.wrapper} showsButtons={false} showsPagination={false}>
      <IcanSell navigation={navigation}/>
      <Promotion navigation={navigation}/>
      <YourJadu navigation={navigation}/>
    </Swiper>
  );
}
