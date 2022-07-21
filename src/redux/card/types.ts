export type SearchCardParams = {
	id: string;
}

export type Card = {
  id: string;
	newId: number;
  imageUrl: string;
  title: string;
  price: number;
	size: [];
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