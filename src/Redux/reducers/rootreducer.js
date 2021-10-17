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
import { authReducer, registerUserReducer } from "./authReducer";
import {
  filterCategoryReducer,
  filteredProductReducer,
  storefilterReducer,
} from "./filterCategoryReducer";

import {
  allMeasurementsReducer,
  deleteMeasurementReducer,
  measurement_reducer,
  saveMeasurementReducer,
} from "./measurement";

import {
  cartItemsReducer,
  removeCartItemReducer,
  couponsReducer,
} from "./myBagReducer";
import { productsReducer, productDetailsReducer } from "./productsReducer";
import { trackOrderReducer, orderDetailReducer } from "./orderReducer";
import { addressReducer, paymentReducer } from "./checkoutReducer";

import { myAddressesReducer, userAddressReducer } from "./adrressReducer";

const rootreducer = combineReducers({
  address: addressReducer,
  addToBag: addToBagReducer,
  allMeasurements: allMeasurementsReducer,
  auth: authReducer,
  cartItems: cartItemsReducer,
  coupons: couponsReducer,
  customerReviews: customerReviewsReducer,
  deleteMeasurement: deleteMeasurementReducer,
  filterCategory: filterCategoryReducer,
  filteredProduct: filteredProductReducer,
  handMadeClothes: handMadeClothesReducer,
  homepage: homepageReducer,
  login: loginreducer,
  main: mainreducer,
  measurement: measurement_reducer,
  myAddresses: myAddressesReducer,
  orderDetail: orderDetailReducer,
  payment: paymentReducer,
  popularCategory: popularCategoryReducer,
  productDetails: productDetailsReducer,
  products: productsReducer,
  profile: profile_reducer,
  registerUser: registerUserReducer,
  removeCartItem: removeCartItemReducer,
  saveMeasurement: saveMeasurementReducer,
  storefilter: storefilterReducer,
  suitWears: suitWearReducer,
  topCategory: topCategoryReducer,
  topDesigner: topDesignerReducer,
  topSeasonOffers: topSeasonOffersReducer,
  trackOrder: trackOrderReducer,
  trending: trendingReducer,
  updateWishlist: updateWishlistReducer,
  userAddress: userAddressReducer,
  wishlist: getWishListReducer,
});

export default rootreducer;
