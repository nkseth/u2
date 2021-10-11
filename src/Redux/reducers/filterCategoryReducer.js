import { keys } from "@material-ui/core/styles/createBreakpoints";
import { AirlineSeatLegroomNormal } from "@material-ui/icons";
import {
  CLEAR_ALL_FILTERS,
  CLEAR_FILTER_DATA,
  GET_FILTERED_PRODUCT,
  GET_FILTER_LIST,
  SET_FILTER_DATA,
} from "../actions/types";

export const filterCategoryReducer = (
  initialState = { filters: null },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case GET_FILTER_LIST:
      return { ...initialState, filters: payload };

    default:
      return initialState;
  }
};

export const filteredProductReducer = (
  initialState = { products: [] },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case GET_FILTERED_PRODUCT:
      return { ...initialState, products: payload };

    default:
      return initialState;
  }
};

export const storefilterReducer = (
  state = {
    color: [],
    size: [],
    sleeve: [],
    length: [],
    price: [],
    itemType: [],
    fabric: [],
    occasion: [],
    design: [],
    discount: [],
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case SET_FILTER_DATA: {
      // Object.assign(state, state[payload.ftype]);
      state[payload.ftype].push(payload.data);
      return {
        ...state,
      };
    }

    case CLEAR_FILTER_DATA: {
      // Object.assign(state, payload.data);
      state[payload.type] = payload.data;
      return {
        ...state,
      };
    }
    case CLEAR_ALL_FILTERS: {
      // Object.assign(state, {});
      return {
        ...state,
        color: [],
        size: [],
        sleeve: [],
        length: [],
        price: [],
        itemType: [],
        fabric: [],
        occasion: [],
        design: [],
        discount: [],
      };
    }

    default:
      return state;
  }
};
