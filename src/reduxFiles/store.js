//createStore function that adds good defaults to the store setup
//for a better development experience. It accepts a single configuration object parameter,
import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

const store = configureStore({
  reducer: reducer,
});
export default store;
