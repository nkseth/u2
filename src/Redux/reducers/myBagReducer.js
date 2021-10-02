import { GET_CART } from "../actions/types";

export const cartItemsReducer = (initialState = { cart: null }, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CART:
      return { ...initialState, cart: payload };

    default:
      return initialState;
  }
};
