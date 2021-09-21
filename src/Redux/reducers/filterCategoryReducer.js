import { GET_FILTER_LIST } from "../actions/types";

export const filterCategoryReducer = (
  initialState = { filters: {} },
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
