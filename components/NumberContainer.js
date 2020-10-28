import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import * as FontText from "./fontText";

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <FontText.Body>{props.children}</FontText.Body>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding:10,
    borderRadius:10,
    marginVertical:10,
    alignItems:"center",
    justifyContent: "center"
  },
  number:{
    fontSize:22,
    borderColor: Colors.accent,
  }
});

export default NumberContainer;
