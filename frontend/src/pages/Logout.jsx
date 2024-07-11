import apiInstance from "../utils/axios";
import { json, redirect } from "react-router-dom";

export function action() {
  return apiInstance
    .post("logout/")
    .then(() => {
      return redirect("/");
    })
    .catch((err) => {
      throw json({ message: err.response.data.message }, { status: 500 });
    });
}
