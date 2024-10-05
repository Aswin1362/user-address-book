import { apiServices } from "../api/apiServices.tsx";
import { login } from "../config/slices/auth.tsx";
import { AppDispatch } from "../config/store.tsx";

export const loginAPIThunk = (email: string, password: string) => {
  return async (dispatch: AppDispatch) => {
    const payload = {
      email: email,
      password: password,
    };

    await apiServices
      .loginUser(payload)
      .then((response) => {
        if (response?.data?.status === true) {
          console.log(response?.data?.data?.token);
          const userId = response?.data?.data?.user_details.user_id;
          console.log("USER_ID: ", userId);

          const token = response?.data?.data?.token;

          localStorage.setItem("token", token);
          localStorage.setItem("user_id", userId);
          dispatch(login({ user_id: userId, token: token }));
        } else {
          console.log(response?.data?.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
