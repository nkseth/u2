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
  trendingReducer,
} from "./designHomePageReducer";
import mainreducer from "./mainReducer";

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
  main: mainreducer,
});

export default rootreducer;
