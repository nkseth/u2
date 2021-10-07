import common_axios from "../../utils/axios.config";
import { LOAD_USER, LOGIN, LOGIN_REQUEST, LOGOUT } from "./types";

export const login = (userCreds) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const { data } = await common_axios.post("/auth/login", userCreds);

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

export const loadUser = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");

    const { data } = await common_axios.post("/is_login", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (data.data) {
      dispatch({ type: LOAD_USER, payload: data.data });
    }
  } catch (e) {
    console.log(e);
    return Promise.reject(e);
  }
};
