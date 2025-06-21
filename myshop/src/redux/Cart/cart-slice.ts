import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../data/products";

interface CartState {
    products: Product[];
}

const initialState: CartState = {
    products: [],
};

export const cartSlice = createSlice({ 
    name: "cart",
    initialState,
    reducers: {
        addProduct(state, action) {
            state.products.push(action.payload);
        },
        removeProduct(state, action) {
            state.products = state.products.filter(product => product.id !== action.payload.id);
        }
    }
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;