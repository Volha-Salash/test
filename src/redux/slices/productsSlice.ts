import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProducts } from '../thunks/thunks';
import { ProductsState } from "consts/types";

const initialState: ProductsState = {
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
    selectNavItem: (state, action: PayloadAction<string>) => {
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
        state.error = action.payload as string;
      });
  },
});
export const { selectNavItem } = productsSlice.actions;
export default productsSlice.reducer;

