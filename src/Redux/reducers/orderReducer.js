import {
  GET_ADDRESS_FAILED,
  GET_ADDRESS_REQUEST,
  GET_ADDRESS_SUCCESS,
  ORDER_DETAIL_FAILED,
  ORDER_DETAIL_REQUEST,
  ORDER_DETAIL_SUCCESS,
  TRACK_ORDER_FAILED,
  TRACK_ORDER_REQUEST,
  TRACK_ORDER_SUCCESS,
} from "../actions/types";

export const trackOrderReducer = (
  state = { trackingData: null, loading: false, error: null },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case TRACK_ORDER_REQUEST:
      return { ...state, loading: true };
    case TRACK_ORDER_SUCCESS:
      return { ...state, trackingData: payload, loading: false };
    case TRACK_ORDER_FAILED:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export const orderDetailReducer = (
  state = { order: null, loading: false, error: null },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case ORDER_DETAIL_REQUEST:
      return { ...state, loading: true };
    case ORDER_DETAIL_SUCCESS:
      return { ...state, order: payload, loading: false };
    case ORDER_DETAIL_FAILED:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
