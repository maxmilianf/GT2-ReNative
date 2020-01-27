import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context as CollateralsContext } from "../context/CollateralsContext";
import { Button } from "react-native-elements";
import EditIcon from "react-native-vector-icons/FontAwesome";

const DetailCollateralScreen = ({ navigation }) => {
  const { state } = useContext(CollateralsContext);

  const collateral = state.find(
    collateral => collateral._id === navigation.getParam("_id")
  );

  return (
    <View style={styles.mainView}>
      <View style={styles.detailView}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={styles.cltrType}>{collateral.cltrType}</Text>
        </View>
        <Text style={styles.cltrInfo}>{collateral.nominalValue}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          marginHorizontal: 15
        }}
      >
        <Button
          style={{ marginTop: 10 }}
          title="Back to Collaterals List"
          onPress={() => navigation.navigate("CollateralsList")}
        />
      </View>
    </View>
  );
};

DetailCollateralScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: "Collateral Detail",
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("CollateralEdit", {
            _id: navigation.getParam("_id")
          })
        }
      >
        <EditIcon name="edit" size={30} style={{ marginRight: 10 }} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "aliceblue"
  },
  detailView: {
    height: "50%",
    marginHorizontal: 15,
    marginTop: 10,
    fontWeight: "bold",
    borderRadius: 5,
    backgroundColor: "#F0F0F0",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2
  },
  cltrType: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 5
  },
  cltrInfo: {
    marginLeft: 10,
    marginTop: 5
  }
});

export default DetailCollateralScreen;
