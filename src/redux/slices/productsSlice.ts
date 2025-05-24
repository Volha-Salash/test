import { ProductsResponse, ProductsState } from "consts/types";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
const API_URL = "https://dummyjson.com/products";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error(`Ошибка HTTP: ${response.status}`);
      const data: ProductsResponse = await response.json();

      const cachedImages = data.products.reduce((acc, product) => {
        acc[product.id] = product.images?.[0] ?? "";
        return acc;
      }, {} as Record<number, string>);

      return { products: data.products, cachedImages };
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Неизвестная ошибка");
    }
  }
);


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
        const { products, cachedImages } = action.payload; // ✅ Деструктурируем данные
        state.loading = false;
        state.products = products; // ✅ Теперь `products` получает массив
        state.cachedImages = cachedImages; // ✅ `cachedImages` получает объект
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export const { selectNavItem } = productsSlice.actions;
export default productsSlice.reducer;

