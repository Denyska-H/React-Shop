export type CartItem = {
  id: string;
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
}