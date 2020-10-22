import moment from "moment";
import { apiCallBegan } from "./api";

const { createSlice } = require("@reduxjs/toolkit");

const slice = createSlice({
  name: "categories",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    categoryRequestStarted: (categories, action) => {
      categories.loading = true;
    },

    categoryRequestFailed: (categories, action) => {
      categories.loading = false;
    },

    categoriesRecieved: (categories, action) => {
      categories.list = action.payload;

      categories.loading = true;
      categories.lastFetch = Date.now();
    },
  },
});

const {
  categoryRequestStarted,
  categoryRequestFailed,
  categoriesRecieved,
} = slice.actions;

export default slice.reducer;

export const loadCategories = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.categories;

  if (lastFetch === null || !moment(Date.now()).diff(lastFetch, "minutes") > 60)
    dispatch(
      apiCallBegan({
        url: "/categories",
        onSuccess: categoriesRecieved.type,
        onLoading: categoryRequestStarted.type,
        onError: categoryRequestFailed.type,
      })
    );
};
