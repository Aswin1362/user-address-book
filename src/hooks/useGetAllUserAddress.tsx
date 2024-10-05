import { useEffect, useState } from "react";
import { apiServices } from "../api/apiServices.tsx";

export const useGetAllUserAddress = (userId: number | String) => {
  const [allUserAddress, setAllUserAddress] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const payload = {
      userId: userId,
    };

    const sendGetAllUserAddRequest = async () => {
      await apiServices
        .getAllUserAddress(payload)
        .then((response) => {
          if (response.data?.status === true) {
            setAllUserAddress(response.data.data.addresses);
          } else {
            setError(response.data?.message);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

    if (userId !== 0) {
      sendGetAllUserAddRequest();
    } else {
      console.log("userId is 0");
    }
  }, [userId]);

  return { allUserAddress, error };
};
