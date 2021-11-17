import common_axios from '../../utils/axios.config';
import {
  CLEAR_ERRORS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_DETAILS_FAILED,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_SIMILAR_PRODUCTS_FAILED,
  GET_SIMILAR_PRODUCTS_REQUEST,
  GET_SIMILAR_PRODUCTS_SUCCESS,
} from './types';

export const getProducts = (type, filter) => async dispatch => {
  console.log('🚀 ~ file: products.js ~ line 16 ~ filter', filter);
  try {
    dispatch({ type: GET_PRODUCTS_REQUEST });
    let url = '';
    if (type) url = `/getCategoryByProduct/${type}`;
    else url = `/getCategoryByProduct`;
    const { data } = await common_axios.post(url, filter);
    console.log('🚀 ~ file: products.js ~ line 23 ~ data', data);
    if (data.data) {
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: { data: data.data, sorted: false, count: data.count },
      });
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_PRODUCTS_FAIL, payload: err });
    return Promise.reject(err);
  }
};

export const getDesignerProducts = (designerId, filter) => async dispatch => {
  try {
    dispatch({ type: GET_PRODUCTS_REQUEST });
    const { data } = await common_axios.post(
      `/getProductByDesigner/${designerId}`,
      filter
    );
    console.log('🚀 ~ file: products.js ~ line 44 ~ data', data);
    if (data.data) {
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: { data: data.data, sorted: false },
      });
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_PRODUCTS_FAIL, payload: err });
    return Promise.reject(err);
  }
};

export const getProductDetails = slug => async dispatch => {
  try {
    dispatch({ type: GET_PRODUCT_DETAILS_REQUEST });
    const { data } = await common_axios.get(`/productDetail/${slug}`);

    if (data) {
      dispatch({
        type: GET_PRODUCT_DETAILS_SUCCESS,
        payload: data,
      });
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_PRODUCT_DETAILS_FAILED, payload: err });
    return Promise.reject(err);
  }
};

export const getSimilarProducts = tags => async dispatch => {
  try {
    dispatch({ type: GET_SIMILAR_PRODUCTS_REQUEST });
    const { data } = await common_axios.post(`/similar_product`, { tags });
    if (data.data) {
      dispatch({
        type: GET_SIMILAR_PRODUCTS_SUCCESS,
        payload: data.data,
      });
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_SIMILAR_PRODUCTS_FAILED, payload: err });
    return Promise.reject(err);
  }
};

export const getSortedProduct =
  (slug, group, type, products) => async dispatch => {
    // try {
    //   dispatch({ type: GET_PRODUCTS_REQUEST });
    //   console.log("Filter Data", slug, group, type);
    //   const { data } = await common_axios.post(`/productSorting`, {
    //     type,
    //     slug,
    //     group,
    //   });
    //   console.log(data.data);
    //   if (data.data) {
    //     console.log(data);
    //     dispatch({
    //       type: GET_PRODUCTS_SUCCESS,
    //       payload: { data: data.data, sorted: true },
    //     });
    //   }
    // } catch (err) {
    //   console.log(err?.response?.data);
    //   dispatch({ type: GET_PRODUCTS_FAIL, payload: err });
    //   return Promise.reject(err);
    // }
    //products.sort(function (a, b) { return a.readymade_price - b.readymade_price; });
    dispatch({ type: GET_PRODUCTS_REQUEST });
    if (type === 'new') {
      const new_prods = products.sort(function (a, b) {
        return new Date(b.created_at) - new Date(a.created_at);
      });
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: { data: new_prods, sorted: true },
      });
      return;
    }

    if (type === 'lowToHeigh') {
      const new_prods = products.sort(function (a, b) {
        return a.readymade_price - b.readymade_price;
      });
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: { data: new_prods, sorted: true },
      });
      return;
    }

    if (type === 'heighTolow') {
      const new_prods = products.sort(function (a, b) {
        return b.readymade_price - a.readymade_price;
      });
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: { data: new_prods, sorted: true },
      });
      return;
    }
  };

export const clearProductsErrors = () => async dispatch =>
  dispatch({ type: CLEAR_ERRORS });
