import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';
import useFilteredProducts from '../hooks/useFilteredProducts';

export default function FilterableProductTable() {
  const {
    filteredProducts,
    addProduct,
    editProduct,
    deleteProduct,
    filterText,
    onFilterTextChange: setFilterText,
    isStockOnly,
    onIsStockOnlyChange: setIsStockOnly,
  } = useFilteredProducts();

  return (
    <>
      <SearchBar
        filterText={filterText}
        onFilterTextChange={setFilterText}
        isStockOnly={isStockOnly}
        onIsStockOnlyChange={setIsStockOnly}
      />
      <ProductTable
        products={filteredProducts}
        deleteProduct={deleteProduct}
        editProduct={editProduct}
      />
      <ProductForm addProduct={addProduct} />
    </>
  );
}
