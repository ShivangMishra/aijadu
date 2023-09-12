import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

import Swiper from "react-native-swiper";
import Promotion from "../screen/Promotion";
import IcanSell from "../screen/IcanSell";
import YourJadu from "../screen/YourJadu";

const styles = StyleSheet.create({
  wrapper: {},
});

export default function SwiperComponent() {
  return (
    <Swiper style={styles.wrapper} showsButtons={false}>
      <IcanSell />
      <Promotion />
      <YourJadu/>
    </Swiper>
  );
}
