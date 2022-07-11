import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSliceState } from "./types";

const initialState: FilterSliceState = {
	categoryId: 0,
	searchValue: ''
}

const filterSlice = createSlice({
	name: 'filters',
  initialState,
	reducers: {
		setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
		setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    }
	}
})

export const { setCategoryId, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;