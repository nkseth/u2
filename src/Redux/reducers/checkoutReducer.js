import {
  CLEAR_ERRORS,
  GET_ADDRESS_FAILED,
  GET_ADDRESS_REQUEST,
  GET_ADDRESS_SUCCESS,
  PLACE_ORDER_FAILED,
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
} from "../actions/types";

export const addressReducer = (
  state = { addressList: null, loading: false, error: null },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ADDRESS_REQUEST:
      return { ...state, loading: true };
    case GET_ADDRESS_SUCCESS:
      return { ...state, addressList: payload, loading: false };
    case GET_ADDRESS_FAILED:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export const paymentReducer = (
  state = { info: null, loading: false, error: null },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case PLACE_ORDER_REQUEST:
      return { ...state, loading: true };
    case PLACE_ORDER_SUCCESS:
      return { ...state, info: payload, loading: false };
    case PLACE_ORDER_FAILED:
      return { ...state, loading: false, error: payload };
    case CLEAR_ERRORS:
      return { ...state, error: null };
    default:
      return state;
  }
};
