import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  CLEAR_ERRORS,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_FAILED,
} from "../actions/types";

export const productsReducer = (
  state = { loading: false, productList: null, error: null },
  action
) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        productList: action.payload,
      };
    case GET_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return { ...state, error: null };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { loading: false, details: null, attributes: null, error: null },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case GET_PRODUCT_DETAILS_SUCCESS: {
      // Object.assign(state, payload);
      return {
        ...state,
        loading: false,
        details: payload.data,
        attributes: payload.attribute_details,
      };
    }
    case GET_PRODUCT_DETAILS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return { ...state, error: null };
    default:
      return state;
  }
};
