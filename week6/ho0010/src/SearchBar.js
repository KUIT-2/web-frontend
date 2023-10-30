import React from "react";

const SearchBar = () => {
    return <form>
        <input type={"text"} placeholder="Search..." />
        <lable>
            <input type={"checkbox"} />
            Only show products in stock
        </lable>
    </form>
};

export default SearchBar;