export type Category = {
	id: string;
	categoryImage: string;
	categoryName: string;
}

export enum Status {
	PENDING = 'pending',
	FULFILLED = 'fulfilled',
	REJECTED = 'rejected',
}

export interface CategorySliceState {
	categories: Category[];
	status: Status;
}