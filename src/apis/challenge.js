import axiosService from "./../commons/axiosService";
import { API_ENDPOINT } from "./../constants";

const url = "auth/admin/challenges";

export const getListChallenge = () => {
  return axiosService.get(`${API_ENDPOINT}/${url}`);
};
