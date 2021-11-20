import common_axios from '../../utils/axios.config';
import {
  ORDER_DETAIL_FAILED,
  ORDER_DETAIL_REQUEST,
  ORDER_DETAIL_SUCCESS,
  TRACK_ORDER_FAILED,
  TRACK_ORDER_REQUEST,
  TRACK_ORDER_SUCCESS,
} from './types';

export const trackOrders = (orderId, token, item_id) => async dispatch => {
  try {
    const id = parseInt(orderId);
    console.log(id, token);
    dispatch({ type: TRACK_ORDER_REQUEST });
    const { data } = await common_axios.post(`/order_item_status`, {
      order_id: orderId,
      product_id: item_id,
    });
    if (data) {
      dispatch({
        type: TRACK_ORDER_SUCCESS,
        payload: data.data,
      });
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: TRACK_ORDER_FAILED,
      payload: err,
    });
    return Promise.reject(err);
  }
};

export const getOrderDetail = orderId => async dispatch => {
  try {
    const id = parseInt(orderId);
    console.log(id);
    dispatch({ type: ORDER_DETAIL_REQUEST });
    const { data } = await common_axios.get(`/order/${orderId}`);
    console.log(data);
    if (data.data) {
      dispatch({
        type: ORDER_DETAIL_SUCCESS,
        payload: data.data,
      });
    }
  } catch (err) {
    console.log(err.response?.data);
    dispatch({
      type: ORDER_DETAIL_FAILED,
      payload: err,
    });
    return Promise.reject(err);
  }
};
