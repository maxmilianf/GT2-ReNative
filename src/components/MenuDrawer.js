import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import { Button, ListItem } from "react-native-elements";
import { Context } from "../context/BlogContext";

import CollateralsMenuButton from "./menuLengths/CollateralsMenuButton";
import SubjectMenuButton from "./menuLengths/SubjectsMenuButton";
import UserIcon from "react-native-vector-icons/EvilIcons";
import LogOutIcon from "react-native-vector-icons/AntDesign";

const MenuDrawer = ({ navigation }) => {
  const { signout } = useContext(Context);
  return (
    <View style={{ flex: 1, paddingTop: 30, backgroundColor: "aliceblue" }}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Image
          style={styles.drawerImage}
          source={require("../../assets/gt2finance.png")}
        />
      </View>
      <View style={styles.menuView}>
        <TouchableOpacity onPress={() => navigation.navigate("Index")}>
          <ListItem
            title="Dashboard"
            chevron
            titleStyle={{ fontSize: 23 }}
          ></ListItem>
        </TouchableOpacity>
        <SubjectMenuButton navigation={navigation}></SubjectMenuButton>
        <CollateralsMenuButton navigation={navigation}></CollateralsMenuButton>
        <ListItem
          title="Legal Acts"
          chevron
          titleStyle={{ fontSize: 23 }}
        ></ListItem>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around"
        }}
      >
        <View style={{ width: "50%" }}>
          <Button
            iconRight={true}
            icon={
              <UserIcon
                color="white"
                name="user"
                size={25}
                style={{ alignItems: "center", marginLeft: 20 }}
              />
            }
            title="User"
            type="solid"
            style={{ marginHorizontal: 10 }}
            onPress={() => navigation.navigate("User")}
          />
        </View>
        <View style={{ width: "50%", marginRight: 10 }}>
          <Button
            iconRight={true}
            icon={
              <LogOutIcon
                color="white"
                name="logout"
                size={15}
                style={{ marginLeft: 20 }}
              />
            }
            style={{ marginRight: 10, width: "100%" }}
            title="Sign Out"
            type="solid"
            onPress={
              (showAlert = () => {
                Alert.alert(
                  "Sign Out?",
                  "",
                  [
                    {
                      text: "Cancel",
                      onPress: () => console.log("Canceled"),
                      style: "cancel"
                    },
                    {
                      text: "Yes",
                      onPress: () => {
                        signout();
                      }
                    }
                  ],
                  { cancelable: false }
                );
              })
            }
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuView: {
    backgroundColor: "white",
    margin: 10,
    borderRadius: 5,
    padding: 5,
    height: "80%"
  },
  drawerImage: {
    width: 210,
    height: 60
  },
  menuText: {
    fontSize: 23,
    marginBottom: 5
  },
  menuTextView: {
    borderBottomWidth: 1,
    borderColor: "#ff9882",
    width: "100%",
    marginBottom: 10
  }
});

export default MenuDrawer;
