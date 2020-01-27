import React, { useState, useContext } from "react";
import { NavigationEvents } from "react-navigation";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import { Context as AuthContext } from "../context/BlogContext";

import AuthForm from "../components/AuthForm";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrMessage } = useContext(AuthContext);

  return (
    <AuthForm
      navigation={navigation}
      title="Sign Up"
      screen="Signin"
      routeButtonTitle="Sign In"
      onSubmit={(email, password) => {
        signup(email, password);
      }}
    ></AuthForm>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "aliceblue",
    justifyContent: "center"
  },
  inputs: {
    marginTop: 20
  },
  button: {
    alignSelf: "flex-end",
    margin: 10
  },
  errorMessage: {
    margin: 10,
    fontSize: 20,
    color: "red"
  }
});

export default SignupScreen;
