import { GET_FILTERED_PRODUCT, GET_FILTER_LIST } from "../actions/types";

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
