import { combineReducers } from "redux";
import loginreducer from "./loginreducer";
import homepageReducer from "./homepagereducer";
<<<<<<< HEAD
=======
import mainreducer from "./mainReducer";
>>>>>>> 2d07a9aac3ace27059c8d849f8b5537bce52c7c7

const rootreducer = combineReducers({
  login: loginreducer,
  homepage: homepageReducer,
<<<<<<< HEAD
=======
  main: mainreducer,
>>>>>>> 2d07a9aac3ace27059c8d849f8b5537bce52c7c7
});

export default rootreducer;
