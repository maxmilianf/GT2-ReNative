import React from "react";
import "react-native-gesture-handler";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Provider as AuthProvider } from "./context/BlogContext";
import { Provider as SubjectProvider } from "./context/SubjectsContext";
import { Provider as CollateralProvider } from "./context/CollateralsContext";
import { setNavigator } from "./navigationRef";
import { YellowBox } from "react-native";

import SubjectList from "./screens/SubjectList";
import DetailSubjectScreen from "./screens/DetailSubjectScreen";
import CreateSubjectScreen from "./screens/CreateSubjectScreen";
import EditSubjectScreen from "./screens/EditSubjectScreen";
import DrawerButton from "./components/DrawerButton";
import DashBoard from "./screens/DashBoard";
import MenuDrawer from "./components/MenuDrawer";
import SigninScreen from "./screens/SigninScreen";
import SignupScreen from "./screens/SignupScreen";
import AuthScreen from "./screens/AuthScreen";
import LoadingScreen from "./screens/LoadingScreen";
import UserScreen from "./screens/UserScreen";
import CollateralsListScreen from "./screens/CollateralListScreen";
import CreateCollateralScreen from "./screens/CreateCollateralScreen";
import CollateralDetailScreen from "./screens/DetailCollateralScreen";
import CollateralEditScreen from "./screens/EditCollateralScreen";

YellowBox.ignoreWarnings([
  "RCTRootView cancelTouches",
  "Warning: componentWillMount is deprecated",
  "Warning: componentWillUpdate is deprecated",
  "Warning: componentWillReceiveProps is deprecated"
]);
console.disableYellowBox = true;

const DashBoardNavigator = createStackNavigator(
  {
    Index: DashBoard,
    SubjectsList: SubjectList,
    SubjectDetail: DetailSubjectScreen,
    SubjectCreate: CreateSubjectScreen,
    SubjectEdit: EditSubjectScreen,
    CollateralsList: CollateralsListScreen,
    CollateralCreate: CreateCollateralScreen,
    CollateralDetail: CollateralDetailScreen,
    CollateralEdit: CollateralEditScreen,
    User: UserScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerStyle: styles.menuHeader,
        headerTitle: "GT2",
        headerLeft: <DrawerButton navigation={navigation} />
      };
    }
  }
);

const MyDrawerNavigator = createDrawerNavigator(
  {
    Dashboard: DashBoardNavigator
  },
  { contentComponent: MenuDrawer }
);

const SwitchNavigator = createSwitchNavigator({
  Auth: createStackNavigator(
    {
      Loading: LoadingScreen,
      AuthScreen: AuthScreen,
      Signup: SignupScreen,
      Signin: SigninScreen
    },
    {
      defaultNavigationOptions: () => {
        return {
          header: null
        };
      }
    }
  ),
  App: {
    screen: MyDrawerNavigator
  }
});

const App = createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({
  menuHeader: {
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2
  },
  headerImage: {
    width: 140,
    height: 40,
    marginBottom: 20
  }
});

export default () => {
  return (
    <SubjectProvider>
      <CollateralProvider>
        <AuthProvider>
          <App
            ref={navigator => {
              setNavigator(navigator);
            }}
          />
        </AuthProvider>
      </CollateralProvider>
    </SubjectProvider>
  );
};
