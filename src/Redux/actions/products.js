import common_axios from "../../utils/axios.config";
import {
  CLEAR_ERRORS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "./types";

export const getProducts = (type, filter) => async (dispatch) => {
  // console.log(
  //   "🚀 ~ file: products.js ~ line 10 ~ getProducts ~ filter",
  //   filter
  // );
  try {
    // console.log(type, filter);
    dispatch({ type: GET_PRODUCTS_REQUEST });
    let url = "";
    if (type) url = `/getCategoryByProduct/${type}`;
    else url = `/getCategoryByProduct`;
    const { data } = await common_axios.post(url, filter);
    // console.log(data.data);
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

export const clearProductsErrors = () => async (dispatch) =>
  dispatch({ type: CLEAR_ERRORS });
