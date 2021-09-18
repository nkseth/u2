import common_axios from "../../utils/axios.config";
import { ADD_TO_BAG, GET_WISHLIST, REMOVE_FROM_WISHLIST } from "./types";

export const add_to_bag = (slug) => async (dispatch) => {
  try {
    const { data } = await common_axios.post(`/addToCart/${slug}`);
    if (data.message) {
      dispatch({ type: ADD_TO_BAG, payload: data.message });
    }
  } catch (err) {
    console.log(err?.response?.data);
    return Promise.reject(err);
  }
};

export const getWishList = () => async (dispatch) => {
  try {
    const { data } = await common_axios.get(`/wishlist`);
    if (data.data) {
      dispatch({ type: GET_WISHLIST, payload: data.data });
    }
  } catch (err) {
    console.log(err?.response?.data);
    return Promise.reject(err);
  }
};

export const removeFromWishlist = (id) => async (dispatch) => {
  try {
    const { data } = await common_axios.delete(`/wishlist/${id}/remove`);
    if (data) {
      dispatch({ type: REMOVE_FROM_WISHLIST, payload: data });
    }
  } catch (err) {
    console.log(err?.response?.data);
    return Promise.reject(err);
  }
};
