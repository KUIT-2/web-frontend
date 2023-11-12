import { useState } from 'react';
import useProducts from './useProducts';

export default function useFilteredProducts() {
  const { products, addProduct, deleteProduct, editProduct } = useProducts();
  const [filterText, setFilterText] = useState<string>('');
  const [isStockOnly, setIsStockOnly] = useState<boolean>(false);

  const filteredProducts = products.filter((product) => {
    const nameMatches = product.name
      .toLowerCase()
      .includes(filterText.toLowerCase());
    const stockMatches = !isStockOnly || product.stocked;
    return nameMatches && stockMatches;
  });

  return {
    filteredProducts,
    addProduct,
    editProduct,
    deleteProduct,
    filterText,
    onFilterTextChange: setFilterText,
    isStockOnly,
    onIsStockOnlyChange: setIsStockOnly,
  };
}
