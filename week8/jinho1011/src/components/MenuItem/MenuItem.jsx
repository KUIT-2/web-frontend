import React from "react";

const MenuItem = ({ menu }) => {
  return (
    <div>
      <h3>{menu.name}</h3>
      <span>{menu.price}</span>
      <p>{menu.ingredients}</p>
      <button type="button">담기</button>
    </div>
  );
};

export default MenuItem;
