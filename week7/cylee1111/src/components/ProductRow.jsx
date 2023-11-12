import React from "react";
import styled from "styled-components";

const StyledBtn = styled.input`
  border: 0;
  background-color: transparent;
`;

const ProductEl = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-between;
`

const ProductRow = ({ product, deleteProduct }) => {
  // { category: "Fruits", price: "$1", stocked: true, name: "Apple" }
  const handleDelete = () => {
    deleteProduct(product.name);
  };

  return (
    <ProductEl>
      <div style={{ color: product.stocked ? "black" : "red" }}>
        {product.name}
      </div>
      <div>
        <span>{product.price}</span>
        <span>
          <StyledBtn onClick={handleDelete} type={"button"} value={" 🗑️"}></StyledBtn>
        </span>          
      </div>
    </ProductEl>            

  );
};

export default ProductRow;
