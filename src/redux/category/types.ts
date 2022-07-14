export type Category = {
	id: string;
	categoryImage: string;
	categoryName: string;
}

export interface CategorySliceState {
	categories: Category[];
}