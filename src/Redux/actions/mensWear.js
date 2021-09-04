import common_axios from "../../utils/axios.config";
import { MENS_ACTIVE_PRODUCT, MENS_WEAR_CAT, MENS_WEAR_SLIDER, MENS_WEAR_SUBGRP, SELECTED_SUB_GRP } from "./types";


export const get_mens_wear_slider = () => async (dispatch) => {
    try {
        const { data } = await common_axios.get('/sliders')

        if (data.data) {
            dispatch({ type: MENS_WEAR_SLIDER, payload: data.data })
        }

    } catch (err) {
        console.log(err?.response?.data);
        return Promise.reject(err);
    }
};

export const get_mens_wear_cat = (type) => async (dispatch) => {
    try {
        const { data } = await common_axios.post('/themeOption',{
            dashboard_type:'comman',
            'content_type':type,
            'group_name':"category_to_bag"
        })

        if (data.category_to_bag) {
            dispatch({ type: MENS_WEAR_CAT, payload: data.category_to_bag })
        }

    } catch (err) {
        console.log(err?.response?.data);
        return Promise.reject(err);
    }
};



export const get_mens_wear_subgrp = (type) => async (dispatch) => {
    try {
        const { data } = await common_axios.get(`/category-subgrps/${type}`)

        if (data.data) {
            dispatch({ type: MENS_WEAR_SUBGRP, payload: data.data[0]?.categories })
        }

    } catch (err) {
        console.log(err?.response?.data);
        return Promise.reject(err);
    }
};


export const setSelectedSubGrp = (val) => (
    {
      type: SELECTED_SUB_GRP,
      payload: val
    }
  );


  export const get_mens_active_product = (type, active) => async (dispatch) => {
    if(active == 'all'){
        try {
            const { data } = await common_axios.post(`/product_by_category`,{
                group:type
            })
            console.log(data)
            if (data.product) {
                dispatch({ type: MENS_ACTIVE_PRODUCT, payload: data.product })
            }
    
        } catch (err) {
            console.log(err?.response?.data);
            return Promise.reject(err);
        }
    } else {
        try {
            const { data } = await common_axios.post(`/product_by_category`,{
                slug: active
            })
            console.log(data)
            if (data.product) {
                dispatch({ type: MENS_ACTIVE_PRODUCT, payload: data.product })
            }
    
        } catch (err) {
            console.log(err?.response?.data);
            return Promise.reject(err);
        }
    }
};