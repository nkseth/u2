import common_axios from "../../utils/axios.config";
import { GET_FILTER_LIST } from "./types";

export const getFilterList = () => async (dispatch) => {
  try {
    console.log("Filter Page");
    const { data } = await common_axios.get("/filterCategory");
    console.log(data);
    if (data) {
      dispatch({ type: GET_FILTER_LIST, payload: data });
    }
  } catch (err) {
    console.log(err?.response?.data);
    return Promise.reject(err);
  }
};
