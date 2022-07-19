export type CartItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: [];
  count: number;
};

export interface CartSliceState {
	totalPrice: number;
	items: CartItem[];
}