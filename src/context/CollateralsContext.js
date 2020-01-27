import createDataContext from "./createDataContext";
import dataApi from "../api/jsonServer";
import { navigate } from "../navigationRef";

const CollateralsReducer = (state, action) => {
  switch (action.type) {
    case "fetch_collaterals":
      return action.payload;
    case "delete_collateral":
      return state.filter(collateral => collateral._id !== action.payload);
    default:
      return state;
  }
};

const fetchCollaterals = dispatch => async () => {
  const response = await dataApi.get("/collaterals");
  dispatch({ type: "fetch_collaterals", payload: response.data });
};

const addCollateral = dispatch => async (cltrType, nominalValue) => {
  await dataApi.post("/collaterals", {
    cltrType,
    nominalValue
  });
};

const deleteCollateral = dispatch => {
  return async _id => {
    await dataApi.delete(`/collaterals/${_id}`);
    dispatch({ type: "delete_collateral", payload: _id });
  };
};

const editCollateral = dispatch => {
  return async (_id, cltrType, nominalValue) => {
    await dataApi.put(`/collaterals/${_id}`, {
      cltrType,
      nominalValue
    });
    navigate("CollateralsList"), { _id };
  };
};

export const { Provider, Context } = createDataContext(
  CollateralsReducer,
  { fetchCollaterals, deleteCollateral, addCollateral, editCollateral },
  []
);
