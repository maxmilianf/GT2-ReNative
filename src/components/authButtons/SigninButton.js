import React from "react";
import { Button } from "react-native-elements";
import { View, Text, StyleSheet } from "react-native";

const SigninButton = ({ navigation }) => {
  return (
    <Button
      onPress={() => navigation.navigate("Signup")}
      style={{ alignSelf: "center", marginTop: 200 }}
      title="Sign up"
      type="clear"
    />
  );
};

const styles = StyleSheet.create({});

export default SigninButton;
