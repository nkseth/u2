import { LOGOUT } from "../actions/types";

export const authReducer = (
  initialState = { isAuthenticated: false },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case LOGOUT:
      return { ...initialState, isAuthenticated: payload };

    default:
      return initialState;
  }
};
