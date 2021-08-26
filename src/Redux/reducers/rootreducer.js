import { combineReducers } from "redux";
import loginreducer from "./loginreducer";
import homepageReducer from "./homepagereducer";

const rootreducer = combineReducers({
  login: loginreducer,
  homepage: homepageReducer,
});

export default rootreducer;
