import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import * as FontText from "../components/fontText";
import MainButton from "../components/MainButton";
import img from "../assets/success.png";
import Colors from "../constants/colors";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <FontText.Title>The Game is Over!</FontText.Title>
      <View style={styles.imgContainer}>
        {/*<Image style={styles.img} source={{uri:"https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"}} resizeMode={"cover"} fadeDuration={1000}/>*/}
        <Image style={styles.img} source={img} resizeMode={"cover"} />
      </View>
      <View style={styles.resultsContainer}>
        <FontText.Body style={styles.resultsText}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number
        </FontText.Body>
      </View>
      <FontText.Body>Number was: {props.userNumber}</FontText.Body>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center" //
  },
  img: {
    width: "100%",
    height: "100%"
  },
  imgContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    width: 300,
    height: 300,
    overflow: "hidden",
    marginVertical: 30
  },
  resultsContainer: {
    marginHorizontal: 30,
    marginVertical: 30
  },
  resultsText: {
    textAlign: "center",
    fontSize: 20
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold"
  }
});

export default GameOverScreen;
