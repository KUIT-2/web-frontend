import React, { useState } from "react";

import FilterableProductTable from "./FilterableProductTable";

const App = () => {
    const [products, setProducts] = useState([
        { id: 0, category: "Fruits", price: "$2", stocked: true, name: "Apple" },
        { id: 1, category: "Fruits", price: "$5", stocked: true, name: "Banana" },
        { id: 2, category: "Fruits", price: "$3", stocked: false, name: "Cherry" },
        { id: 3, category: "Fruits", price: "$7", stocked: true, name: "Durian" },
        { id: 4, category: "Vegetables", price: "$3", stocked: true, name: "Broccoli" },
        { id: 5, category: "Vegetables", price: "$2", stocked: true, name: "Cabbage" },
        { id: 6, category: "Snacks", price: "$5", stocked: true, name: "Cheese Ball" },
    ]);

    return <FilterableProductTable products={products} setProducts={setProducts} />;
};

export default App;
