import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";
import Colors from "../constants/colors";

const MainButton = props => {
  const ButtonComponent =
    Platform.Version >= 21 ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent onPress={props.onPress} activeOpacity={0.6}>
        <View style={{ ...styles.button, ...props.style }}>
          <Text style={{ ...styles.buttonText }}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    overflow: "hidden"
  },
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
