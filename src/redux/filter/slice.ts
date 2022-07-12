import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSliceState, SortPropertyEnum, SortType } from "./types";

const initialState: FilterSliceState = {
	categoryId: 0,
	searchValue: '',
	sort: {
    name: 'популярності',
    sortProperty: SortPropertyEnum.RATING,
  },
	currentPage: 1,
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
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
	}
})

export const { setCategoryId, setSearchValue, setSort, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;