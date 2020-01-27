import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert
} from "react-native";
import { Context as CollateralsContext } from "../context/CollateralsContext";
import CollateralIcon from "react-native-vector-icons/MaterialCommunityIcons";
import DeleteIcon from "react-native-vector-icons/AntDesign";
import AddCollateralIcon from "react-native-vector-icons/AntDesign";

const CollateralsList = ({ navigation }) => {
  const { state, fetchCollaterals, deleteCollateral } = useContext(
    CollateralsContext
  );

  navigation.addListener("didFocus", () => {
    fetchCollaterals();
  });

  console.log(state);

  return (
    <View style={styles.listView}>
      <FlatList
        data={state}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          return (
            <View style={styles.subjectView}>
              <View>
                <Text style={styles.fullName}>{item.cltrType}</Text>
                <View style={{ marginLeft: 5 }}>
                  <Text>{item.nominalValue}</Text>
                </View>
              </View>
              <View style={styles.rightActions}>
                <TouchableOpacity
                  onPress={
                    (showAlert = () => {
                      Alert.alert(
                        "Delete Subject",
                        `Are you sure you want to delete subject of id: ${item._id} ?`,
                        [
                          {
                            text: "Cancel",
                            onPress: () => console.log("Canceled"),
                            style: "cancel"
                          },
                          {
                            text: "Yes",
                            onPress: () => {
                              deleteCollateral(item._id);
                            }
                          }
                        ],
                        { cancelable: false }
                      );
                    })
                  }
                >
                  <DeleteIcon color="indianred" name="delete" size={32} />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("CollateralDetail", {
                      _id: item._id
                    })
                  }
                >
                  <CollateralIcon
                    color="mediumturquoise"
                    name="file-document"
                    size={32}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      ></FlatList>
    </View>
  );
};

CollateralsList.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: "Collaterals",
    headerRight: (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("CollateralCreate");
        }}
      >
        <AddCollateralIcon name="addfile" size={25} style={{ margin: 10 }} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  firstName: {
    fontSize: 20
  },
  subjectType: {
    fontSize: 18,
    color: "royalblue",
    marginLeft: 5,
    marginBottom: 5
  },
  icon: {
    fontSize: 30
  },
  listView: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "aliceblue"
  },
  subjectView: {
    height: 120,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignContent: "center",
    backgroundColor: "#F0F0F0",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2
  },
  fullName: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: "bold",
    margin: 5
  },
  rightActions: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderLeftWidth: 2,
    borderColor: "black",
    position: "absolute",
    top: 0,
    right: 0,
    height: 120,
    width: 52
  },
  headerIcons: {
    margin: 10
  }
});

export default CollateralsList;
