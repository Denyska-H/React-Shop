import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCardItems } from './asyncActions';
import { Card, CardSliceState, CardStatus } from './types';

const initialState: CardSliceState = {
	items: {
		id: '',
		newId: 0,
		imageUrl: '',
		title: '',
		price: 0,
		size: [],
		sizes: []
	},
	status: CardStatus.PENDING,
};

const cardSlice = createSlice({
	name: 'card',
  initialState,
  reducers: {
		setItems(state, action: PayloadAction<Card>) {
			state.items = action.payload;
		}
	},
	extraReducers(builder) {
		builder.addCase(fetchCardItems.pending, (state) => {
			state.items = state.items;
			state.status = CardStatus.PENDING;
		});

		builder.addCase(fetchCardItems.fulfilled, (state, action) => {
			state.status = CardStatus.FULFILLED;
  		state.items = action.payload;
		});

		builder.addCase(fetchCardItems.rejected, (state) => {
  		state.status = CardStatus.REJECTED;
		});
	},
})

export const { setItems } = cardSlice.actions;

export default cardSlice.reducer;