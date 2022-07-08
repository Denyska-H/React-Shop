import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import catalog from './catalog/slice'

export const store = configureStore({
  reducer: {
		catalog,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();