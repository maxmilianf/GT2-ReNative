import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import MenuIco from "react-native-vector-icons/Entypo";

const DrawerButton = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <MenuIco name="menu" size={32} style={{ margin: 10 }} />
    </TouchableOpacity>
  );
};

export default DrawerButton;
