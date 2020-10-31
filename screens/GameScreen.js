import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  FlatList,
  Dimensions
} from "react-native";

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
        onGameOver(passGuesses.length);
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
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setPassGuesses(currentGuess => [nextNumber, ...currentGuess]);
  };

  const renderListItem = (listLength, itemData) => {
    console.log("listLength", listLength);
    console.log("itemData", itemData);
    const i = listLength - itemData.index;
    return (
      <View key={1} style={styles.listItem}>
        <FontText.Body>#{i}</FontText.Body>
        <FontText.Body>{itemData.item}</FontText.Body>
      </View>
    );
  };

  let listContainerStyle = styles.listContainer;

  if (Dimensions.get("window").width < 350) {
    listContainerStyle = styles.listContainerBig;
  }

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
      <View style={listContainerStyle}>
        {/*<ScrollView contentContainerStyle={styles.list}>*/}
        {/*  {passGuesses.map((g, i) => renderListItem(g, passGuesses.length - i))}*/}
        {/*</ScrollView>*/}
        <FlatList
          contentContainerStyle={styles.list}
          keyExtractor={item => item.toString()}
          data={passGuesses}
          renderItem={item => renderListItem(passGuesses.length, item)}
        />
      </View>
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
    marginTop: Dimensions.get("window").height > 600 ? 20 : 5,
    width: 400,
    maxWidth: "90%"
  },
  listContainer: {
    flex: 1,
    width: "60%"
  },
  listContainerBig: {
    flex: 1,
    width: "80%"
  },
  list: {
    flexGrow: 1,
    // alignItems: 'center',
    justifyContent: "flex-end"
  },
  listItem: {
    borderColor: "#ccc",
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    backgroundColor: "white",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between"
  }
});

export default GameScreen;
