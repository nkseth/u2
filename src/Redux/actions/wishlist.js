import common_axios from "../../utils/axios.config";
import {
  ADD_TO_BAG,
  ADD_TO_WISHLIST,
  CLEAR_WISHLIST_UPDATE,
  GET_WISHLIST,
  REMOVE_FROM_WISHLIST,
  REMOVE_FROM_WISHLIST_REQUEST,
  REMOVE_FROM_WISHLIST_SUCCESS,
} from "./types";

export const add_to_bag = (slug, type) => async (dispatch) => {
  try {
    const { data } = await common_axios.post(`/addToCart/${slug}`, {
      type,
    });
    if (data.message) {
      dispatch({ type: ADD_TO_BAG, payload: data.message });
    }
  } catch (err) {
    console.log(err?.response?.data);
    return Promise.reject(err);
  }
};

export const getWishList = (token) => async (dispatch) => {
  try {
    const { data } = await common_axios.get(`/wishlist`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(data.data);
    if (data.data) {
      dispatch({ type: GET_WISHLIST, payload: data.data });
    }
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

export const addToWishlist = (slug, variant_id) => async (dispatch) => {
  try {
    const { data } = await common_axios.get(`/wishlist/${slug}/add/${variant_id}`);

    if (data) {
      dispatch({ type: ADD_TO_WISHLIST, payload: data.message });
    }
  } catch (err) {
    console.log(err?.response?.data);
    return Promise.reject(err);
  }
};

export const removeFromWishlist = (id, token) => async (dispatch) => {
  try {
    dispatch({ type: REMOVE_FROM_WISHLIST_REQUEST });
    console.log(id, token);
    const { data } = await common_axios.delete(`/wishlist/${id}/remove`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    if (data) {
      dispatch({ type: REMOVE_FROM_WISHLIST_SUCCESS, payload: data.message });
    }
  } catch (err) {
    console.log(err?.response?.data);
    return Promise.reject(err);
  }
};

export const clearUpdateWishlist = () => async (dispatch) => {
  dispatch({
    type: CLEAR_WISHLIST_UPDATE,
  });
};
