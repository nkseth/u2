import {
  GET_CART,
  REMOVE_FROM_CART_FAILED,
  REMOVE_FROM_CART_REQUEST,
  REMOVE_FROM_CART_SUCCESS,
} from "../actions/types";

export const cartItemsReducer = (initialState = { cart: null }, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CART: {
      // Object.assign(initialState.cart, payload);
      return { ...initialState, cart: payload };
    }

    default:
      return initialState;
  }
};

export const removeCartItemReducer = (
  initialState = { message: null, loading: false, error: null },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case REMOVE_FROM_CART_REQUEST:
      return { ...initialState, loading: true };

    case REMOVE_FROM_CART_SUCCESS: {
      // Object.assign(initialState.cart, payload);
      return { ...initialState, message: payload, loading: false };
    }
    case REMOVE_FROM_CART_FAILED:
      return { ...initialState, error: payload, loading: false };

    default:
      return initialState;
  }
};
