import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as CollateralsContext } from "../context/CollateralsContext";

import CollateralForm from "../components/CollateralForm";

const CreateCollateralScreen = ({ navigation }) => {
  const { addCollateral } = useContext(CollateralsContext);
  return (
    <CollateralForm
      navigation={navigation}
      onSubmit={(cltrType, nominalValue) => {
        addCollateral(
          cltrType,
          nominalValue,
          navigation.navigate("CollateralsList")
        );
      }}
    ></CollateralForm>
  );
};

CreateCollateralScreen.navigationOptions = () => {
  return {
    headerTitle: "Create Collateral"
  };
};

const styles = StyleSheet.create({});

export default CreateCollateralScreen;
