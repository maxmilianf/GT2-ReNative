import React, { useContext } from "react";
import { TouchableOpacity, Alert } from "react-native";
import { Context } from "../context/BlogContext";
import LogoutBtnIcon from "react-native-vector-icons/AntDesign";

const LogoutBtn = () => {
  const { signout } = useContext(Context);

  return (
    <TouchableOpacity
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
    >
      <LogoutBtnIcon
        name="logout"
        size={20}
        style={{ marginRight: 10, marginTop: 10 }}
      />
    </TouchableOpacity>
  );
};

export default LogoutBtn;
