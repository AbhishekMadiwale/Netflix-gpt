import { configureStore } from "@reduxjs/toolkit";
// importing reducer in store
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import languageSliceReducer from "./languageSlice";

// configure store will use to handle the reducer in store
const appStore = configureStore(
  // we will have differen reducers coming from different slices
  {
    reducer: {
      user: userReducer,
      movies: moviesReducer,
      gpt: gptReducer,
      langConfig : languageSliceReducer,
    },
  }
);

export default appStore;
