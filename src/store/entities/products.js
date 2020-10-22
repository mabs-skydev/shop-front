import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "products",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    productRequestStarted: (products, action) => {
      products.loading = true;
    },

    productRequestFailed: (products, action) => {
      products.loading = false;
    },

    productCreated: (products, action) => {
      products.list.push(action.payload);
      products.loading = false;
    },

    productsRecieved: (products, action) => {
      products.list = action.payload;
      products.loading = false;
    },
  },
});

const {
  productRequestStarted,
  productRequestFailed,
  productsRecieved,
  productCreated,
} = slice.actions;

export default slice.reducer;

export const addProduct = product =>
  apiCallBegan({
    url: "/products",
    method: "POST",
    data: product,
    onSuccess: productCreated.type,
    onLoading: productRequestStarted.type,
    onError: productRequestFailed.type,
  });

export const loadProducts = () =>
  apiCallBegan({
    url: "/products",
    onSuccess: productsRecieved.type,
    onLoading: productRequestStarted.type,
    onError: productRequestFailed.type,
  });
