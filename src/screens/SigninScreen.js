import React, { useState, useContext } from "react";
import { Context } from "../context/BlogContext";
import { NavigationEvents } from "react-navigation";
import { Text, Input, Button } from "react-native-elements";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import AuthForm from "../components/AuthForm";

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrMessage } = useContext(Context);

  return (
    <AuthForm
      navigation={navigation}
      title="Sign In"
      screen="Signup"
      routeButtonTitle="Sign Up"
      onSubmit={(email, password) => {
        signin(email, password);
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

export default SigninScreen;
