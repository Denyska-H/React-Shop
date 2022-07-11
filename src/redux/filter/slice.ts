import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSliceState, SortPropertyEnum, SortType } from "./types";

const initialState: FilterSliceState = {
	categoryId: 0,
	searchValue: '',
	sort: {
    name: 'популярності',
    sortProperty: SortPropertyEnum.RATING,
  },
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
    },
		setSort(state, action: PayloadAction<SortType>) {
      state.sort = action.payload;
    },
	}
})

export const { setCategoryId, setSearchValue, setSort } = filterSlice.actions;

export default filterSlice.reducer;