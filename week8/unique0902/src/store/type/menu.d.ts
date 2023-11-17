export type Menu = {
  id: number;
  name: string;
  isBest: boolean;
  price: number;
  ingredients: string;
};
export type MenuInCart = {
  id: number;
  name: string;
  isBest: boolean;
  price: number;
  ingredients: string;
  cnt: number;
};
