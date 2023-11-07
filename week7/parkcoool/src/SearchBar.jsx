import React from "react";

const SearchBar = ({ setSearchQuery, setInStockOnly }) => {
    return (
        <form className="searchBar">
            <input
                type="text"
                name="searchQuery"
                placeholder="Enter your keyword to search."
                onChange={(e) => {
                    setSearchQuery(e.target.value);
                }}
            ></input>
            <div>
                <input
                    type="checkbox"
                    id="inStockOnly"
                    name="inStockOnly"
                    onChange={(e) => {
                        setInStockOnly(e.target.checked);
                    }}
                ></input>
                <label htmlFor="inStockOnly">Only show products in stock</label>
            </div>
        </form>
    );
};

export default SearchBar;
