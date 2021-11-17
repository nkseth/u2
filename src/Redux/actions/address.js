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
import Geocode from "react-geocode";

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

// export const getCurrentLocation = (lat,lng) => async (dispatch) => {
//   let address = {}
//       Geocode.fromLatLng(lat, lng).then(
//         (response) => {
//           console.log(response)
//           if (response.status == 'OK') {
//             address = { ...address, street: response.results[0].formatted_address }
//             const letVar = response.results[0].address_components
//             letVar.forEach((item) => {
//               item.types.forEach((qr) => {
//                 if (qr === 'locality') {
//                   address = { ...address, locality: item.long_name }
//                 }
//                 if (qr === 'administrative_area_level_2') {
//                   address = { ...address, city: item.long_name }
//                 }
//                 if (qr === 'administrative_area_level_1') {
//                   address = { ...address, state: item.long_name }
//                 }
//                 if (qr === 'postal_code') {
//                   address = { ...address, pin: item.long_name }
//                 }
//               })
//             })
//             return address
//           }
//         },
//         (error) => {
//           console.error(error);
//         }
//       );

// }