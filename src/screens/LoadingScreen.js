import React, { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { Context } from "../context/BlogContext";

const DrawerButton = ({ navigation }) => {
  const { state, tryLocalSignin } = useContext(Context);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return (
    <View style={styles.body}>
      <Text h4 style={styles.loadingText}>
        Authenticating...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "aliceblue",
    justifyContent: "center",
    alignItems: "center"
  },
  loadingText: {
    color: "royalblue"
  }
});

export default DrawerButton;
