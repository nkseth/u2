import { GET_PRODUCT } from "../actions/types";

export const productDetailReducer = (
  initialState = { details: {} },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCT:
      return { ...initialState, details: payload };

    default:
      return initialState;
  }
};
