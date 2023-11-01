import React, { useState } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

const FilterableProductTable = ({ products }) => {
  //filterText, inStockOnly를 기준으로 user에게 데이터가 필터링돼서 보여짐
  const [filterText, setFilterText] = useState("P"); 
  const [inStockOnly, setInStockOnly] = useState(true);

  return (
    <div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={setFilterText} 
          onInStockOnlyChange={setInStockOnly}/>
        <ProductTable
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly} />
    </div>
  );
};

export default FilterableProductTable;