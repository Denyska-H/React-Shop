export type ProductBlockProps = {
  id: string;
  newId: number;
  imageUrl: string;
  title: string;
  price: number;
  sizes: [];
  size: [];
};

export type  CartItemProps = {
  id: string;
  newId: number;
  title: string;
  price: number;
  imageUrl: string;
  size: [];
  sizes: [];
  count: number;
};