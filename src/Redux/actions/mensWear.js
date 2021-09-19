import common_axios from "../../utils/axios.config";
import {
  ALL_THAT_YOU_WANT,
  CELIBRITY_STYLE,
  MENS_ACTIVE_PRODUCT,
  MENS_WEAR_CAT,
  MENS_WEAR_SLIDER,
  MENS_WEAR_SUBGRP,
  MOST_LOVED,
  NEW_COLLECTION,
  SELECTED_SUB_GRP,
  STYLISH_RECOMMEND,
  TOP_DESIGNERS,
  TOP_OFFERS,
} from "./types";

export const get_mens_wear_slider = () => async (dispatch) => {
  try {
    const { data } = await common_axios.get("/sliders");

    if (data.data) {
      dispatch({ type: MENS_WEAR_SLIDER, payload: data.data });
    }
  } catch (err) {
    console.log(err?.response?.data);
    return Promise.reject(err);
  }
};

export const get_mens_wear_cat = (type) => async (dispatch) => {
  try {
    const { data } = await common_axios.post("/themeOption", {
      dashboard_type: "comman",
      content_type: type,
      group_name: "category_to_bag",
    });

    if (data.category_to_bag) {
      dispatch({ type: MENS_WEAR_CAT, payload: data.category_to_bag });
    }
  } catch (err) {
    console.log(err?.response?.data);
    return Promise.reject(err);
  }
};

export const get_mens_wear_subgrp = (type) => async (dispatch) => {
  try {
    console.log(type);
    const { data } = await common_axios.get(`/category-subgrps/${type}`);

    if (data.data) {
      dispatch({ type: MENS_WEAR_SUBGRP, payload: data.data[0]?.categories });
    }
  } catch (err) {
    console.log(err?.response?.data);
    return Promise.reject(err);
  }
};

export const setSelectedSubGrp = (val) => ({
  type: SELECTED_SUB_GRP,
  payload: val,
});

export const get_mens_active_product = (type, active) => async (dispatch) => {
  if (active == "all") {
    try {
      const { data } = await common_axios.post(`/product_by_category/${type}`, {
        slug: "all",
      });

      console.log(data);

      if (data.product) {
        dispatch({ type: MENS_ACTIVE_PRODUCT, payload: data.product });
      }
    } catch (err) {
      console.log(err?.response?.data);
      return Promise.reject(err);
    }
  } else {
    try {
      const { data } = await common_axios.post(`/product_by_category`, {
        slug: active,
      });
      if (data.product) {
        dispatch({ type: MENS_ACTIVE_PRODUCT, payload: data.product });
      }
    } catch (err) {
      console.log(err?.response?.data);
      return Promise.reject(err);
    }
  }
};

export const get_new_collection = (type, group) => async (dispatch) => {
  try {
    const { data } = await common_axios.get(`/banners/${type}/${group}`);
    if (data[group]) {
      dispatch({ type: NEW_COLLECTION, payload: data[group] });
    }
  } catch (err) {
    console.log(err?.response?.data);
    return Promise.reject(err);
  }
};

//done
export const get_top_designers = (type) => async (dispatch) => {
  try {
    const { data } = await common_axios.post(`/themeOptionDesigner`, {
      dashboard_type: type,
    });

    if (data.top_designer) {
      dispatch({ type: TOP_DESIGNERS, payload: data.top_designer });
    }
  } catch (err) {
    console.log(err?.response?.data);
    return Promise.reject(err);
  }
};

export const get_stylish_recommend = (type) => async (dispatch) => {
  try {
    const { data } = await common_axios.post(`/themeOption`, {
      dashboard_type: "comman",
      content_type: type,
      group_name: "stylish_recommendation",
    });
    console.log(data, "stylish r");
    if (data.stylish_recommendation) {
      dispatch({
        type: STYLISH_RECOMMEND,
        payload: data.stylish_recommendation,
      });
    }
  } catch (err) {
    console.log(err?.response?.data);
    return Promise.reject(err);
  }
};

export const get_most_loved = (type) => async (dispatch) => {
  try {
    const { data } = await common_axios.post(`/themeOption`, {
      dashboard_type: "comman",
      content_type: type,
      group_name: "hand_made_cloth",
    });

    if (data.hand_made_cloth) {
      dispatch({ type: MOST_LOVED, payload: data.hand_made_cloth });
    }
  } catch (err) {
    console.log(err?.response?.data);
    return Promise.reject(err);
  }
};

export const get_all_that_you_want = (type, group) => async (dispatch) => {
  try {
    const { data } = await common_axios.get(`/banners/${type}/${group}`);
    if (data.men_group_3 || data.women_group_3 || data.kid_group_3) {
      dispatch({
        type: ALL_THAT_YOU_WANT,
        payload: data.men_group_3
          ? data.men_group_3
          : data.women_group_3
          ? data.women_group_3
          : data.kid_group_3,
      });
    }
  } catch (err) {
    console.log(err?.response?.data);
    return Promise.reject(err);
  }
};

//done
export const get_top_offers = (type) => async (dispatch) => {
  try {
    const { data } = await common_axios.post(`/themeOption`, {
      dashboard_type: "comman",
      content_type: type,
      group_name: "top_offer_of_the_season",
    });

    if (data.top_offer_of_the_season) {
      dispatch({ type: TOP_OFFERS, payload: data.top_offer_of_the_season });
    }
  } catch (err) {
    console.log(err?.response?.data);
    return Promise.reject(err);
  }
};

export const get_celibrity_style = (type) => async (dispatch) => {
  try {
    const { data } = await common_axios.get(`/CelebrityStyle`);
    if (data) {
      dispatch({ type: CELIBRITY_STYLE, payload: data });
    }
  } catch (err) {
    console.log(err?.response?.data);
    return Promise.reject(err);
  }
};
