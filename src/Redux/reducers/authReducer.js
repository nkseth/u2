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
} from "../actions/types";

export const authReducer = (
  initialState = {
    loading: false,
    isAuthenticated: false,
    user: {},
    error: null,
  },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST:
      return { ...initialState, loading: true };
    case LOGIN:
    case LOAD_USER:
      return {
        ...initialState,
        isAuthenticated: true,
        user: payload,
        loading: false,
      };
    case LOGOUT:
      return { ...initialState, isAuthenticated: false, user: null };

    default:
      return initialState;
  }
};
export const registerUserReducer = (
  initialState = {
    loading: false,
    message: null,
    error: null,
  },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_USER_REQUEST:
    case VERIFY_OTP_REQUEST:
      return { ...initialState, loading: true };
    case REGISTER_USER_SUCCESS:
    case VERIFY_OTP_SUCCESS:
      return {
        ...initialState,
        message: payload,
        loading: false,
      };
    case REGISTER_USER_FAILED:
    case VERIFY_OTP_FAILED:
      return { ...initialState, error: payload, loading: false };
    case CLEAR_ERRORS:
      return { ...initialState, error: null, message: null, loading: false };
    default:
      return initialState;
  }
};
