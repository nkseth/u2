import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  CLEAR_ERRORS,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_FAILED,
  GET_SIMILAR_PRODUCTS_REQUEST,
  GET_SIMILAR_PRODUCTS_SUCCESS,
  GET_SIMILAR_PRODUCTS_FAILED,
} from "../actions/types";

export const productsReducer = (
  state = { loading: false, productList: null, error: null, sorted: false },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        productList: payload.data,
        sorted: payload.sorted,
      };
    case GET_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        sorted: false,
      };
    case CLEAR_ERRORS:
      return { ...state, error: null };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = {
    loading: false,
    details: false,
    attributes: null,
    tags: null,
    error: null,
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case GET_PRODUCT_DETAILS_SUCCESS: {
      Object.assign(state.details, payload);
      return {
        ...state,
        loading: false,
        details: payload.data,
        attributes: payload.attribute_details,
        tags: payload.tags,
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

export const similarProductsReducer = (
  state = { loading: false, products: false, error: null },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case GET_SIMILAR_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case GET_SIMILAR_PRODUCTS_SUCCESS: {
      Object.assign(state.products, payload);
      return {
        ...state,
        loading: false,
        products: payload,
      };
    }
    case GET_SIMILAR_PRODUCTS_FAILED:
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
