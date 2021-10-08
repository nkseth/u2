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
import {
  allMeasurementsReducer,
  deleteMeasurementReducer,
  measurement_reducer,
  saveMeasurementReducer,
} from "./measurement";

import { cartItemsReducer } from "./myBagReducer";
import { productsReducer } from "./productsReducer";
import { trackOrderReducer, orderDetailReducer } from "./orderReducer";
import { addressReducer, paymentReducer } from "./checkoutReducer";

const rootreducer = combineReducers({
  address: addressReducer,
  addToBag: addToBagReducer,
  allMeasurements: allMeasurementsReducer,
  auth: authReducer,
  cartItems: cartItemsReducer,
  customerReviews: customerReviewsReducer,
  deleteMeasurement: deleteMeasurementReducer,
  filterCategory: filterCategoryReducer,
  filteredProduct: filteredProductReducer,
  handMadeClothes: handMadeClothesReducer,
  homepage: homepageReducer,
  login: loginreducer,
  main: mainreducer,
  measurement: measurement_reducer,
  orderDetail: orderDetailReducer,
  payment: paymentReducer,
  popularCategory: popularCategoryReducer,
  productDetail: productDetailReducer,
  products: productsReducer,
  profile: profile_reducer,
  suitWears: suitWearReducer,
  saveMeasurement: saveMeasurementReducer,
  topCategory: topCategoryReducer,
  topDesigner: topDesignerReducer,
  topSeasonOffers: topSeasonOffersReducer,
  trackOrder: trackOrderReducer,
  trending: trendingReducer,
  updateWishlist: updateWishlistReducer,
  wishlist: getWishListReducer,
});

export default rootreducer;
