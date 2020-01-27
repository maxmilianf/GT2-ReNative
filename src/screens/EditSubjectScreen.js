import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context as SubjectsContext } from "../context/SubjectsContext";

import SubjectForm from "../components/SubjectForm";

const EditBlogScreen = ({ navigation }) => {
  const _id = navigation.getParam("_id");
  const { state, editSubject } = useContext(SubjectsContext);

  const subject = state.find(subject => subject._id === _id);

  return (
    <SubjectForm
      navigation={navigation}
      initialValues={{
        firstName: subject.firstName,
        lastName: subject.lastName,
        city: subject.city,
        street: subject.street,
        zipCode: subject.zipCode,
        subjectType: subject.subjectType
      }}
      onSubmit={(firstName, lastName, city, street, zipCode, subjectType) => {
        editSubject(
          _id,
          firstName,
          lastName,
          city,
          street,
          zipCode,
          subjectType
        );
      }}
    ></SubjectForm>
  );
};

EditBlogScreen.navigationOptions = () => {
  return {
    headerTitle: "Edit Subject"
  };
};

const styles = StyleSheet.create({});

export default EditBlogScreen;
