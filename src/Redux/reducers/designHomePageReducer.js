import {
  GET_POPULAR_CATEGORY,
  GET_SUIT_WEAR,
  GET_TOP_CATEGORY,
} from "../actions/types";

export const topCategoryReducer = (
  initialState = { categories: [] },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TOP_CATEGORY:
      return { ...initialState, categories: payload };

    default:
      return initialState;
  }
};

export const suitWearReducer = (
  initialState = { suitWearItems: [] },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case GET_SUIT_WEAR:
      return { ...initialState, suitWearItems: payload };

    default:
      return initialState;
  }
};

export const popularCategoryReducer = (
  initialState = { categories: [] },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case GET_POPULAR_CATEGORY:
      return { ...initialState, categories: payload };

    default:
      return initialState;
  }
};
