import common_axios from "../../utils/axios.config";
import { BASIC_DETAILS, BASIC_ID, GENDER, LOWER_BODY, UPPER_BODY } from "./types";


export const get_my_measurements = () => async (dispatch) => {
    // try {
    //     const { data } = await common_axios.get('/sliders')

    //     if (data.data) {
    //         dispatch({ type: MENS_WEAR_SLIDER, payload: data.data })
    //     }

    // } catch (err) {
    //     console.log(err?.response?.data);
    //     return Promise.reject(err);
    // }
};

export const set_basic_details = (val) => ({
    type: BASIC_DETAILS,
    payload: val
})

export const set_gender = (val) => ({
    type: GENDER,
    payload: val
})

export const set_upper_body = (val) => ({
    type: UPPER_BODY,
    payload: val
})

export const set_lower_body = (val) => ({
    type: LOWER_BODY,
    payload: val
})

export const set_basic_id = (val) => ({
    type: BASIC_ID,
    payload: val
})