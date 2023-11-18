import React from "react";

const MenuItem = ({ menu, handleAddMenu }) => {
  return (
    <div>
      <h3>{menu.name}</h3>
      <span>{menu.price}</span>
      <p>{menu.ingredients}</p>
      <button onClick={handleAddMenu} type="button">
        담기
      </button>
    </div>
  );
};

export default MenuItem;
