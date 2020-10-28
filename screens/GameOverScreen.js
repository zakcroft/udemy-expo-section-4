import React from "react";
import { View, StyleSheet, Button } from "react-native";
import * as FontText from "../components/fontText";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <FontText.Title>The Game is Over!</FontText.Title>
      <FontText.Body>Number of rounds: {props.roundsNumber}</FontText.Body>
      <FontText.Body>Number was: {props.userNumber}</FontText.Body>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center", //
  },
});

export default GameOverScreen;
