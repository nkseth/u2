import {
  GET_HAND_MADE_CLOTHES,
  GET_POPULAR_CATEGORY,
  GET_SUIT_WEAR,
  GET_TOP_CATEGORY,
  GET_TOP_DESIGNERS,
  GET_TOP_SEASON_OFFERS,
  GET_TOP_TRENDING,
} from "../actions/types";

export const trendingReducer = (initialState = { items: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TOP_TRENDING:
      return { ...initialState, items: payload };

    default:
      return initialState;
  }
};

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

export const topDesignerReducer = (
  initialState = { designers: [] },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TOP_DESIGNERS:
      return { ...initialState, designers: payload };

    default:
      return initialState;
  }
};

export const topSeasonOffersReducer = (
  initialState = { offers: [] },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TOP_SEASON_OFFERS:
      return { ...initialState, offers: payload };

    default:
      return initialState;
  }
};

export const handMadeClothesReducer = (
  initialState = { clothes: [] },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case GET_HAND_MADE_CLOTHES:
      return { ...initialState, clothes: payload };

    default:
      return initialState;
  }
};
