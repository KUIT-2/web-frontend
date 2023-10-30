import React from "react";

const SearchBar = ({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) => {

    const handleTextChange = (e) => {
        onFilterTextChange(e.target.value);
    }

    const handleCheckboxChange = (e) => {
        onInStockOnlyChange(e.target.checked);
    }

    return <form>
        <input type={"text"}
            placeholder="Search..."
            value={filterText}
            onChange={(e) => onFilterTextChange(e.target.value)}
        />
        <lable>
            <input type={"checkbox"}
                checked={inStockOnly}
                onChange={handleCheckboxChange}
            />
            Only show products in stock
        </lable>
    </form>
};

export default SearchBar;