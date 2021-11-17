import {
  GET_CUSTOMER_REVIEWS,
  GET_HAND_MADE_CLOTHES,
  GET_POPULAR_CATEGORY,
  GET_SUIT_WEAR,
  GET_TOP_CATEGORY,
  GET_TOP_DESIGNERS,
  GET_TOP_SEASON_OFFERS,
  GET_TOP_TRENDING,
  TOP_TRENDING_LOADING,
  TOP_TRENDING_SUCCESS,
  TOP_TRENDING_ERROR,
  SUIT_WEAR_LOADING,
  SUIT_WEAR_SUCCESS,
} from '../actions/types';

export const trendingReducer = (
  initialState = { items: [], loading: true, error: '' },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case TOP_TRENDING_LOADING:
      return {
        ...initialState,
        loading: true,
      };
    case GET_TOP_TRENDING:
      return { ...initialState, items: payload };
    case TOP_TRENDING_SUCCESS:
      return {
        ...initialState,
        loading: false,
      };
    case TOP_TRENDING_ERROR:
      return {
        ...initialState,
        error: payload.error,
        loading: false,
      };

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
  initialState = { suitWearItems: [], loading: true },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case SUIT_WEAR_LOADING:
      return {
        ...initialState,

        loading: true,
      };
    case GET_SUIT_WEAR:
      return { ...initialState, suitWearItems: payload };
    case SUIT_WEAR_SUCCESS:
      return {
        ...initialState,
        loading: false,
      };
    case SUIT_WEAR_SUCCESS:
      return {
        ...initialState,
        error: payload.error,
      };

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
      console.log(
        '🚀 ~ file: designHomePageReducer.js ~ line 118 ~ payload',
        payload
      );

      return { ...initialState, designers: payload.get_designer };

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

export const customerReviewsReducer = (
  initialState = { reviews: [] },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CUSTOMER_REVIEWS:
      return { ...initialState, reviews: payload };

    default:
      return initialState;
  }
};
