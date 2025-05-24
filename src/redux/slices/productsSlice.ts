import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductsResponse, ProductsState } from "consts/types";
const API_URL = "https://dummyjson.com/products";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error(`Ошибка HTTP: ${response.status}`);
      const data: ProductsResponse = await response.json();
      return data.products;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Неизвестная ошибка");
    }
  }
);

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
  value: undefined
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
const productsReducer = productsSlice.reducer;
export default productsReducer;
