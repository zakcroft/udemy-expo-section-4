import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Alert, ScrollView } from "react-native";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import * as FontText from "../components/fontText";
import MainButton from "../components/MainButton";

import { Ionicons } from "@expo/vector-icons";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = ({ userChoice, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [passGuesses, setPassGuesses] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userChoice) {
      if (currentGuess === userChoice) {
        onGameOver(rounds);
      }
    }
  }, [currentGuess, userChoice, onGameOver]);


  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const nextGuessHandler = direction => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "greater" && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" }
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setPassGuesses(currentGuess => [nextNumber, ...currentGuess]);
  };

  return (
    <View style={styles.screen}>
      <FontText.Body>Opponent's Guess</FontText.Body>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={() => nextGuessHandler("lower")}>
          <Ionicons name="md-remove" size={24} color="white" />
        </MainButton>
        <MainButton onPress={() => nextGuessHandler("greater")}>
          <Ionicons name="md-add" size={24} color="white" />
        </MainButton>
      </Card>
      <ScrollView>
        {passGuesses.map((g, i) => <View key={i}><Text>{g}</Text></View>)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 400,
    maxWidth: "90%"
  }
});

export default GameScreen;
