import React from "react";
import { RootState } from "../config/store";
import { useDispatch, useSelector } from "react-redux";
import { allRoutes } from "../allRoutes.tsx";
import { useNavigate } from "react-router-dom";
import { logout } from "../config/slices/auth.tsx";
import { useGetAllUserAddress } from "../hooks/useGetAllUserAddress.tsx";

export const HomeDashboard = () => {
  const routes = allRoutes;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.auth.user_id);
  const currentStateValues = useSelector((state: RootState) => state);
  const { allUserAddress, error } = useGetAllUserAddress(userId);

  console.log("ALL_USER_ADDR: ", allUserAddress, "ALL_USER_ERR: ", error);

  console.log("currentStateValues: ", currentStateValues);

  const handleLogout = () => {
    dispatch(logout());
    navigate(routes.login);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
        // padding: "20px",
        border: "1px solid",
        width: "100%",
        position: "relative",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          border: "1px solid",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1,
        }}
      >
        <h1 style={{ flex: 1, border: "1px solid", display: "flex" }}>
          Home Dashboard
        </h1>
        <button
          style={{
            backgroundColor: "red",
            color: "white",
            fontSize: "13px",
            border: "none",
            height: "30px",
            width: "100px",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={handleLogout}
        >
          LOGOUT
        </button>
      </div>
      <div>
        <table style={{ border: "1px solid" }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {allUserAddress?.map((address: any, index: number) => {
              return (
                <tr key={index}>
                  <td>{address.id}</td>
                  <td>{address.username}</td>
                  <td>{address.email}</td>
                  <td>{address.phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <button
          onClick={() => {
            navigate(routes.addressForm);
          }}
        >
          Add Address
        </button>
      </div>
    </div>
  );
};
