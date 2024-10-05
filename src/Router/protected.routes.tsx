import React from "react";
import { Login } from "../frontend/login.tsx";

export const ProtectedRoutes = ({ element }) => {
  const isAuthenticated = localStorage.getItem("token");

  return isAuthenticated ? element : <Login />;
};
