import { combineReducers } from "redux";
import loginreducer from "./loginreducer";

const rootreducer = combineReducers({
  login: loginreducer,
});

export default rootreducer;
