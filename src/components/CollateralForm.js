import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";

const CollateralForm = ({ navigation, initialValues, onSubmit }) => {
  const [cltrType, onChangeCltrType] = useState(initialValues.cltrType);
  const [nominalValue, onChangeNominalValue] = useState(
    initialValues.nominalValue
  );

  return (
    <View style={{ flex: 1, backgroundColor: "aliceblue" }}>
      <View style={styles.input}>
        <Input
          onChangeText={text => onChangeCltrType(text)}
          value={cltrType}
          placeholder="Collateral Type"
        ></Input>
        <View style={{ width: "50%", marginTop: 10 }}>
          <Input
            onChangeText={number => onChangeNominalValue(number)}
            value={nominalValue}
            placeholder="Nominal Value"
          ></Input>
        </View>
      </View>
      <View style={styles.btnView}>
        <Button
          style={{ marginTop: 10, marginRight: 10 }}
          title="Back"
          onPress={() => {
            navigation.navigate("CollateralsList");
          }}
        />
        <Button
          style={{ marginTop: 10 }}
          title="Save"
          onPress={() => onSubmit(cltrType, nominalValue)}
        />
      </View>
    </View>
  );
};

CollateralForm.defaultProps = {
  initialValues: {
    cltrType: "",
    nominalValue: null
  }
};

const styles = StyleSheet.create({
  input: {
    marginTop: 10
  },
  btnView: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginHorizontal: 15,
    marginTop: 15
  }
});

export default CollateralForm;
