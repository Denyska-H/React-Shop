import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FavoriteItem, FavoriteItemSliceState } from './types';

const initialState: FavoriteItemSliceState = {
	favorites: [],
};

const cartSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavoriteItems(state, action: PayloadAction<FavoriteItem>) {   

			const findItem = state.favorites.find((obj) => obj.id === action.payload.id);

      if (findItem) {
				alert('Ви вже додали цей товар до обраного!')
      } else {
        state.favorites.push({
          ...action.payload,
          count: 1,
        });
      }
    },
		removeFavoriteItems(state, action: PayloadAction<string>) {
      state.favorites = state.favorites.filter((obj) => obj.id !== action.payload);
    }
  },
});

export const { addFavoriteItems, removeFavoriteItems } = cartSlice.actions;

export default cartSlice.reducer;
