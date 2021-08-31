import DesignerHomePageDataService from "../services/designerHomePage.service";
import {
  GET_HAND_MADE_CLOTHES,
  GET_POPULAR_CATEGORY,
  GET_SUIT_WEAR,
  GET_TOP_CATEGORY,
  GET_TOP_DESIGNERS,
  GET_TOP_SEASON_OFFERS,
  GET_TOP_TRENDING,
} from "./types";

export const topTrending = (params) => async (dispatch) => {
  try {
    const { data } = await DesignerHomePageDataService.getTrending(params);

    dispatch({
      type: GET_TOP_TRENDING,
      payload: data,
    });
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

export const topCategories = (params) => async (dispatch) => {
  try {
    const { data } = await DesignerHomePageDataService.topCategories(params);
    // console.log(data.data);
    dispatch({ type: GET_TOP_CATEGORY, payload: data.data });
  } catch (err) {
    return Promise.reject(err);
  }
};

export const suitWears = () => async (dispatch) => {
  try {
    const { data } = await DesignerHomePageDataService.suitWear();
    dispatch({ type: GET_SUIT_WEAR, payload: data.suit_wear });
  } catch (err) {
    return Promise.reject(err);
  }
};

export const popularCategories = () => async (dispatch) => {
  try {
    const { data } = await DesignerHomePageDataService.popularCategory();
    dispatch({ type: GET_POPULAR_CATEGORY, payload: data.designer_group_1 });
  } catch (err) {
    return Promise.reject(err);
  }
};

export const topDesigner = () => async (dispatch) => {
  try {
    const { data } = await DesignerHomePageDataService.topDesigner();
    console.log(data);
    dispatch({ type: GET_TOP_DESIGNERS, payload: data.top_designer });
  } catch (err) {
    return Promise.reject(err);
  }
};

export const topSeasonOffers = () => async (dispatch) => {
  try {
    const { data } = await DesignerHomePageDataService.topSeasonOffers();
    console.log(data);
    dispatch({ type: GET_TOP_SEASON_OFFERS, payload: data });
  } catch (err) {
    return Promise.reject(err);
  }
};

export const handMadeClothes = () => async (dispatch) => {
  try {
    const { data } = await DesignerHomePageDataService.handMadeClothes();

    dispatch({ type: GET_HAND_MADE_CLOTHES, payload: data.hand_made_cloth });
  } catch (err) {
    return Promise.reject(err);
  }
};
