import common_axios from "../../utils/axios.config";
import DesignerHomePageDataService from "../services/designerHomePage.service";
import {
  GET_CATEGORY_GROUP,
  GET_CATEGORY_SUBGROUP,
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
    console.log(data, 'top_trend')
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
    //console.log(data, 'top_cat')
  } catch (err) {
    console.log(err)
    return Promise.reject(err);
  }
};

export const suitWears = () => async (dispatch) => {
  try {
    const { data } = await DesignerHomePageDataService.suitWear();
    if (data.suit_wear) {
      dispatch({ type: GET_SUIT_WEAR, payload: data.suit_wear });
    }
    //console.log(data, 'suit_wear')
  } catch (err) {
    console.log(err)
    return Promise.reject(err);
  }
};

export const popularCategories = () => async (dispatch) => {
  try {
    const { data } = await DesignerHomePageDataService.popularCategory();
    if (data.designer_group_1) {
      dispatch({ type: GET_POPULAR_CATEGORY, payload: data.designer_group_1 });
    }
    //console.log(data, 'pop_cat')
  } catch (err) {
    console.log(err)
    return Promise.reject(err);
  }
};

export const topDesigner = () => async (dispatch) => {
  try {
    const { data } = await DesignerHomePageDataService.topDesigner();
    if (data.top_designer) {
      dispatch({ type: GET_TOP_DESIGNERS, payload: data.top_designer });
    }
    //console.log(data, 'top_des')
  } catch (err) {
    console.log(err)
    return Promise.reject(err);
  }
};

export const topSeasonOffers = () => async (dispatch) => {
  try {
    const { data } = await DesignerHomePageDataService.topSeasonOffers();
    if (data.designer_group_2) {
      dispatch({ type: GET_TOP_SEASON_OFFERS, payload: data.designer_group_2 });
    }
    //console.log(data, 'top_ses')
  } catch (err) {
    console.log(err)
    return Promise.reject(err);
  }
};

export const handMadeClothes = () => async (dispatch) => {
  try {
    const { data } = await DesignerHomePageDataService.handMadeClothes();
    if (data.hand_made_cloth) {
      dispatch({ type: GET_HAND_MADE_CLOTHES, payload: data.hand_made_cloth });
    }
    // console.log(data, 'hand_clths')
  } catch (err) {
    console.log(err)
    return Promise.reject(err);
  }
};

export const getCategoryGroup = (val) => async (dispatch) => {
  try {
    const { data } = await common_axios.get(`/category-grps/${val}`)
    if (data.data?.length > 0) {
      dispatch({ type: GET_CATEGORY_GROUP, payload: { type: val, data: data.data[0] } });
    }
  } catch (err) {
    console.log(err)
    return Promise.reject(err);
  }
}


export const getCategorySubGroup = (val) => async (dispatch) => {
  try {
    const { data } = await common_axios.get(`/category-subgrps`)
    console.log(data)
    if (data.data) {
      dispatch({ type: GET_CATEGORY_SUBGROUP, payload: { type: val, data: data.data } });
    }
  } catch (err) {
    console.log(err)
    return Promise.reject(err);
  }
}
