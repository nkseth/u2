import common_axios from "../../utils/axios.config";
import { LOGOUT } from "./types";

export const logout = () => async (dispatch) => {
  try {
    const { data } = await common_axios.post(`/logout`);
    console.log(data);
    if (data) {
      dispatch({ type: LOGOUT, payload: data });
    }
  } catch (err) {
    console.log(err?.response?.data);
    return Promise.reject(err);
  }
};
