import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { Catalog, CatalogSliceState, SearchItemsParams, Status } from './types';

export const fetchItems = createAsyncThunk<Catalog[], SearchItemsParams>(
	'catalog/fetchCatalogStatus', async (params) => {
	const { category, search, sortBy, order } = params;
  const { data } = await axios.get<Catalog[]>(
    `https://62c6de9974e1381c0a6b2e65.mockapi.io/items?&${category}&${search}&sortBy=${sortBy}&order=${order}`,
  );
	return data;
});

const initialState: CatalogSliceState = {
  items: [],
  status: Status.PENDING,
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Catalog[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
		builder.addCase(fetchItems.pending, (state) => {
			state.status = Status.PENDING;
      state.items = [];
		});

		builder.addCase(fetchItems.fulfilled, (state, action) => {
			state.status = Status.FULFILLED;
      state.items = action.payload;
		});

		builder.addCase(fetchItems.rejected, (state) => {
		  state.status = Status.REJECTED;
      state.items = [];
		});
  },
});

export const { setItems } = catalogSlice.actions;

export default catalogSlice.reducer;