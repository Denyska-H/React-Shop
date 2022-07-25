import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getFavoritesFromLS } from '../../utils/getFavoritesFromLS';
import { FavoriteItem, FavoriteItemSliceState } from './types';

const { favorites } = getFavoritesFromLS();

const initialState: FavoriteItemSliceState = {
	favorites,
	successFavModal: false,
	errorFavModal: false,
};

const cartSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavoriteItems(state, action: PayloadAction<FavoriteItem>) {   

			const findItem = state.favorites.find((obj) => obj.id === action.payload.id);

      if (findItem) {
				state.errorFavModal = true;
      } else {
        state.favorites.push({
          ...action.payload,
          count: 1,
        });
				state.successFavModal = true;
      }
    },
		removeFavoriteItems(state, action: PayloadAction<string>) {
      state.favorites = state.favorites.filter((obj) => obj.id !== action.payload);
    },
		setSuccessFavModal(state) {
			state.successFavModal = !state.successFavModal;
		},
		setErrorFavModal(state) {
			state.errorFavModal = !state.errorFavModal;
		},
  },
});

export const { addFavoriteItems, removeFavoriteItems, setErrorFavModal, setSuccessFavModal } = cartSlice.actions;

export default cartSlice.reducer;
