import {
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
    color: null,
    size: null,
    sleeve: null,
    length: null,
    price: null,
    itemType: null,
    fabric: null,
    occasion: null,
    design: null,
    discount: null,
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case SET_FILTER_DATA: {
      Object.assign(state, payload);
      return {
        ...state,
        ...payload,
      };
    }

    case CLEAR_FILTER_DATA: {
      Object.assign(state, payload);
      return {
        ...state,
        ...payload,
      };
    }

    default:
      return state;
  }
};
