import { dispatch } from "../store";
import { authActions } from "../store/auth-slice";
import apiInstance from "../utils/axios";
import { json } from "react-router-dom";

export function action() {
  return apiInstance
    .post("logout/")
    .then(() => {
      return dispatch(authActions.logout());
    })
    .catch((err) => {
      throw json({ message: err.response.data.message }, { status: 500 });
    });
}
