import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert
} from "react-native";
import { Context as SubjectsContext } from "../context/SubjectsContext";
import CardDetailIcon from "react-native-vector-icons/MaterialCommunityIcons";
import AddUserIcon from "react-native-vector-icons/AntDesign";
import DeleteUserIcon from "react-native-vector-icons/AntDesign";

const SubjectList = ({ navigation }) => {
  const { state, fetchSubjects, deleteSubject } = useContext(SubjectsContext);

  navigation.addListener("didFocus", () => {
    fetchSubjects();
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
                <Text style={styles.fullName}>
                  {item.firstName} {item.lastName}
                </Text>
                <Text style={styles.subjectType}>{item.subjectType}</Text>
                <View style={{ marginLeft: 5 }}>
                  <Text>{item.city}</Text>
                  <Text>{item.street}</Text>
                  <Text>{item.zipCode}</Text>
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
                            onPress: () => deleteSubject(item._id)
                          }
                        ],
                        { cancelable: false }
                      );
                    })
                  }
                >
                  <DeleteUserIcon color="indianred" name="delete" size={32} />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("SubjectDetail", {
                      _id: item._id
                    })
                  }
                >
                  <CardDetailIcon
                    color="mediumturquoise"
                    name="account-card-details"
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

SubjectList.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: "Subjects",
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate("SubjectCreate")}>
        <AddUserIcon name="adduser" size={28} style={styles.headerIcons} />
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

export default SubjectList;
