import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Alert
} from "react-native";
import { Header } from "react-native-elements";
import { width, height, totalSize } from "react-native-dimension";
import moment from "moment";
import { UsernameStep, EmailAndPasswordStep, Footer } from "../components";
import { colors } from "../constants";
import { withFirebase } from "../hoc";

class Signup extends Component {
  state = {
    activeStep: 1,
    userName: "",
    email: "",
    password: "",
    createdAt: moment().format("LL")
  };

  nextStep = () => {
    this.setState({
      activeStep: this.state.activeStep + 1
    });
  };

  prevStep = () => {
    this.setState({
      activeStep: this.state.activeStep - 1
    });
  };

  backToLogin = () => {
    this.props.navigation.navigate("Login");
  };

  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  createUserName = () => {
    this.checkUniqueUserNameValue()
      .then(() => {
        this.nextStep();
      })
      .catch(message => {
        Alert.alert("Error username", message);
      });
  };

  checkUniqueUserNameValue = () => {
    return new Promise((res, rej) => {
      this.props.api.db
        .ref("users")
        .orderByChild("userName")
        .equalTo(this.state.userName)
        .once("value", user => {
          if (user.val()) {
            rej("Sorry, that username already exists.");
          } else {
            res();
          }
        });
    });
  };

  register = () => {
    this.props.api
      .signUp(this.state.email, this.state.password)
      .then(user => {
        this.writeUserData(user.user.uid);
      })
      .catch(err => Alert.alert("Error register", err.message));
  };

  writeUserData = userId => {
    this.props.api.db.ref(`users/${userId}`).set({
      userName: this.state.userName,
      email: this.state.email,
      userId: userId,
      createdAt: this.state.createdAt
    });
  };

  renderActiveStepComponent = () => {
    let activeComponent;
    switch (this.state.activeStep) {
      case 1:
        return (activeComponent = (
          <UsernameStep
            onChangeText={this.onChangeText}
            userName={this.state.userName}
            createUserName={this.createUserName}
          />
        ));
      case 2:
        return (activeComponent = (
          <EmailAndPasswordStep
            onChangeText={this.onChangeText}
            email={this.state.email}
            password={this.state.password}
            register={this.register}
            prevStep={this.prevStep}
          />
        ));
    }
    return activeComponent;
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Hello user.</Text>
        <KeyboardAvoidingView behavior="padding" style={styles.inputsBox}>
          {this.renderActiveStepComponent()}
        </KeyboardAvoidingView>
        <Footer
          leftText={
            this.state.activeStep === 1
              ? "Do you have account?"
              : "Back to username."
          }
          rightButtonText="chick here"
          onPressButtonText={
            this.state.activeStep === 1 ? this.backToLogin : this.prevStep
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primay_light_gray
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
  }
});

const SignupScreen = withFirebase(Signup);

export { SignupScreen as Signup };
