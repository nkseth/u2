import { LOAD_USER, LOGIN, LOGIN_REQUEST, LOGOUT } from "../actions/types";

export const authReducer = (
  initialState = { loading: false, isAuthenticated: false, user: {} },
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
