import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    category: 1,
  },
  reducers: {
    categoryChanged: (filters, action) => {
      filters.category = action.payload;
    },
  },
});

export const { categoryChanged } = slice.actions;
export default slice.reducer;
