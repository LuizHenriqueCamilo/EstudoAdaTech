import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Cart/cart-slice";
import userReducer from "../UserReducer/user-slicer";

export const store = configureStore({
  reducer: {
    cartReducer,
    userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;