import { configureStore } from "@reduxjs/toolkit";
import { userOperation } from "../features/reducers/reducers";

export const store = configureStore({
  reducer: {
    bank: userOperation,
  },
});
