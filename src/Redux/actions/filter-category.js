import common_axios from "../../utils/axios.config";
import {
  CLEAR_FILTER_DATA,
  GET_FILTERED_PRODUCT,
  GET_FILTER_LIST,
  SET_FILTER_DATA,
} from "./types";

export const getFilterList = () => async (dispatch) => {
  try {
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

export const getFilteredProduct = (slug, fiteredData) => async (dispatch) => {
  try {
    console.log("Filter Data", slug, fiteredData);
    const { data } = await common_axios.post(
      `/getCategoryByProduct/${slug}`,
      fiteredData
    );
    console.log(data);
    if (data) {
      dispatch({ type: GET_FILTERED_PRODUCT, payload: data });
    }
  } catch (err) {
    console.log(err?.response?.data);
    return Promise.reject(err);
  }
};

export const storefilterData =
  (attribute_id, attributeValue_id, type) => (dispatch) => {
    dispatch({
      type: SET_FILTER_DATA,
      payload: { [type]: { attribute_id, attributeValue_id } },
    });
  };

export const clearFilterData = (type) => (dispatch) => {
  dispatch({
    type: CLEAR_FILTER_DATA,
    payload: { [type]: null },
  });
};
