import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSliceState } from "./types";

const initialState: FilterSliceState = {
	categoryId: 0,
}

const filterSlice = createSlice({
	name: 'filters',
  initialState,
	reducers: {
		setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
	}
})

export const { setCategoryId } = filterSlice.actions;

export default filterSlice.reducer;