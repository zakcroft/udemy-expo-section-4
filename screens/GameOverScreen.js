import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView
} from "react-native";
import * as FontText from "../components/fontText";
import MainButton from "../components/MainButton";
import img from "../assets/success.png";
import Colors from "../constants/colors";

const GameOverScreen = props => {
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(
    Dimensions.get("window").width
  );
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
    Dimensions.get("window").height
  );
  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceWidth(Dimensions.get("window").width);
      setAvailableDeviceHeight(Dimensions.get("window").height);
    };

    Dimensions.addEventListener("change", updateLayout);

    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.screen}>
          <FontText.Title>The Game is Over!</FontText.Title>
          <View
            style={{
              ...styles.imgContainer,
              ...{
                width: availableDeviceWidth * 0.7,
                height: availableDeviceWidth * 0.7,
                borderRadius: (availableDeviceWidth * 0.7) / 2,
                marginVertical: availableDeviceHeight / 30
              }
            }}
          >
            {/*<Image style={styles.img} source={{uri:"https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"}} resizeMode={"cover"} fadeDuration={1000}/>*/}
            <Image style={styles.img} source={img} resizeMode={"cover"} />
          </View>
          <View
            style={{
              ...styles.resultsContainer,
              ...{
                marginVertical: availableDeviceHeight / 60
              }
            }}
          >
            <FontText.Body
              style={{
                ...styles.resultsText,
                ...{
                  fontSize: availableDeviceHeight < 400 ? 16 : 20
                }
              }}
            >
              Your phone needed{" "}
              <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds
              to guess the number
            </FontText.Body>
          </View>
          <FontText.Body>Number was: {props.userNumber}</FontText.Body>
          <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10
  },
  img: {
    width: "100%",
    height: "100%"
  },
  imgContainer: {
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden"
  },
  resultsContainer: {
    marginHorizontal: 30
  },
  resultsText: {
    textAlign: "center"
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold"
  }
});

export default GameOverScreen;
