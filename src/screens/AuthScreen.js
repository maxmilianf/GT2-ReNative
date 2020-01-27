import React, { useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar
} from "react-native";
import { Button } from "react-native-elements";
import { Context } from "../context/BlogContext";

const AuthScreen = ({ navigation }) => {
  const { state, tryLocalSignin } = useContext(Context);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "aliceblue",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Image
          style={styles.headerImage}
          source={require("../../assets/gt2finance.png")}
        />
        <Button
          type="outline"
          style={styles.button}
          title="Sign in"
          onPress={() => {
            navigation.navigate("Signin");
          }}
        ></Button>

        <Button
          type="outline"
          style={styles.button}
          title="Sign up"
          onPress={() => {
            navigation.navigate("Signup");
          }}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    width: 300,
    height: 85,
    marginBottom: 50
  },
  button: {
    margin: 10,
    width: 200
  }
});

export default AuthScreen;
