import common_axios from "../../utils/axios.config";
import { REMOVE_FROM_CART } from "./types";

export const removeFromBag = (item, cart, token) => async (dispatch) => {
  try {
    const { data } = await common_axios.delete("/cart/removeItem", {
      item,
      cart,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    if (data) {
      dispatch({ type: REMOVE_FROM_CART, payload: data });
    }
  } catch (err) {
    console.log(err?.response);
    return Promise.reject(err);
  }
};
