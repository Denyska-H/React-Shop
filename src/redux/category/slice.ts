import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchCategoryItems } from "./asyncActions";
import { Category, CategorySliceState, Status } from "./types";

const initialState: CategorySliceState = {
	categories: [],
	status: Status.PENDING,
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
			state.status = Status.PENDING;
      state.categories = [];
		});

		builder.addCase(fetchCategoryItems.fulfilled, (state, action) => {
			state.status = Status.FULFILLED;
      state.categories = action.payload;
		});

		builder.addCase(fetchCategoryItems.rejected, (state) => {
			state.status = Status.REJECTED;
      state.categories = [];
		});
  },
});

export const { setCategories } = categorySlice.actions;

export default categorySlice.reducer;