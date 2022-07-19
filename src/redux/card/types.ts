export type SearchCardParams = {
	id: string;
}

export type Card = {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
  sizes: [];
}

export interface CardSliceState {
	items: Card;
	status: CardStatus;
}

export enum CardStatus {
	PENDING = 'pending',
	FULFILLED = 'fulfilled',
	REJECTED = 'rejected',
}