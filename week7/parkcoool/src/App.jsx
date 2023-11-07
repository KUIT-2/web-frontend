import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import FilterableProductTable from "./FilterableProductTable";

const App = () => {
    const [products, setProducts] = useState([
        { id: uuidv4(), category: "Fruits", price: "$2", stocked: true, name: "Apple" },
        { id: uuidv4(), category: "Fruits", price: "$5", stocked: true, name: "Banana" },
        { id: uuidv4(), category: "Fruits", price: "$3", stocked: false, name: "Cherry" },
        { id: uuidv4(), category: "Fruits", price: "$7", stocked: true, name: "Durian" },
        { id: uuidv4(), category: "Vegetables", price: "$3", stocked: true, name: "Broccoli" },
        { id: uuidv4(), category: "Vegetables", price: "$2", stocked: false, name: "Cabbage" },
        { id: uuidv4(), category: "Snacks", price: "$5", stocked: true, name: "Cheese Ball" },
        { id: uuidv4(), category: "Snacks", price: "$1", stocked: false, name: "Chocolate" },
        { id: uuidv4(), category: "Snacks", price: "$2", stocked: true, name: "Candy" },
    ]);

    return <FilterableProductTable products={products} setProducts={setProducts} />;
};

export default App;
