import common_axios from "../../utils/axios.config";
import {
  BASIC_DETAILS,
  BASIC_ID,
  DELETE_MEASUREMENT,
  GENDER,
  GET_ALL_MEASUREMENTS,
  GET_SINGLE_MEASUREMENT,
  LOWER_BODY,
  SAVE_MEASUREMENT,
  UPPER_BODY,
} from "./types";

export const getAllMeasurements = (token) => async (dispatch) => {
  try {
    const { data } = await common_axios.post("/get_measurment_basic", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    if (data) {
      dispatch({ type: GET_ALL_MEASUREMENTS, payload: data });
    }
  } catch (err) {
    console.log(err?.response?.data);
    return Promise.reject(err);
  }
};

export const saveMeasurement = (token, sizeData) => async (dispatch) => {
  try {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await common_axios.post(
      "/save_measurment_value",
      sizeData,
      headers
    );
    console.log(data);

    if (data) {
      dispatch({ type: SAVE_MEASUREMENT, payload: data });
    }
  } catch (err) {
    console.log(err?.response?.data);
    return Promise.reject(err);
  }
};

export const getSingleMeasurement = (token, id) => async (dispatch) => {
  try {
    console.log(id);
    const { data } = await common_axios.get(`/get_measurment/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    console.log(data[0]);
    if (data.data[0]) {
      dispatch({ type: GET_SINGLE_MEASUREMENT, payload: data.data[0] });
    }
  } catch (err) {
    console.log(err?.response?.data);
    return Promise.reject(err);
  }
};

export const deleteMeasurement = (token, id) => async (dispatch) => {
  try {
    const { data } = await common_axios.delete(
      `/delete_measurment_basic/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data);

    if (data) {
      dispatch({ type: DELETE_MEASUREMENT, payload: data.message });
    }
  } catch (err) {
    console.log(err?.response?.data);
    return Promise.reject(err);
  }
};

// export const get_my_measurements = () => async (dispatch) => {
//   // try {
//   //     const { data } = await common_axios.get('/sliders')
//   //     if (data.data) {
//   //         dispatch({ type: MENS_WEAR_SLIDER, payload: data.data })
//   //     }
//   // } catch (err) {
//   //     console.log(err?.response?.data);
//   //     return Promise.reject(err);
//   // }
// };

export const set_basic_details = (val) => ({
  type: BASIC_DETAILS,
  payload: val,
});

export const set_gender = (val) => ({
  type: GENDER,
  payload: val,
});

export const set_upper_body = (val) => ({
  type: UPPER_BODY,
  payload: val,
});

export const set_lower_body = (val) => ({
  type: LOWER_BODY,
  payload: val,
});

export const set_basic_id = (val) => ({
  type: BASIC_ID,
  payload: val,
});
