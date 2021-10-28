import common_axios from "../../utils/axios.config";
import {
  ALL_THAT_YOU_WANT,
  CELIBRITY_STYLE,
  GET_BANNER,
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

export const getBanner = (slug) => async (dispatch) => {
  try {
    const { data } = await common_axios.get(`/category-grps/${slug}`);
    if (data.data) {
      dispatch({ type: GET_BANNER, payload: data.data[0] });
    }
  } catch (err) {
    console.log(err?.response?.data);
    return Promise.reject(err);
  }
};

export const get_mens_wear_cat = (type) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING_DATA", payload: true });

    const { data } = await common_axios.post("/themeOption", {
      dashboard_type: "comman",
      content_type: type,
      group_name: "category_to_bag",
    });

    if (data.category_to_bag) {
      dispatch({ type: MENS_WEAR_CAT, payload: data.category_to_bag });
      dispatch({ type: "LOADING_DATA", payload: false });
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
    console.log(data);
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
  console.log(type, "===", active);
  if (active === "all") {
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
      console.log(active);
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
    // console.log(type, group);
    const { data } = await common_axios.get(`/banners/${type}/${group}`);
    // console.log(data);
    if (data.data) {
      dispatch({ type: NEW_COLLECTION, payload: data.data });
    }
  } catch (err) {
    console.log(err?.response?.data);
    return Promise.reject(err);
  }
};

//done
export const get_top_designers = () => async (dispatch) => {
  try {
    const { data } = await common_axios.post(`/themeOptionDesigner`, {
      dashboard_type: "designer_home",
    });
    if (data[0]) {
      dispatch({ type: TOP_DESIGNERS, payload: data[0] });
    }
  } catch (err) {
    console.log(err?.response?.data);
    return Promise.reject(err);
  }
};

export const get_stylish_recommend = (type, group) => async (dispatch) => {
  try {
    console.log(group, type);
    const { data } = await common_axios.get(`/banners/${type}/${group}`);
    console.log(data);
    if (data.data) {
      dispatch({ type: STYLISH_RECOMMEND, payload: data.data });
    }
    // const { data } = await common_axios.post(`/themeOption`, {
    //   dashboard_type: "comman",
    //   content_type: type,
    //   group_name: "stylish_recommendation",
    // });
    // if (data.stylish_recommendation) {
    //   dispatch({
    //     type: STYLISH_RECOMMEND,
    //     payload: data.stylish_recommendation,
    //   });
    // }
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
    console.log(data);
    if (data.data) {
      dispatch({
        type: ALL_THAT_YOU_WANT,
        payload: data.data,
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
