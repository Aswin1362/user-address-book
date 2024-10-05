import apiClient from "./apiInstance.tsx";
import { apiRoutes } from "./apiRoutes.tsx";

export const apiServices = {
  loginUser(payload) {
    return apiClient.post(apiRoutes.loginUser, payload);
  },
  getAllUserAddress(payload) {
    return apiClient.get(apiRoutes.getAllUserAddress, { params: payload });
  },
  addUserAddress(payload) {
    return apiClient.post(apiRoutes.addUserAddress, payload);
  },
};
