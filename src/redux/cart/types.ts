export type CartItem = {
  id: string;
	newId: number;
  title: string;
  price: number;
  imageUrl: string;
  sizes: [];
	size:[];
  count: number;
};

export interface CartSliceState {
	totalPrice: number;
	items: CartItem[];
	successModal: boolean;
	errorModal: boolean;
}