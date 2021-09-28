import common_axios from "../../utils/axios.config";
import { GET_PRODUCT } from "./types";

export const getProductDescription = (slug) => async (dispatch) => {
  try {
    const { data } = await common_axios.get(`/productDetail/${slug}`);
    console.log(data);
    if (data.data) {
      dispatch({ type: GET_PRODUCT, payload: data.data });
    }
  } catch (err) {
    console.log(err?.response?.data);
    return Promise.reject(err);
  }
};
