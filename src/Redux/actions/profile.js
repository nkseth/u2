import common_axios from "../../utils/axios.config";
import { ADDRESS, GET_DESIGNERS, ORDERS, REVIEWS } from "./types";

export const get_my_address = () => async (dispatch) => {
  try {
    const { data } = await common_axios.get("/addresses");
    if (data.data) {
      dispatch({ type: ADDRESS, payload: data.data });
    }
  } catch (err) {
    console.log(err?.response?.data);
    return Promise.reject(err);
  }
};

export const get_designers = () => async (dispatch) => {
  try {
    const { data } = await common_axios.get("/designers");
    if (data.data) {
      dispatch({
        type: GET_DESIGNERS,
        payload: data.data,
      });
    }
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

export const get_reviews = (setLoading) => async (dispatch) => {
  try {
    const { data } = await common_axios.get("/product_review_list");
    if (data) {
      dispatch({
        type: REVIEWS,
        payload: data,
      });
      setLoading(false)
    }
    setLoading(false)
  } catch (err) {
    console.log(err);
    setLoading(false)
    return Promise.reject(err);
  }
};

export const get_orders = () => async (dispatch) => {
  try {
    const { data } = await common_axios.get("/orders");
    console.log(data);
    if (data.data) {
      dispatch({
        type: ORDERS,
        payload: data.data,
      });
    }
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};
