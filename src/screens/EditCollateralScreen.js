import React, { useContext } from "react";
import { Context as CollateralsContext } from "../context/CollateralsContext";

import CollateralForm from "../components/CollateralForm";

const EditCollateralScreen = ({ navigation }) => {
  const { state, editCollateral } = useContext(CollateralsContext);

  const _id = navigation.getParam("_id");
  const collateral = state.find(subject => subject._id === _id);

  return (
    <CollateralForm
      navigation={navigation}
      initialValues={{
        cltrType: collateral.cltrType,
        nominalValue: collateral.nominalValue
      }}
      onSubmit={(cltrType, nominalValue) => {
        editCollateral(_id, cltrType, nominalValue);
      }}
    ></CollateralForm>
  );
};

EditCollateralScreen.navigationOptions = () => {
  return {
    headerTitle: "Edit Collateral"
  };
};

export default EditCollateralScreen;
