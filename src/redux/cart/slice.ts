import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, CartSliceState } from './types';

import { calcTotalPrice } from '../../utils/calcTotalPrice';

const initialState: CartSliceState = {
	totalPrice: 0,
	items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItems(state, action: PayloadAction<CartItem>) {   
			const itemIndex = state.items.findIndex((item) => item.newId === action.payload.newId);

			if(itemIndex >= 0) {
				state.items[itemIndex].count++;
			} else {
				const tempProduct = {...action.payload, count: 1, newId: state.items.length > 0 ? state.items[state.items.length - 1].newId + 1 : 1};
				state.items.push(tempProduct);
			}
			
      state.totalPrice = calcTotalPrice(state.items);
    },

    minusItems(state, action: PayloadAction<number>) {
      const findItem = state.items.find((obj) => obj.newId === action.payload);
			
      if (findItem) {
				findItem.count--;
				state.totalPrice = calcTotalPrice(state.items);

      }
    },
		
    removeItems(state, action: PayloadAction<number>) {
      state.items = state.items.filter((obj) => obj.newId !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
    }

  },
});

export const { addItems, removeItems, minusItems } = cartSlice.actions;

export default cartSlice.reducer;
