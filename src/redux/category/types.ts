export enum Status {
	PENDING = 'pending',
	FULFILLED = 'fulfilled',
	REJECTED = 'rejected',
}

export type Category = {
	id: string;
	categoryImage: string;
	categoryName: string;
}

export interface CategorySliceState {
	categories: Category[];
	status: Status;
}