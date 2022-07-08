export type Catalog = {
		id: string;
		imageUrl: string;
		title: string;
		sizes: string[];
		price: number;
		rating: number;
}

export enum Status {
	PENDING = 'pending',
	FULFILLED = 'fulfilled',
	REJECTED = 'rejected',
}

export interface CatalogSliceState {
	items: Catalog[];
	status: Status;
}