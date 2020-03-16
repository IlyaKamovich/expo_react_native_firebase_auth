import React from "react";
import { StyleSheet } from "react-native";
import { Input as RNLInput } from "react-native-elements";
import { width } from "react-native-dimension";
import { colors } from "../constants";

const Input = ({
  placeholder,
  secureTextEntry,
  rightIcon,
  value,
  onChangeText,
  keyboardType
}) => {
  return (
    <RNLInput
      keyboardType={keyboardType}
      value={value}
      onChangeText={onChangeText}
      inputContainerStyle={styles.inputContainerStyle}
      containerStyle={styles.containerStyle}
      inputStyle={styles.inputStyle}
      rightIcon={rightIcon}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
    />
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderColor: colors.primary_light_green,
    width: width(80),
    borderRadius: 10,
    marginTop: 7,
    marginBottom: 7,
    paddingLeft: 0
  },
  inputContainerStyle: {
    borderBottomWidth: 0
  },
  inputStyle: {
    color: colors.primary_light_green,
    paddingLeft: width(5)
  }
});

export { Input };
