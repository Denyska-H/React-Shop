import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchCategoryItems } from "./asyncActions";
import { Category, CategorySliceState } from "./types";

const initialState: CategorySliceState = {
	categories: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<Category[]>) {
      state.categories = action.payload;
    },
  },
  extraReducers: (builder) => {
		builder.addCase(fetchCategoryItems.pending, (state) => {
      state.categories = [];
		});

		builder.addCase(fetchCategoryItems.fulfilled, (state, action) => {
      state.categories = action.payload;
		});

		builder.addCase(fetchCategoryItems.rejected, (state) => {
      state.categories = [];
		});
  },
});

export const { setCategories } = categorySlice.actions;

export default categorySlice.reducer;