import { combineReducers } from "redux";
import userReducer from "./user-slicer";
import cartReducer from "../Cart/cart-slice";

export const rootReducer = combineReducers({
    userReducer,
    cartReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;