import { combineReducers } from "redux";
import loginreducer from "./loginreducer";
import homepageReducer from "./homepagereducer";
import {
  topCategoryReducer,
  popularCategoryReducer,
  suitWearReducer,
  topDesignerReducer,
  topSeasonOffersReducer,
  handMadeClothesReducer,
} from "./designHomePageReducer";
import trendingReducer from "./trendingReducer";

const rootreducer = combineReducers({
  login: loginreducer,
  homepage: homepageReducer,
  trending: trendingReducer,
  topCategory: topCategoryReducer,
  popularCategory: popularCategoryReducer,
  suitWears: suitWearReducer,
  topDesigner: topDesignerReducer,
  topSeasonOffers: topSeasonOffersReducer,
  handMadeClothes: handMadeClothesReducer,
});

export default rootreducer;
