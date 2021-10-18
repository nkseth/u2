import common_axios from "../../utils/axios.config";
import {
  CLEAR_ERRORS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_DETAILS_FAILED,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_PRODUCT_DETAILS_SUCCESS,
} from "./types";

export const getProducts = (type, filter) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCTS_REQUEST });
    let url = "";
    if (type) url = `/getCategoryByProduct/${type}`;
    else url = `/getCategoryByProduct`;
    const { data } = await common_axios.post(url, filter);
    if (data.data) {
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: data.data,
      });
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_PRODUCTS_FAIL, payload: err });
    return Promise.reject(err);
  }
};
export const getProductDetails = (slug) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_DETAILS_REQUEST });
    const { data } = await common_axios.get(`/productDetail/${slug}`);
    console.log(data);
    if (data) {
      dispatch({
        type: GET_PRODUCT_DETAILS_SUCCESS,
        payload: data,
      });
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_PRODUCT_DETAILS_FAILED, payload: err });
    return Promise.reject(err);
  }
};

export const clearProductsErrors = () => async (dispatch) =>
  dispatch({ type: CLEAR_ERRORS });
