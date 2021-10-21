import {
  GET_CART,
  REMOVE_FROM_CART_FAILED,
  REMOVE_FROM_CART_REQUEST,
  REMOVE_FROM_CART_SUCCESS,
  GET_COUPONS_REQUEST,
  GET_COUPONS_SUCCESS,
  GET_COUPONS_FAILED,
  CLEAR_ERRORS,
} from "../actions/types";

export const cartItemsReducer = (initialState = { cart: false }, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CART: {
      Object.assign(initialState.cart, payload);
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
      // Object.assign(initialState, payload);
      return { ...initialState, message: payload, loading: false };
    }
    case REMOVE_FROM_CART_FAILED:
      return { ...initialState, error: payload, loading: false };
    case CLEAR_ERRORS:
      return { ...initialState, error: null, message: null };
    default:
      return initialState;
  }
};

export const couponsReducer = (
  initialState = { couponList: null, loading: false, error: null },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case GET_COUPONS_REQUEST:
      return { ...initialState, loading: true };

    case GET_COUPONS_SUCCESS: {
      // Object.assign(initialState, payload);
      return { ...initialState, couponList: payload, loading: false };
    }
    case GET_COUPONS_FAILED:
      return { ...initialState, error: payload, loading: false };

    default:
      return initialState;
  }
};
