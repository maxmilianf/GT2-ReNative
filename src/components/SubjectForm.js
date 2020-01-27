import React, { useState } from "react";
import { View, StyleSheet, StatusBar, Modal, Text } from "react-native";
import { Button, Input, Overlay } from "react-native-elements";
import InfoModal from "react-native-vector-icons/Entypo";
import {
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native-gesture-handler";

const SubjectForm = ({ onSubmit, initialValues, navigation }) => {
  const [firstName, setTitle] = useState(initialValues.firstName);
  const [lastName, setContent] = useState(initialValues.lastName);
  const [city, setCity] = useState(initialValues.city);
  const [street, setStreet] = useState(initialValues.street);
  const [zipCode, setZipCode] = useState(initialValues.zipCode);
  const [subjectType, setSubjectType] = useState(initialValues.subjectType);
  const [modal, toggleModal] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "aliceblue" }}>
      <StatusBar barStyle="dark-content" />

      <View style={{ marginTop: 10 }}>
        <Input
          placeholder="First name"
          value={firstName}
          onChangeText={text => setTitle(text)}
        />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Input
          placeholder="Last name"
          value={lastName}
          onChangeText={text => setContent(text)}
        />
      </View>
      <View style={{ width: "70%", marginBottom: 10, flexDirection: "row" }}>
        <Input
          placeholder="Subject type"
          value={subjectType}
          onChangeText={text => setSubjectType(text)}
        />

        <Overlay
          height={50}
          width={"80%"}
          borderRadius={5}
          isVisible={modal}
          overlayBackgroundColor={"aliceblue"}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ color: "royalblue" }}>
              Legal Entity, Individual, etc.
            </Text>
            <TouchableOpacity onPress={() => toggleModal(false)}>
              <Text style={{ color: "royalblue" }}>Close</Text>
            </TouchableOpacity>
          </View>
        </Overlay>
        <TouchableOpacity onPress={() => toggleModal(true)}>
          <InfoModal
            name="info-with-circle"
            color="royalblue"
            size={32}
            styles={{ marginRight: 10 }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", marginBottom: 10 }}>
        <View style={{ width: "50%" }}>
          <Input
            placeholder="City"
            value={city}
            onChangeText={text => setCity(text)}
          />
        </View>
        <View style={{ width: "50%" }}>
          <Input
            placeholder="Zip code"
            value={zipCode}
            onChangeText={text => setZipCode(text)}
          />
        </View>
      </View>
      <View>
        <Input
          placeholder="Street"
          value={street}
          onChangeText={text => setStreet(text)}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          marginHorizontal: 15,
          marginTop: 15
        }}
      >
        <Button
          style={{ marginTop: 10, marginRight: 10 }}
          title="Back"
          onPress={() => {
            navigation.navigate("SubjectsList");
          }}
        />
        <Button
          style={{ marginTop: 10 }}
          title="Save"
          onPress={() =>
            onSubmit(firstName, lastName, city, street, zipCode, subjectType)
          }
        />
      </View>
    </View>
  );
};

SubjectForm.defaultProps = {
  initialValues: {
    firstName: "",
    comtent: "",
    city: "",
    street: "",
    zipCode: "",
    subjectType: ""
  }
};

const styles = StyleSheet.create({});

export default SubjectForm;
