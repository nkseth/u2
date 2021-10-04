import common_axios from "../../utils/axios.config";
import DesignerHomePageDataService from "../services/designerHomePage.service";
import {
  GET_CATEGORY_GROUP,
  GET_CATEGORY_SUBGROUP,
  GET_CUSTOMER_REVIEWS,
  GET_HAND_MADE_CLOTHES,
  GET_POPULAR_CATEGORY,
  GET_SUIT_WEAR,
  GET_TOP_CATEGORY,
  GET_TOP_DESIGNERS,
  GET_TOP_SEASON_OFFERS,
  GET_TOP_TRENDING,
} from "./types";

export const topTrending = () => async (dispatch) => {
  try {
    const { data } = await DesignerHomePageDataService.getTrending();
    if (data.trending_categories) {
      dispatch({
        type: GET_TOP_TRENDING,
        payload: data.trending_categories,
      });
    }
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

export const topCategories = (params) => async (dispatch) => {
  try {
    const { data } = await DesignerHomePageDataService.topCategories(params);
    if (data.data) {
      dispatch({ type: GET_TOP_CATEGORY, payload: data.data });
    }
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

export const suitWears = () => async (dispatch) => {
  try {
    const { data } = await DesignerHomePageDataService.suitWear();
    if (data.suit_wear) {
      dispatch({ type: GET_SUIT_WEAR, payload: data.suit_wear });
    }
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

export const popularCategories = () => async (dispatch) => {
  try {
    const { data } = await DesignerHomePageDataService.popularCategory();
    if (data.data) {
      dispatch({ type: GET_POPULAR_CATEGORY, payload: data.data });
    }
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

export const topDesigner = () => async (dispatch) => {
  try {
    const { data } = await DesignerHomePageDataService.topDesigner();
    console.log(data);
    if (data[0].get_designer) {
      dispatch({ type: GET_TOP_DESIGNERS, payload: data[0].get_designer });
    }
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

export const topSeasonOffers = () => async (dispatch) => {
  try {
    const { data } = await DesignerHomePageDataService.topSeasonOffers();
    if (data.data) {
      dispatch({ type: GET_TOP_SEASON_OFFERS, payload: data.data });
    }
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

export const handMadeClothes = () => async (dispatch) => {
  try {
    const { data } = await DesignerHomePageDataService.handMadeClothes();
    if (data.hand_made_cloth) {
      dispatch({ type: GET_HAND_MADE_CLOTHES, payload: data.hand_made_cloth });
    }
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

export const getCategoryGroup = (val) => async (dispatch) => {
  try {
    let type = val;
    if (type === "men") type = "mens";
    if (type === "women") type = "womens";
    const { data } = await common_axios.get(`/category-grps/${type}`);

    if (data.data?.length > 0) {
      dispatch({
        type: GET_CATEGORY_GROUP,
        payload: { type: val, data: data.data[0] },
      });
    }
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

export const getCategorySubGroup = (val) => async (dispatch) => {
  try {
    console.log(val);
    const { data } = await common_axios.get(`/category_sub_grp/${val}/10`);
    if (data.data) {
      dispatch({
        type: GET_CATEGORY_SUBGROUP,
        payload: { type: val, data: data.data },
      });
    }
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getCustomerReviews = () => async (dispatch) => {
  try {
    const { data } = await common_axios.get(`/product_review_list`);
    if (data.data) {
      dispatch({
        type: GET_CUSTOMER_REVIEWS,
        payload: data.data,
      });
    }
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};
