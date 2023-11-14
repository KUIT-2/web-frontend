import React from 'react';
import useCartStore from '../../api/cartStore';
import { Menu } from '../../store/type/menu';

type Props = {
  menu: Menu;
};

const MenuItem = ({ menu }: Props) => {
  const addMenu = useCartStore((state) => state.addMenu);

  const handleAddMenu = () => {
    addMenu(menu);
  };

  return (
    <div>
      <h3>{menu.name}</h3>
      <span>{menu.price}</span>
      <p>{menu.ingredients}</p>
      <button onClick={handleAddMenu} type='button'>
        담기
      </button>
    </div>
  );
};

export default MenuItem;
