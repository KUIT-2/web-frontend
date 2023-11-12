export default function productsReducer(products, action) {
  switch (action.type) {
    case 'added': {
      const { newProduct } = action;
      return [...products, newProduct];
    }
    case 'edited': {
      const { name, newProduct } = action;
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
