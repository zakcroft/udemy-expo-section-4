import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import COLORS from "../constants/colors";
import * as FontText from "./fontText";

const Header = props => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid
        })
      }}
    >
      <FontText.Title>{props.title}</FontText.Title>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center"
  },
  headerIOS: {
    borderBottomColor: "transparent",
    borderBottomColor: 1,
    backgroundColor: "white"
  },
  headerAndroid: {
    backgroundColor: COLORS.primary,
    borderBottomColor: "transparent"
  },
  title: {
    color: Platform.OS === "ios" ? COLORS.primary : "white"
  }
});

export default Header;
