import { GET_TOP_TRENDING } from "../actions/types";

const trendingReducer = (initialState = { trendingItems: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TOP_TRENDING:
      return { ...initialState, trendingItems: payload };

    default:
      return initialState;
  }
};

export default trendingReducer;
