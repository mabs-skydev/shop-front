import { apiCallBegan } from "./api";
import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const slice = createSlice({
  name: "marques",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    marqueRequestStart: (marques, action) => {
      marques.loading = true;
    },

    marqueRequestFailed: (marques, action) => {
      marques.loading = false;
    },

    marquesRecieved: (marques, action) => {
      marques.list = action.payload;
      marques.loading = false;
      marques.lastFetch = Date.now();
    },
  },
});

const {
  marqueRequestStart,
  marqueRequestFailed,
  marquesRecieved,
} = slice.actions;

export default slice.reducer;

// Actions
export const loadMarques = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.marques;

  if (lastFetch === null || moment(Date.now()).diff(lastFetch, "minutes") > 60)
    dispatch(
      apiCallBegan({
        url: "/marques",
        onSuccess: marquesRecieved.type,
        onLoading: marqueRequestStart.type,
        onError: marqueRequestFailed.type,
      })
    );
};
