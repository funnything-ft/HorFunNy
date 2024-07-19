import apiInstance from "../utils/axios";
import { authActions } from "./auth-slice";
import { json, redirect } from "react-router-dom";

export const login = (credentials) => async (dispatch) => {
  try {
    const response = await apiInstance.post("login/", credentials);
    if (response.status === 200) {
      dispatch(authActions.login());
    }
    return response;
  } catch (err) {
    throw json({ message: err.response.data.message }, { status: 500 });
  }
};

export const logout = () => async (dispatch) => {
  try {
    const response = await apiInstance.post("logout/");
    if (response.status === 200) {
      redirect("/");
      return dispatch(authActions.logout());
    }
    return response;
  } catch (err) {
    throw json({ message: err.response.data.message }, { status: 500 });
  }
};
