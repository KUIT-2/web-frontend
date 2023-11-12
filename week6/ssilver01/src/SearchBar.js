import React from "react";

const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) => {
  // e: 이벤트 객체, e.target: 이벤트가 발생한 요소를 가르킴
  const handleTextChange = (e) => {
    onFilterTextChange(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    onInStockOnlyChange(e.target.checked);
  };

  return (
    <form>
      <input
        type={"text"}
        value={filterText}
        placeholder="Search..."
        onChange={handleTextChange}
      />
      <label>
        <input
          type={"checkbox"}
          checked={inStockOnly}
          onChange={handleCheckboxChange}
        />
        Only show products in stock
      </label>
    </form>
  );
};

export default SearchBar;
