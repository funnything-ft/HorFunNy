import axios from "axios";
import { API_BASE_URL } from "./constants";

const apiInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      return Promise.resolve(error.response);
    } else {
      return Promise.reject(error);
    }
  },
);

export default apiInstance;
