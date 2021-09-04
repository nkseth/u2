import { MENS_ACTIVE_PRODUCT, MENS_WEAR_CAT, MENS_WEAR_SLIDER, MENS_WEAR_SUBGRP, SELECTED_SUB_GRP, USER_DATA } from "../actions/types";

const inialState = {
  user_data: {},
  mens_wear_slider: [],
  mens_wear_cat: [],
  mens_wear_subgrp: [],
  selected_sub_grp: 'all',
  mens_active_product: []
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

    default:
      return state;
  }
};

export default mainreducer;
