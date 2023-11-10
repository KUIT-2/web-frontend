import React from "react";

import styles from "./Header.module.css";
import { Product, Filter } from "../types";

import SearchBox from "./SearchBox";

interface HeaderProps {
    setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}

const Header: React.FC<HeaderProps> = ({ setFilter }) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Product Manager</h1>
            <SearchBox setFilter={setFilter} />
        </header>
    );
};

export default Header;
