import React from "react";

export const SignUp = () => {
  return (
    <div
      style={{
        padding: "20px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        borderRadius: "5px",
        backgroundColor: "white",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Sign Up</h1>
      <form action="" style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: "13px", margin: "0px 0px 5px 0px" }}>
          Name
        </span>
        <input
          type="text"
          style={{
            border: "2px solid #ccc",
            borderRadius: "5px",
            width: "300px",
            height: "25px",
          }}
        />
        <span style={{ fontSize: "13px", margin: "5px 0px 5px 0px" }}>
          Email
        </span>
        <input
          type="email"
          style={{
            border: "2px solid #ccc",
            borderRadius: "5px",
            width: "300px",
            height: "25px",
            appearance: "none",
            WebkitAppearance: "none",
          }}
        />
        <span style={{ fontSize: "13px", margin: "5px 0px 5px 0px" }}>
          Mobile
        </span>
        <input
          type="text"
          name=""
          id=""
          style={{
            border: "2px solid #ccc",
            borderRadius: "5px",
            width: "300px",
            height: "25px",
          }}
        />
        <span style={{ fontSize: "13px", margin: "5px 0px 5px 0px" }}>
          Password
        </span>
        <input
          type="password"
          name=""
          id=""
          style={{
            border: "2px solid #ccc",
            borderRadius: "5px",
            width: "300px",
            height: "25px",
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
          Sign Up
        </button>
      </form>
    </div>
  );
};
