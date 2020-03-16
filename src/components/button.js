import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { width, height, totalSize } from "react-native-dimension";
import { colors } from "../constants";

const Button = ({
  text,
  onPress,
  buttonStyle,
  textStyle,
  disabled,
  customButtonStyle
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.4}
      style={
        disabled
          ? [
              styles.button,
              buttonStyle,
              styles.disabledButton,
              customButtonStyle
            ]
          : [styles.button, buttonStyle, customButtonStyle]
      }
      onPress={onPress}
    >
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: width(80),
    height: height(8),
    backgroundColor: colors.primary_light_green,
    borderRadius: totalSize(1),
    justifyContent: "center",
    alignItems: "center"
  },
  disabledButton: {
    backgroundColor: colors.secondary_gray
  },
  text: {
    color: colors.primary_light_gray,
    fontWeight: "700",
    fontSize: 17
  }
});

export { Button };
