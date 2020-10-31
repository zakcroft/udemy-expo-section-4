import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../constants/colors";

const MainButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.6}>
      <View style={{ ...styles.button, ...props.style }}>
        <Text style={{ ...styles.buttonText }}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 60,
    shadowOpacity: 0.26
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans"
  }
});

export default MainButton;
