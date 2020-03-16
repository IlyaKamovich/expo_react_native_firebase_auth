import React, { Fragment } from "react";
import { Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { width, height } from "react-native-dimension";
import { Login, Home, Signup } from "../screens";
import { Initialization } from "../initialization";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Initialization>
    {({ loading, user, getUser }) => {
      if (loading) {
        return (
          <Image
            style={styles.splashScreen}
            source={require("../../src/assets/splash.png")}
            onLoad={getUser}
          />
        );
      }
      return (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
          >
            {user ? (
              <Fragment>
                <Stack.Screen name="Home" component={Home} />
              </Fragment>
            ) : (
              <Fragment>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
              </Fragment>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      );
    }}
  </Initialization>
);

const styles = StyleSheet.create({
  splashScreen: {
    flex: 1,
    backgroundColor: "#252f44",
    resizeMode: "contain",
    width: width(100),
    height: height(100)
  }
});

export { AppNavigator };
