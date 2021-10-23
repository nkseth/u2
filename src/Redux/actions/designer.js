import common_axios from "../../utils/axios.config";
import {
  GET_DESIGNER_PROFILE_FAILED,
  GET_DESIGNER_PROFILE_REQUEST,
  GET_DESIGNER_PROFILE_SUCCESS,
} from "./types";

export const getDesignerProfile = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_DESIGNER_PROFILE_REQUEST });
    const { data } = await common_axios.get(`/designers_profile/${id}`);
    console.log(data);
    if (data.data) {
      dispatch({
        type: GET_DESIGNER_PROFILE_SUCCESS,
        payload: data.data,
      });
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_DESIGNER_PROFILE_FAILED,
      payload: err,
    });
    return Promise.reject(err);
  }
};
