import { SortPropertyEnum, SortType } from "../../redux/filter/types";

export type List = {
  name: string;
  sortProperty: SortPropertyEnum;
};

export type SortProps = {
  value: SortType;
};