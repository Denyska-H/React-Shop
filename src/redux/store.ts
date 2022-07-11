import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import catalog from './catalog/slice'
import filters from './filter/slice'

export const store = configureStore({
  reducer: {
		catalog,
		filters,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();