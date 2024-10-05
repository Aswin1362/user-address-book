import React, { useState } from "react";
import { useAddUsersAddress } from "../hooks/useAddUsersAddress.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../config/store";

export const AddressForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const userId = useSelector((state: RootState) => state.auth.user_id);
  const { message, error, sendAddUserAddressRequest } = useAddUsersAddress({
    username,
    email,
    phone,
    userId,
  });

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendAddUserAddressRequest();
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
      <h1 style={{ textAlign: "center" }}>Add Address</h1>
      <form
        onSubmit={handleSubmitForm}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <span style={{ fontSize: "13px", margin: "0px 0px 5px 0px" }}>
          Name
        </span>
        <input
          type="text"
          value={username}
          style={{
            border: "2px solid #ccc",
            borderRadius: "5px",
            width: "300px",
            height: "25px",
          }}
          onChange={(e) => setUsername(e.target.value)}
        />
        <span style={{ fontSize: "13px", margin: "5px 0px 5px 0px" }}>
          Email
        </span>
        <input
          type="email"
          value={email}
          style={{
            border: "2px solid #ccc",
            borderRadius: "5px",
            width: "300px",
            height: "25px",
            appearance: "none",
            WebkitAppearance: "none",
          }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span style={{ fontSize: "13px", margin: "5px 0px 5px 0px" }}>
          Mobile
        </span>
        <input
          type="text"
          value={phone}
          style={{
            border: "2px solid #ccc",
            borderRadius: "5px",
            width: "300px",
            height: "25px",
          }}
          onChange={(e) => setPhone(e.target.value)}
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
          Submit
        </button>
      </form>
      {message && <p>{message}</p>}
      {error && <p>{error.toString()}</p>}
    </div>
  );
};
