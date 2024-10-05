import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user_id: localStorage.getItem("user_id") || 0,
    token: localStorage.getItem("token") || null,
    isAuthenticated: localStorage.getItem("token") ? true : false,
  },
  reducers: {
    login: (state, action) => {
      state.user_id = action.payload.user_id;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user_id = 0;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
      localStorage.removeItem("user_id");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
