import React, { FormEventHandler } from "react";

import styles from "./SearchBox.module.css";
import { Filter } from "../types";

interface SearchBoxProps {
    setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}

const SearchBox: React.FC<SearchBoxProps> = ({ setFilter }) => {
    const handleSearchQueryChange: FormEventHandler = (e) => {
        setFilter((prev) => ({ ...prev, searchQuery: (e.target as HTMLInputElement).value }));
    };
    return (
        <form id="search-box" onSubmit={(e) => e.preventDefault()}>
            <input
                type="text"
                id="search"
                className={styles.textBox}
                onChange={handleSearchQueryChange}
                placeholder="Search"
            />
        </form>
    );
};

export default SearchBox;
