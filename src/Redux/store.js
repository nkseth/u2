import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootreducer from "./reducers/rootreducer";

const store = configureStore({
  reducer: {
    root: rootreducer,
  },
  middleware: [thunk],
});

export default store;
