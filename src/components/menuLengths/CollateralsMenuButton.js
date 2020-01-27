import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";
import { Context as CollateralsContext } from "../../context/CollateralsContext";

const CollateralsMenuButton = ({ navigation }) => {
  const { state, fetchCollaterals } = useContext(CollateralsContext);

  navigation.addListener("didFocus", () => {
    fetchCollaterals();
  });

  const cltrLength = state.length;

  return (
    <TouchableOpacity onPress={() => navigation.navigate("CollateralsList")}>
      <ListItem
        title="Collaterals"
        chevron
        badge={{ value: cltrLength }}
        titleStyle={{ fontSize: 23 }}
      ></ListItem>
    </TouchableOpacity>
  );
};

export default CollateralsMenuButton;
