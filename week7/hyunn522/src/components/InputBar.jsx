import React, { useState } from 'react'

const InputBar = ({ addProduct }) => {
    const [newProduct, setNewProduct] = useState({
        category: "",
        price: "",
        stocked: true,
        name: ""
    });

    const handleChange = (value, label) => {
        setNewProduct((prev) => ({...prev, [label]: value}));
    }

    const handleAddNewProduct = () => {
        addProduct(newProduct);
    }


  return (
    <form>
        <input
          type={"text"}
          value={newProduct.category}
          placeholder="category..."
          onChange={(e) => handleChange(e.target.value, "category")} 
        //   onChange={(e) => setNewProduct({...newProduct, category: "changed"})}
        />
        <input
            type={"text"}
            value={newProduct.price}
            placeholder="price..."
            onChange={(e) => handleChange(e.target.value, "price")}
        />
        <label>IsStocked</label>
        <input
            type={"checkbox"}
            checked={newProduct.stocked}
            onChange={(e) => handleChange(e.target.value, "stocked")}
        />
        <input
            type={"text"}
            value={newProduct.name}
            placeholder="name..."
            onChange={(e) => handleChange(e.target.value, "name")}
        />
        <button onClick={handleAddNewProduct} type={"button"}>
            add new product
        </button>
    </form>
  )
}

export default InputBar