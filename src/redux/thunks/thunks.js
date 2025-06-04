import { createAsyncThunk } from "@reduxjs/toolkit";
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
    var _b;
    try {
        const response = yield fetch(API_URL);
        if (!response.ok)
            throw new Error(`Ошибка HTTP: ${response.status}`);
        const data = yield response.json();
        const cachedImages = Object.fromEntries((_b = data === null || data === void 0 ? void 0 : data.products) === null || _b === void 0 ? void 0 : _b.map((product) => { var _a, _b; return [product.id, (_b = (_a = product.images) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : ""]; }));
        return { products: data.products, cachedImages };
    }
    catch (error) {
        return rejectWithValue(error);
    }
}));
