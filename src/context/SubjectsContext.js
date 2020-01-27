import createDataContext from "./createDataContext";
import dataApi from "../api/jsonServer";
import { navigate } from "../navigationRef";

const SubjectReducer = (state, action) => {
  switch (action.type) {
    case "fetch_subjects":
      return action.payload;
    case "delete_subject":
      return state.filter(subject => subject._id !== action.payload);
    default:
      return state;
  }
};

const fetchSubjects = dispatch => async () => {
  const response = await dataApi.get("/subjects");
  dispatch({ type: "fetch_subjects", payload: response.data });
};

const addSubject = dispatch => async (
  firstName,
  lastName,
  city,
  street,
  zipCode,
  subjectType
) => {
  await dataApi.post("/subjects", {
    firstName,
    lastName,
    city,
    street,
    zipCode,
    subjectType
  });
};

const deleteSubject = dispatch => {
  return async _id => {
    await dataApi.delete(`/subjects/${_id}`);
    dispatch({ type: "delete_subject", payload: _id });
  };
};

const editSubject = dispatch => {
  return async (_id, firstName, lastName, city, street, zipCode, subjectType) => {
    await dataApi.put(`/subjects/${_id}`, {
      firstName,
      lastName,
      city,
      street,
      zipCode,
      subjectType
    });
    navigate("SubjectsList"), { _id };
  };
};

export const { Provider, Context } = createDataContext(
  SubjectReducer,
  { fetchSubjects, addSubject, deleteSubject, editSubject },
  []
);
