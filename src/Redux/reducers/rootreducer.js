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
import measurement_reducer from "./measurement";
import profile_reducer from "./profileReducer";
import {
  addToBagReducer,
  getWishListReducer,
  removeFromWishlistReducer,
} from "./wishlistReducer";
import { authReducer } from "./authReducer";
import {
  filterCategoryReducer,
  filteredProductReducer,
} from "./filterCategoryReducer";

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
  profile: profile_reducer,
  measurement: measurement_reducer,
  addToBag: addToBagReducer,
  auth: authReducer,
  wishList: getWishListReducer,
  removeFromWishlist: removeFromWishlistReducer,
  filterCategory: filterCategoryReducer,
  filteredProduct: filteredProductReducer,
});

export default rootreducer;
