import common_axios from "../../utils/axios.config";
import {
  GET_CART,
  REMOVE_FROM_CART,
  REMOVE_FROM_CART_FAILED,
  REMOVE_FROM_CART_REQUEST,
  REMOVE_FROM_CART_SUCCESS,
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
        cart: cart.id,
        item: item.id,
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
