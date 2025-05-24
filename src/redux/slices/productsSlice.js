import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from '../thunks/thunks';
const initialState = {
    products: [],
    selectedNavItem: '',
    cachedImages: {},
    loading: false,
    error: null,
    value: undefined
};
const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        selectNavItem: (state, action) => {
            state.selectedNavItem = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(fetchProducts.fulfilled, (state, action) => {
            const { products, cachedImages } = action.payload;
            state.loading = false;
            state.products = products;
            state.cachedImages = cachedImages;
        })
            .addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});
export const { selectNavItem } = productsSlice.actions;
export default productsSlice.reducer;
