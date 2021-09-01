import { combineReducers } from "redux";
import loginreducer from "./loginreducer";
import homepageReducer from "./homepagereducer";
<<<<<<< HEAD
import {
  topCategoryReducer,
  popularCategoryReducer,
  suitWearReducer,
  topDesignerReducer,
  topSeasonOffersReducer,
  handMadeClothesReducer,
  trendingReducer,
} from "./designHomePageReducer";
=======
import mainreducer from "./mainReducer";
>>>>>>> 9840c20e5582f9a06dd5df4e07eb8fbdecec64a6

const rootreducer = combineReducers({
  login: loginreducer,
  homepage: homepageReducer,
<<<<<<< HEAD
  trending: trendingReducer,
  topCategory: topCategoryReducer,
  popularCategory: popularCategoryReducer,
  suitWears: suitWearReducer,
  topDesigner: topDesignerReducer,
  topSeasonOffers: topSeasonOffersReducer,
  handMadeClothes: handMadeClothesReducer,
=======
  main: mainreducer,
>>>>>>> 9840c20e5582f9a06dd5df4e07eb8fbdecec64a6
});

export default rootreducer;
