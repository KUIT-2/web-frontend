import { Product } from './../store/type/product.d';
type ActionType = 'added' | 'edited' | 'deleted';
export type Action = {
  type: ActionType;
  name?: String;
  newProduct?: Product;
  deletedName?: String;
};
export default function productsReducer(
  products: Product[],
  action: Action
): Product[] {
  switch (action.type) {
    case 'added': {
      const { newProduct } = action;
      if (!newProduct) {
        throw new Error('no new product!!');
      }
      return [...products, newProduct];
    }
    case 'edited': {
      const { name, newProduct } = action;
      if (!newProduct) {
        throw new Error('no new product!!');
      }
      return products.map((val) => {
        if (val.name === name) {
          return newProduct;
        } else {
          return val;
        }
      });
    }
    case 'deleted': {
      const { deletedName } = action;
      return products.filter((val) => val.name !== deletedName);
    }
    default: {
      throw Error('알수없는 액션타입!');
    }
  }
}
