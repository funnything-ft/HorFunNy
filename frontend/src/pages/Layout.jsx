import React from "react";
import Header from "../components/Header";
import UIModal from "../components/UIModal";
import UIButton from "../components/UIButton";
import { Outlet } from "react-router-dom";
import apiInstance from "../utils/axios";
import { dispatch } from "../store";
import { authActions } from "../store/auth-slice";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";

function Layout() {
  const dispatch = useDispatch();
  const showSessionExpired = useSelector(
    (state) => state.auth.showSessionExpired,
  );
  function handleCloseModal() {
    dispatch(authActions.closeSessionModal());
  }
  return (
    <>
      <UIModal
        show={showSessionExpired}
        centered
        title="Session Expired"
        footer={
          <>
            <UIButton
              onClick={handleCloseModal}
              variant="primary"
              size="lg"
              type="submit"
            >
              Sign In
            </UIButton>
          </>
        }
      >
        <p>Your session has expired. Please log in again.</p>
      </UIModal>
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
