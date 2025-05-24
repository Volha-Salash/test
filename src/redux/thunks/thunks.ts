import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductsResponse } from "consts/types";

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
            return rejectWithValue(error instanceof Error ? error.message : "Unknown error");
        }
    }
);
