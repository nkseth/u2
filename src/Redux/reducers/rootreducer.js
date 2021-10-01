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
  customerReviewsReducer,
} from "./designHomePageReducer";
import mainreducer from "./mainReducer";
import measurement_reducer from "./measurement";
import profile_reducer from "./profileReducer";
import {
  addToBagReducer,
  getWishListReducer,
  updateWishlistReducer,
} from "./wishlistReducer";
import { authReducer } from "./authReducer";
import {
  filterCategoryReducer,
  filteredProductReducer,
} from "./filterCategoryReducer";

import { productDetailReducer } from "./productDescriptionReducer";
import { allMeasurementsReducer } from "./measurement";

const rootreducer = combineReducers({
  addToBag: addToBagReducer,
  allMeasurements: allMeasurementsReducer,
  auth: authReducer,
  customerReviews: customerReviewsReducer,
  filterCategory: filterCategoryReducer,
  filteredProduct: filteredProductReducer,
  handMadeClothes: handMadeClothesReducer,
  homepage: homepageReducer,
  login: loginreducer,
  main: mainreducer,
  measurement: measurement_reducer,
  popularCategory: popularCategoryReducer,
  productDetail: productDetailReducer,
  profile: profile_reducer,
  suitWears: suitWearReducer,
  topCategory: topCategoryReducer,
  topDesigner: topDesignerReducer,
  topSeasonOffers: topSeasonOffersReducer,
  trending: trendingReducer,
  updateWishlist: updateWishlistReducer,
  wishlist: getWishListReducer,
});

export default rootreducer;
