export enum SortPropertyEnum {
  RATING = 'rating',
  PRICE_DESC = '-price',
  PRICE_ASC = 'price',
  TITLE = 'title',
}

export type SortType = {
  name: string;
  sortProperty: SortPropertyEnum;
};

export interface FilterSliceState  {
	categoryId: number;
	searchValue: string;
	sort: SortType;
	currentPage: number;
}
