import { LOGIN, LOGOUT } from "../actions/types";

export const authReducer = (
  initialState = { isAuthenticated: false, user: {} },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      return { ...initialState, isAuthenticated: true, user: payload };
    case LOGOUT:
      return { ...initialState, isAuthenticated: false, user: null };

    default:
      return initialState;
  }
};
