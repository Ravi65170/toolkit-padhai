import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../componet/slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
