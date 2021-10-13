import common_axios from "../../utils/axios.config";
import {
  CLEAR_ERRORS,
  GET_MY_ADDRESSES_FAILED,
  GET_MY_ADDRESSES_REQUEST,
  GET_MY_ADDRESSES_SUCCESS,
} from "./types";

export const getMyAddresses = () => async (dispatch) => {
  try {
    dispatch({ type: GET_MY_ADDRESSES_REQUEST });
    const { data } = await common_axios.get("/addresses");
    console.log(data);
    if (data.data) {
      dispatch({ type: GET_MY_ADDRESSES_SUCCESS, payload: data.data });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_MY_ADDRESSES_FAILED,
      payload: error,
    });
  }
};

export const addAddress = () => (dispatch) => {};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
