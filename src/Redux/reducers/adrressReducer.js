import {
  CLEAR_ERRORS,
  GET_MY_ADDRESSES_FAILED,
  GET_MY_ADDRESSES_REQUEST,
  GET_MY_ADDRESSES_SUCCESS,
} from "../actions/types";

export const myAddressesReducer = (
  state = { loading: false, addressList: null },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case GET_MY_ADDRESSES_REQUEST:
      return { ...state, loading: true };
    case GET_MY_ADDRESSES_SUCCESS:
      return {
        ...state,
        addressList: payload,
        loading: false,
      };
    case GET_MY_ADDRESSES_FAILED:
      return { ...state, loading: false, error: payload };
    case CLEAR_ERRORS:
      return { ...state, error: null };
    default:
      return state;
  }
};
