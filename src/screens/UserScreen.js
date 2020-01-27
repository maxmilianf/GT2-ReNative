import React from "react";
import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import UserIcon from "react-native-vector-icons/EvilIcons";

import LogoutBtn from "../components/LogoutBtn";

const UserScreen = ({ navigation }) => {
  return (
    <View
      style={{ flex: 1, backgroundColor: "aliceblue", alignItems: "center" }}
    >
      <View style={styles.userIconView}>
        <UserIcon name="user" color="royalblue" size={100} />
      </View>
      <View style={styles.userInfoView}></View>
    </View>
  );
};

UserScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: "User",
    headerRight: <LogoutBtn />
  };
};

const styles = StyleSheet.create({
  userIconView: {
    alignItems: "center",
    width: "100%",
    height: 80,
    backgroundColor: "white"
  },
  userInfoView: {
    width: "90%%",
    height: "80%",
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2
  }
});

export default UserScreen;
