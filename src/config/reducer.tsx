import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slices/auth.tsx";
import userDataSlice from "./slices/userDataSlice.tsx";

export const rootReducer = combineReducers({
  auth: authSlice,
  userData: userDataSlice,
});
