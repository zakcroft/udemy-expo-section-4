import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Card from "./Card";
import Input from "./Input";
import COLORS from "../constants/colors";

const StartGameScreen = (props) => {
  console.log("props", props);

  const [enteredValue, setEnteredValue] = useState("");
  const numberedInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a new Game</Text>
        <Card style={{ width: "80%", alignItems: "center" }}>
          <Text>Select a number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberedInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Reset" onPress={() => {}} color={COLORS.accent} />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={() => {}}
                color={COLORS.primary}
              />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  input: {
    width: 70,
    textAlign: "center",
  },
});

export default StartGameScreen;