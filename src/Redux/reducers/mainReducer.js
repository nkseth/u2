import { ALL_THAT_YOU_WANT, CELIBRITY_STYLE, GET_CATEGORY_GROUP, GET_CATEGORY_SUBGROUP, GET_DESIGNERS, MENS_ACTIVE_PRODUCT, MENS_WEAR_CAT, MENS_WEAR_SLIDER, MENS_WEAR_SUBGRP, MOST_LOVED, NEW_COLLECTION, ORDER_SUMM, SECTION1_SLIDERS, SELECTED_SUB_GRP, STYLISH_RECOMMEND, TOP_DESIGNERS, TOP_OFFERS, USER_DATA } from "../actions/types";

const inialState = {
  user_data: {},
  mens_wear_slider: [],
  mens_wear_cat: [],
  mens_wear_subgrp: [],
  selected_sub_grp: 'all',
  mens_active_product: [],
  new_collection: [],
  top_designers: [],
  stylish_recommend: [],
  most_loved: [],
  all_that_you_want: [],
  top_offers: [],
  celibrity_style: [],
  designers: [],
  offers_sliders: [],
  category_grp: {},
  category_subgrp: {},
  order_summ: {}
};

const mainreducer = (state = inialState, action) => {
  switch (action.type) {
    case USER_DATA:
      return {
        ...state,
        user_data: action.payload,
      };
    case MENS_WEAR_SLIDER:
      return {
        ...state,
        mens_wear_slider: action.payload,
      };
    case MENS_WEAR_CAT:
      return {
        ...state,
        mens_wear_cat: action.payload,
      };
    case MENS_WEAR_SUBGRP:
      return {
        ...state,
        mens_wear_subgrp: action.payload,
      };
    case SELECTED_SUB_GRP:
      return {
        ...state,
        selected_sub_grp: action.payload,
      };
    case MENS_ACTIVE_PRODUCT:
      return {
        ...state,
        mens_active_product: action.payload,
      };
    case NEW_COLLECTION:
      return {
        ...state,
        new_collection: action.payload,
      };
    case TOP_DESIGNERS:
      return {
        ...state,
        top_designers: action.payload,
      };
    case STYLISH_RECOMMEND:
      return {
        ...state,
        stylish_recommend: action.payload,
      };
    case MOST_LOVED:
      return {
        ...state,
        most_loved: action.payload,
      };
    case ALL_THAT_YOU_WANT:
      return {
        ...state,
        all_that_you_want: action.payload,
      };
    case TOP_OFFERS:
      return {
        ...state,
        top_offers: action.payload,
      };
    case CELIBRITY_STYLE:
      return {
        ...state,
        celibrity_style: action.payload,
      };
    case SECTION1_SLIDERS:
      return {
        ...state,
        offers_sliders: action.payload,
      };
    case GET_CATEGORY_GROUP:
      return {
        ...state,
        category_grp: { ...state.category_grp, [action.payload.type]: action.payload.data },
      };
    case GET_CATEGORY_SUBGROUP:
      return {
        ...state,
        category_subgrp: { ...state.category_subgrp, [action.payload.type]: action.payload.data },
      };
    case ORDER_SUMM:
      return {
        ...state,
        order_summ: action.payload,
      };
    default:
      return state;
  }
};

export default mainreducer;
