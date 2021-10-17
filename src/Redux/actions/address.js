import common_axios from "../../utils/axios.config";
import {
  ADD_ADDRESS_FAILED,
  ADD_ADDRESS_REQUEST,
  ADD_ADDRESS_SUCCESS,
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

export const addAddress = (address) => async (dispatch) => {
  try {
    dispatch({ type: ADD_ADDRESS_REQUEST });
    const { data } = await common_axios.post("/address/store", { ...address });
    if (data) {
      console.log(data);
      dispatch({ type: ADD_ADDRESS_SUCCESS, payload: data });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: ADD_ADDRESS_FAILED, payload: error.response.data });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
