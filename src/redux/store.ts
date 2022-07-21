import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import catalog from './catalog/slice'
import filters from './filter/slice'
import category from './category/slice'
import cart from './cart/slice'
import card from './card/slice'
import favorite from './favorite/slice'

export const store = configureStore({
  reducer: {
		catalog,
		filters,
		category,
		cart,
		card,
		favorite,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();