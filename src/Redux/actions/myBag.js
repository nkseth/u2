import common_axios from "../../utils/axios.config";
import {
  GET_CART,
  GET_COUPONS_REQUEST,
  GET_COUPONS_SUCCESS,
  GET_COUPONS_FAILED,
  REMOVE_FROM_CART,
  REMOVE_FROM_CART_FAILED,
  REMOVE_FROM_CART_REQUEST,
  REMOVE_FROM_CART_SUCCESS,
  CLEAR_ERRORS,
} from "./types";

export const getCartItems = () => async (dispatch) => {
  try {
    const { data } = await common_axios.get("/carts");

    console.log(data);
    if (data.data[0]) {
      dispatch({ type: GET_CART, payload: data.data[0] });
    }
  } catch (e) {
    console.log(e.response);
  }
};

export const removeFromBag = (item, cart) => async (dispatch) => {
  try {
    dispatch({ type: REMOVE_FROM_CART_REQUEST });
    const { data } = await common_axios.delete("/cart/removeItem", {
      data: {
        cart,
        item,
      },
    });
    console.log(data);
    if (data.message) {
      dispatch({ type: REMOVE_FROM_CART_SUCCESS, payload: data.message });
    }
  } catch (err) {
    console.log(err?.response.data);
    dispatch({ type: REMOVE_FROM_CART_FAILED, payload: err.response.data });
    return Promise.reject(err);
  }
};

export const getCoupons = () => async (dispatch) => {
  try {
    dispatch({ type: GET_COUPONS_REQUEST });
    const { data } = await common_axios.get("/coupons");
    console.log(data.data);
    if (data.data) {
      dispatch({ type: GET_COUPONS_SUCCESS, payload: data.data });
    }
  } catch (err) {
    console.log(err?.response.data);
    dispatch({ type: GET_COUPONS_FAILED, payload: err.response.data });
    return Promise.reject(err);
  }
};

export const clearCartError = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
