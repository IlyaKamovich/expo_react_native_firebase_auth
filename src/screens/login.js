import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { Avatar, Icon } from "react-native-elements";
import { width, height, totalSize } from "react-native-dimension";
import { withFirebase } from "../hoc";
import { colors } from "../constants";
import { Input, Button, Footer } from "../components";

const Login = ({ api, navigation }) => {
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorLogingMessage, setErrorLogingMessage] = useState("");
  const [email, setEmailValue] = useState("");
  const [password, setPasswordValue] = useState("");

  const handleChangeShowPassword = () => setShowPassword(!showPassword);

  const loginUser = () => {
    setLoading(true);
    setErrorLogingMessage("");
    api.logIn(email, password).catch(({ message }) => {
      setLoading(false);
      setErrorLogingMessage(message);
    });
  };

  const onPressSignUp = () => {
    navigation.navigate("Signup");
  };

  const renderLoginButton = () => {
    if (loading) {
      return (
        <View style={styles.loadingView}>
          <ActivityIndicator color={colors.primary_light_green} size="large" />
        </View>
      );
    }
    return (
      <Button
        disabled={email.trim().length < 5 || password.trim().length < 6}
        text="LOGIN"
        onPress={loginUser}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar
          rounded
          size="large"
          icon={{ name: "user", type: "font-awesome" }}
        />
        <Text style={styles.titleText}>Welcome Back</Text>
      </View>
      <KeyboardAvoidingView behavior="height" style={styles.inputsBox}>
        <Input
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={text => setEmailValue(text)}
        />
        <Input
          value={password}
          onChangeText={text => setPasswordValue(text)}
          rightIcon={
            <Icon
              type="font-awesome"
              name="key"
              color={colors.primary_light_black}
              Component={TouchableOpacity}
              activeOpacity={0.3}
              onPress={handleChangeShowPassword}
            />
          }
          secureTextEntry={showPassword}
          placeholder="Password"
        />
      </KeyboardAvoidingView>
      {renderLoginButton()}
      {errorLogingMessage ? (
        <Text style={styles.errorText}>{errorLogingMessage}</Text>
      ) : null}
      <Footer
        leftText="Dont have account?"
        rightButtonText="create new account"
        onPressButtonText={onPressSignUp}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary_light_gray,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: height(15),
    paddingBottom: height(5)
  },
  loadingView: {
    height: 45,
    justifyContent: "center"
  },
  titleText: {
    fontSize: totalSize(4),
    color: colors.primary_light_black,
    fontWeight: "bold"
  },
  inputsBox: {
    justifyContent: "center",
    alignItems: "center",
    width: width(100),
    paddingVertical: height(2)
  },
  errorText: {
    textAlign: "center",
    color: colors.primary_light_red,
    width: width(80),
    fontSize: 16,
    paddingTop: 6
  }
});

const LoginScreen = withFirebase(Login);

export { LoginScreen as Login };
