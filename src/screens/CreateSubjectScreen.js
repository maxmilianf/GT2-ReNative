import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context as SubjectsContext } from "../context/SubjectsContext";

import SubjectForm from "../components/SubjectForm";

const CreateBlogScreen = ({ navigation }) => {
  const { addSubject } = useContext(SubjectsContext);

  return (
    <SubjectForm
      navigation={navigation}
      onSubmit={(firstName, lastName, city, street, zipCode, subjectType) => {
        addSubject(
          firstName,
          lastName,
          city,
          street,
          zipCode,
          subjectType,
          navigation.navigate("SubjectsList")
        );
      }}
    ></SubjectForm>
  );
};

CreateBlogScreen.navigationOptions = () => {
  return {
    headerTitle: "Create Subject"
  };
};

export default CreateBlogScreen;
