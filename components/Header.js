import React from "react";
import { View, StyleSheet } from "react-native";
import COLORS from "../constants/colors";
import * as FontText from "./fontText";

const Header = props => {
  return (
    <View style={styles.header}>
      <FontText.Title>{props.title}</FontText.Title>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Header;
