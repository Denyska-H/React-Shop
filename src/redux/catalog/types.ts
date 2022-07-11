import { SortType } from "../filter/types";

export type Catalog = {
		id: string;
		imageUrl: string;
		title: string;
		sizes: string[];
		price: number;
		rating: number;
		category: string;
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

export type SearchItemsParams = {
	category: string;
	search: string;
	sortBy: string;
	order: string;
}