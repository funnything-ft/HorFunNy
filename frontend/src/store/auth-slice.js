import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    showSessionExpired: false,
  },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
    sessionExpired(state) {
      state.isLoggedIn = false;
      state.showSessionExpired = true;
    },
    closeSessionModal(state) {
      state.showSessionExpired = false;
    },
  },
});

export default authSlice;
export const authActions = authSlice.actions;
