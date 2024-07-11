import React from "react";
import Header from "../components/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import apiInstance from "../utils/axios";

function Layout() {
  const { isAuthenticated } = useLoaderData();
  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;

export function checkSessionExpiration() {
  return apiInstance.get("login/").then((res) => {
    return res.data;
  });
}
