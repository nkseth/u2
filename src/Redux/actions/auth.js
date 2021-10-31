import common_axios from "../../utils/axios.config";
import {
  CLEAR_ERRORS,
  LOAD_USER,
  LOGIN,
  LOGIN_REQUEST,
  LOGOUT,
  REGISTER_USER_FAILED,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  VERIFY_OTP_FAILED,
  VERIFY_OTP_REQUEST,
  VERIFY_OTP_SUCCESS,
  OAUTH_SIGNUP
} from "./types";

export const login = (userCreds) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const { data } = await common_axios.post("/auth/login", userCreds);

    if (data.data) {
      localStorage.setItem("token", JSON.stringify(data.data.api_token));
      localStorage.setItem("isLogged", true);
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
      localStorage.setItem("isLogged", false);
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
    console.log('token',data)
    if (data.data) {
      dispatch({ type: LOAD_USER, payload: data.data });
    }
  } catch (e) {
    console.log(e);
    return Promise.reject(e);
  }
};

export const registerUser = (userCreds) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });
    const { data } = await common_axios.post("/auth/register", userCreds);
    if (data.message)
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.message });
  } catch (e) {
    dispatch({ type: REGISTER_USER_FAILED, payload: e.response.data });
  }
};

export const registOtpVerify = (otp, email) => async (dispatch) => {
  try {
    dispatch({ type: VERIFY_OTP_REQUEST });
    const { data } = await common_axios.post("/auth/otp_varify_for_web", {
      otp,
      email,
    });
    console.log(data.message);
    if (data) dispatch({ type: VERIFY_OTP_SUCCESS, payload: data.message });
  } catch (e) {
    console.log(e);
    dispatch({ type: VERIFY_OTP_FAILED, payload: e.response.data });
  }
};

export const clearAuth = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

export const PostOauthSignup = (userData,type) =>  {
  return new Promise((resolve, reject) => {
    fetch("http://127.0.0.1:8000/api"+ type, {
      method: 'POST',
      body: JSON.stringify(userData)
    })
    .then((response) => response.json())
    .then((res) => {
      resolve(res);
    })
    .catch((error) => {
      reject(error);
    });
  });

}

export const socialLogin = (userCreds, provider) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const { data } = await common_axios.post("auth/social/"+provider, userCreds);
    console.log('data', data)
    if (data.data) {
      localStorage.setItem("token", JSON.stringify(data.data.api_token));
      localStorage.setItem("isLogged", true);
      dispatch({ type: LOGIN, payload: data.data });
    }
  } catch (e) {
    alert("Sometinh went wrong");
    console.log(e);
  }
};

