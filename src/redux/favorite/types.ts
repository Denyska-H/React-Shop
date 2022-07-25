export type FavoriteItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: [];
	count: number;
};

export interface FavoriteItemSliceState {
	favorites: FavoriteItem[];
	successFavModal: boolean;
	errorFavModal: boolean;
}