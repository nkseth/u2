import { combineReducers } from "redux";
import loginreducer from "./loginreducer";
import homepageReducer from "./homepagereducer";
import mainreducer from "./mainReducer";

const rootreducer = combineReducers({
  login: loginreducer,
  homepage: homepageReducer,
  main: mainreducer,
});

export default rootreducer;
