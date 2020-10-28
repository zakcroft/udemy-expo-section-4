import React from "react";
import { Text, StyleSheet } from "react-native";

export const Body = (props) => (
  <Text style={styles.body}>{props.children}</Text>
);

const styles = StyleSheet.create({
  body: {
    fontFamily: "open-sans",
  },
});
