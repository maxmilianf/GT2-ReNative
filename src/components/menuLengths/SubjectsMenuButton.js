import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";
import { Context as SubjectsContext } from "../../context/SubjectsContext";

const SubjectsMenuButton = ({ navigation }) => {
  const { state, fetchSubjects } = useContext(SubjectsContext);

  navigation.addListener("didFocus", () => {
    fetchSubjects();
  });

  const subjectLength = state.length;

  return (
    <TouchableOpacity onPress={() => navigation.navigate("SubjectsList")}>
      <ListItem
        title="Subjects"
        chevron
        badge={{ value: subjectLength }}
        titleStyle={{ fontSize: 23 }}
      ></ListItem>
    </TouchableOpacity>
  );
};

export default SubjectsMenuButton;
