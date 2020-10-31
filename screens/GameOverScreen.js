import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView
} from "react-native";
import * as FontText from "../components/fontText";
import MainButton from "../components/MainButton";
import img from "../assets/success.png";
import Colors from "../constants/colors";

const GameOverScreen = props => {
  return (
    <ScrollView>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    width: "100%",
    height: "100%"
  },
  imgContainer: {
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 40
  },
  resultsContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get("window").height / 60
  },
  resultsText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold"
  }
});

export default GameOverScreen;
