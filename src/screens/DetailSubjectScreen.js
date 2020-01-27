import React, { useContext, useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Text } from "react-native-elements";
import { Context as SubjectsContext } from "../context/SubjectsContext";
import EditIcon from "react-native-vector-icons/FontAwesome";

const DetailSubjectScreen = ({ navigation }) => {
  const { state } = useContext(SubjectsContext);

  const subject = state.find(
    subject => subject._id === navigation.getParam("_id")
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.detailView}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={styles.subjectName}>
            {subject.firstName} {subject.lastName}
          </Text>
        </View>
        <Text style={styles.subjectType}>{subject.subjectType}</Text>
        <Text h4 style={{ marginLeft: 5 }}>
          Adress
        </Text>
        <Text style={styles.subjectAdress}>{subject.city}</Text>
        <Text style={styles.subjectAdress}>{subject.street}</Text>
        <Text style={styles.subjectAdress}>{subject.zipCode}</Text>
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
          title="Back to Subjects List"
          onPress={() => navigation.navigate("SubjectsList")}
        />
      </View>
    </View>
  );
};

DetailSubjectScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: "Subject Detail",
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("SubjectEdit", {
            _id: navigation.getParam("_id")
          })
        }
      >
        <EditIcon name="edit" size={28} style={{ marginRight: 10 }} />
      </TouchableOpacity>
    )
  };
};
const styles = StyleSheet.create({
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
  subjectName: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 5
  },
  subjectType: {
    fontSize: 20,
    color: "royalblue",
    marginLeft: 5
  },
  subjectAdress: {
    marginLeft: 10,
    marginTop: 5
  }
});

export default DetailSubjectScreen;
