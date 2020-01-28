import React, { useEffect, useState } from "react";
import { StyleSheet, View, Flatlist, StatusBar, FlatList } from "react-native";
import { Text, Button } from "react-native-elements";
import EurIcon from "react-native-vector-icons/FontAwesome";

import Charts from "../components/charts/Charts";

const DashBoard = ({ navigation }) => {
  const [currencyData, setData] = useState();
  useEffect(() => {
    (async function courseFetchFunction() {
      const response = await fetch(
        "http://data.fixer.io/api/latest?access_key=a2be8773d06f1fd33b5714f7bedd371a"
      );
      const data = await response.json();
      console.log(
        `Status: ${data.success}, Date:${data.date}, Currency: ${data.base}`
      );
      setData(data);
    })();
  }, []);
  return (
    <View
      style={{ flex: 1, backgroundColor: "aliceblue", alignItems: "center" }}
    >
      <View style={styles.userIconView}>
        <EurIcon name="euro" color="dodgerblue" size={80} />
      </View>
      <View style={styles.userInfoView}>
        <Button
          onPress={() => {}}
          title={`CZK: ${currencyData?.rates.CZK}`}
          type="outline"
        ></Button>
        <Button
          onPress={() => {}}
          title={`USD: ${currencyData?.rates.USD}`}
          type="outline"
          style={{ marginTop: 10 }}
        ></Button>
        <Button
          onPress={() => {}}
          title={`GBP: ${currencyData?.rates.GBP}`}
          type="outline"
          style={{ marginTop: 10 }}
        ></Button>
      </View>
    </View>
  );
};

DashBoard.navigationOptions = () => {
  return {
    headerTitle: "DashBoard"
  };
};

const styles = StyleSheet.create({
  userIconView: {
    alignItems: "center",
    width: "100%",
    height: 80,
    backgroundColor: "white"
  },
  userInfoView: {
    width: "90%%",
    height: "80%",
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    padding: 10
  }
});

export default DashBoard;
