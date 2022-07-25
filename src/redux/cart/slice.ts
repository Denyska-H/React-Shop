import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, CartSliceState } from './types';

import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { getCartFromLS } from '../../utils/getCartFromLS';

const { totalPrice, items } = getCartFromLS();

const initialState: CartSliceState = {
	totalPrice,
	items,
	successModal: false,
	errorModal: false,
};


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItems(state, action: PayloadAction<CartItem>) {   
			const duplicate = findDuplicates(state.items, action.payload)
			
			if(duplicate.length > 0) {
				state.items = deleteDuplicates(state.items, action.payload);

				const newItemChecked = {
						...action.payload,
						newId: duplicate[0].newId,
						count: action.payload.count + duplicate[0].count
				}

				state.errorModal = true;
				state.items.push(newItemChecked);
			} else {
				const newItem = {
					...action.payload, count: 1,  newId: state.items.length ? state.items[state.items.length - 1].newId + 1 : 1
				}

				state.successModal = true;
				state.items.push(newItem)
			}
      state.totalPrice = calcTotalPrice(state.items);
    },

		plusItems(state, action: PayloadAction<number>) {
      const findItem = state.items.find((obj) => obj.newId === action.payload);
			
      if (findItem) {
				findItem.count++;
				state.totalPrice = calcTotalPrice(state.items);
      }
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
    },

		setSuccessModal(state) {
			state.successModal = !state.successModal;
		},

		setErrorModal(state) {
			state.errorModal = !state.errorModal;
		},
  },
});

const findDuplicates = (arr: CartItem[], item: CartItem) => arr.filter(elem => elem.size === item.size && elem.title === item.title);
const deleteDuplicates = (arr: CartItem[], item: CartItem) => arr.filter(elem => elem.size !== item.size || elem.title !== item.title);

export const { addItems, removeItems, minusItems, plusItems, setSuccessModal, setErrorModal} = cartSlice.actions;
export default cartSlice.reducer;
