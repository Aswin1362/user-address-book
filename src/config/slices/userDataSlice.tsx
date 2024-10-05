import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    user_id: 0,
    username: "",
    email: "",
    phone: "",
  },
  reducers: {
    setUserDetails: (state, action) => {
      state.user_id = action.payload.user_id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
    },
    resetUserDetails: (state) => {
      state.user_id = 0;
      state.username = "";
      state.email = "";
      state.phone = "";
    },
  },
});

export const { setUserDetails, resetUserDetails } = userDataSlice.actions;

export default userDataSlice.reducer;
