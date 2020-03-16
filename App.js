import React from "react";
import { SafeAreaComponent } from "./src/components";
import { AppNavigator } from "./src/router";

const App = () => {
  return (
    <SafeAreaComponent>
      <AppNavigator />
    </SafeAreaComponent>
  );
};

console.disableYellowBox = true;

export default App;
