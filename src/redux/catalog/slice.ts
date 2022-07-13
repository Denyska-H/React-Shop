import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchCatalogItems } from './asyncActions';
import { Catalog, CatalogSliceState, Status } from './types';

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
		builder.addCase(fetchCatalogItems.pending, (state) => {
			state.status = Status.PENDING;
      state.items = [];
		});

		builder.addCase(fetchCatalogItems.fulfilled, (state, action) => {
			state.status = Status.FULFILLED;
      state.items = action.payload;
		});

		builder.addCase(fetchCatalogItems.rejected, (state) => {
		  state.status = Status.REJECTED;
      state.items = [];
		});
  },
});

export const { setItems } = catalogSlice.actions;

export default catalogSlice.reducer;