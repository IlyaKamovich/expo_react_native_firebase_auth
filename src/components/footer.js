import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { width, height } from "react-native-dimension";
import { colors } from "../constants";

const Footer = ({ leftText, rightButtonText, onPressButtonText }) => {
  return (
    <View style={styles.signUpBox}>
      <Text style={{ color: colors.primary_light_black }}>{leftText}</Text>
      <TouchableOpacity onPress={onPressButtonText}>
        <Text style={{ color: colors.primary_light_green }}>
          {rightButtonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  signUpBox: {
    marginTop: height(3),
    width: width(75),
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  }
});

export { Footer };
