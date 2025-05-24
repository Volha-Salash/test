import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const API_URL = "https://dummyjson.com/products";
export const fetchProducts = createAsyncThunk("products/fetchProducts", (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { rejectWithValue }) {
    try {
        const response = yield fetch(API_URL);
        if (!response.ok)
            throw new Error(`Ошибка HTTP: ${response.status}`);
        const data = yield response.json();
        return data.products;
    }
    catch (error) {
        return rejectWithValue(error instanceof Error ? error.message : "Неизвестная ошибка");
    }
}));
const initialState = {
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
            state.error = action.payload;
        });
    },
});
const productsReducer = productsSlice.reducer;
export default productsReducer;
