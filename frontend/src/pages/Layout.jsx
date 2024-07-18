import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import apiInstance from "../utils/axios";
import { dispatch } from "../store";
import { authActions } from "../store/auth-slice";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;

export function CheckSessionExpiration() {
  return apiInstance.get("login/").then((res) => {
    if (res.data.isAuthenticated) {
      return dispatch(authActions.login());
    }
    return null;
  });
}
