import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import dataApi from "../api/jsonServer";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };

    case "signin":
      return { errorMessage: "", token: action.payload };

    case "clear_err_message":
      return { ...state, errorMessage: "" };

    case "signout":
      return { token: null, errorMessage: "" };

    default:
      return state;
  }
};

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    navigate("Index");
  } else {
    navigate("AuthScreen");
  }
};

const clearErrMessage = dispatch => () => {
  dispatch({ type: "clear_err_message" });
};

const signup = dispatch => {
  return async ({ email, password }) => {
    try {
      const response = await dataApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });

      navigate("Index");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with Signing Up."
      });
    }
  };
};

const signin = dispatch => {
  return async ({ email, password }) => {
    try {
      const response = await dataApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });

      navigate("Index");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with signing in"
      });
    }
  };
};

const signout = dispatch => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
  navigate("AuthScreen");
};

export const { Context, Provider } = createDataContext(
  authReducer,
  {
    signup,
    signin,
    signout,
    clearErrMessage,
    tryLocalSignin
  },
  { token: null, errorMessage: "" }
);
