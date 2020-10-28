import React from "react";
import { View, StyleSheet, Button, Image } from "react-native";
import * as FontText from "../components/fontText";
import img from "../assets/success.png";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <FontText.Title>The Game is Over!</FontText.Title>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={{uri:"https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"}} resizeMode={"cover"} fadeDuration={1000}/>
        {/*<Image style={styles.img} source={img} resizeMode={"cover"} />*/}
      </View>
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
  img: {
    width: "100%",
    height: "100%",
  },
  imgContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    width: 300,
    height: 300,
    overflow: "hidden",
    marginVertical: 30,
  },
});

export default GameOverScreen;
