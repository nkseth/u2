import common_axios from '../../utils/axios.config';
import {
  CLEAR_ERRORS,
  GET_ADDRESS_FAILED,
  GET_ADDRESS_REQUEST,
  GET_ADDRESS_SUCCESS,
  PLACE_ORDER_FAILED,
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
} from './types';

export const getAddress = () => async dispatch => {
  try {
    dispatch({ type: GET_ADDRESS_REQUEST });
    const { data } = await common_axios.get('/addresses');
    console.log(data.data);
    if (data.data) {
      dispatch({
        type: GET_ADDRESS_SUCCESS,
        payload: data.data,
      });
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_ADDRESS_FAILED,
      payload: err,
    });
    return Promise.reject(err);
  }
};

export const setPayment = (id, address) => async dispatch => {
  try {
    dispatch({ type: PLACE_ORDER_REQUEST });
    const { data } = await common_axios.put(`/order/${id}/save`);

    if (data.data) {
      dispatch({
        type: PLACE_ORDER_SUCCESS,
        payload: data.data,
      });
    }
  } catch (err) {
    // console.log(err.response.data);
    dispatch({
      type: PLACE_ORDER_FAILED,
      payload: err.response.data.message,
    });
    return Promise.reject(err);
  }
};

export const clearCheckoutErrors = () => async dispatch =>
  dispatch({ type: CLEAR_ERRORS });
