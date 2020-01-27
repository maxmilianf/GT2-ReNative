import React, { useState, useContext } from "react";
import { Context as AuthContext } from "../context/BlogContext";
import { NavigationEvents } from "react-navigation";
import { Text, Input, Button } from "react-native-elements";
import { View, StyleSheet, TouchableOpacity } from "react-native";

const AuthForm = ({
  navigation,
  onSubmit,
  screen,
  title,
  routeButtonTitle
}) => {
  const { state, signup, clearErrMessage } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(screen);

  return (
    <View style={styles.body}>
      <NavigationEvents onWillBlur={clearErrMessage} />
      <Text h3 style={{ margin: 10, color: "royalblue" }}>
        {title}
      </Text>
      <Input
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputs}
        label="Email"
      />
      <Input
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputs}
        secureTextEntry
        label="Password"
      />
      <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      <Button
        onPress={() => onSubmit({ email, password })}
        style={styles.button}
        title={title}
        type="outline"
      />
      <Button
        onPress={() => navigation.navigate(`${screen}`)}
        type="clear"
        title={routeButtonTitle}
        style={{ alignSelf: "center", marginTop: 200 }}
      />
    </View>
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

export default AuthForm;
