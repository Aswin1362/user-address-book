import React from "react";
import { Login } from "../frontend/login.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignUp } from "../frontend/signUp.tsx";
import { HomeDashboard } from "../frontend/home-dashboard.tsx";
import { ProtectedRoutes } from "./protected.routes.tsx";
import { AddressForm } from "../frontend/address-form.tsx";
import { allRoutes } from "../allRoutes.tsx";

export const AppRoutes = () => {
  const routes = allRoutes;
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoutes element={<HomeDashboard />} />,
    },
    {
      path: routes.homeDashboard,
      element: <HomeDashboard />,
    },
    {
      path: routes.login,
      element: <Login />,
    },
    {
      path: routes.signUp,
      element: <SignUp />,
    },
    {
      path: routes.addressForm,
      element: <AddressForm />,
    },
  ]);

  return (
    <div
      style={{
        border: "1px solid",
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RouterProvider router={router} />
    </div>
  );
};
