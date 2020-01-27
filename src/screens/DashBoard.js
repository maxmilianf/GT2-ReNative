import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Flatlist,
  StatusBar
} from "react-native";

const DashBoard = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "aliceblue" }}>
      <StatusBar barStyle="dark-content" />
    </View>
  );
};

DashBoard.navigationOptions = () => {
  return {
    headerTitle: "DashBoard"
  };
};

const styles = StyleSheet.create({});

export default DashBoard;
