import React from "react";
import { SafeAreaView } from "react-native";

const SafeAreaComponent = ({ children }) => {
  return <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>;
};

export { SafeAreaComponent };
