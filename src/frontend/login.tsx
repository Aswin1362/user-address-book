import React, { useState } from "react";
import { allRoutes } from "../allRoutes.tsx";
import { loginAPIThunk } from "../thunk/loginAPIThunk.tsx";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../config/store.tsx";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const routes = allRoutes;
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const currentStateValues = useSelector((state: RootState) => state);

  console.log("currentStateValues: ", currentStateValues);

  const handleLogin = async (e) => {
    e.preventDefault();
    // localStorage.clear();
    await dispatch(loginAPIThunk(email, password));
    navigate(routes.homeDashboard);
  };

  return (
    <div
      style={{
        padding: "20px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        borderRadius: "5px",
        backgroundColor: "white",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <form
        id="loginForm"
        name="loginForm"
        onSubmit={(e) => handleLogin(e)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <span style={{ fontSize: "13px", margin: "0px 0px 5px 0px" }}>
          Email
        </span>
        <input
          type="email"
          style={{
            border: "2px solid #ccc",
            borderRadius: "5px",
            width: "300px",
            height: "25px",
          }}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <span style={{ fontSize: "13px", margin: "5px 0px 0px 0px" }}>
          Password
        </span>
        <input
          type="password"
          className="password"
          style={{
            border: "2px solid #ccc",
            borderRadius: "5px",
            width: "300px",
            height: "25px",
            marginTop: "10px",
          }}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          type="submit"
          style={{
            border: "none",
            borderRadius: "5px",
            width: "100%",
            height: "35px",
            marginTop: "20px",
            cursor: "pointer",
            backgroundColor: "green",
            color: "white",
            transition: "background-color 0.3s ease, transform 0.3s ease",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLButtonElement).style.backgroundColor = "darkgreen";
            (e.target as HTMLButtonElement).style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLButtonElement).style.backgroundColor = "green";
            (e.target as HTMLButtonElement).style.transform = "scale(1)";
          }}
        >
          Login
        </button>
        <span
          style={{
            textAlign: "center",
            marginTop: "10px",
            color: "gray",
            fontSize: "12px",
          }}
        >
          Don't have an account?
          <a
            href={routes.signUp}
            style={{
              color: "blue",
              marginLeft: "5px",
            }}
          >
            Sign Up
          </a>
        </span>
      </form>
    </div>
  );
};
