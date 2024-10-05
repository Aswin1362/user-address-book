import { useState } from "react";
import { apiServices } from "../api/apiServices.tsx";

interface UserAddressProps {
  username: string;
  email: string;
  phone: string;
  userId: string | number;
}

export const useAddUsersAddress = ({
  username,
  email,
  phone,
  userId,
}: UserAddressProps) => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const payload = {
    username: username,
    email: email,
    phone: phone,
    userId: userId,
  };

  const sendAddUserAddressRequest = async () => {
    await apiServices
      .addUserAddress(payload)
      .then((response) => {
        if (response.data?.status === true) {
          setMessage(response.data?.message);
        } else {
          setMessage(response.data?.message);
        }
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  };

  return { message, error, sendAddUserAddressRequest };
};
