import common_axios from "../../utils/axios.config";
import { LOGIN, LOGOUT } from "./types";

export const login = (userCreds) => async (dispatch) => {
  try {
    const { data } = await common_axios.post("/auth/login", userCreds);

    console.log(data);

    if (data.data) {
      localStorage.setItem("token", JSON.stringify(data.data.api_token));
      dispatch({ type: LOGIN, payload: data.data });
    }
  } catch (e) {
    alert("Invalid Email or Password");
    console.log(e);
  }
};

export const logout = () => async (dispatch) => {
  try {
    const userToken = localStorage.getItem("token");
    console.log(userToken);
    const { data } = await common_axios.post(`/auth/logout`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });

    if (data) {
      localStorage.removeItem("token");
      console.log(data);
      dispatch({ type: LOGOUT, payload: false });
    }
  } catch (err) {
    console.log(err?.response?.data);
    return Promise.reject(err);
  }
};
