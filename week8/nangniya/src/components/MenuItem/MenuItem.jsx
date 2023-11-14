import React from "react";
import useCartStore from "../../store/cartStore";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 110px;
  padding: 20px;
  gap: 15px;
`;

const MenuImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: #ececec;
  width: 64px;
  height: 64px;
`;

const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: bold;
  flex-grow: 1;
  max-width: 220px;
  p {
    margin: 2px 0;
    display: flex;
    align-items: center;
    color: #6b7684;
    font-size: 14px;
  }
`;

const MenuName = styled.span`
  display: flex;
  gap: 5px;
  margin-bottom: 2px;
  .best {
    color: #3182f6;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CartButton = styled.button`
  background-color: #3182f6;
  border-radius: 12px;
  color: white;
  border: none;
  padding: 10px 15px;
`;

const MenuItem = ({ menu }) => {
  const addMenu = useCartStore((state) => state.addMenu);

  const handleAddMenu = () => {
    addMenu(menu);
  };

  return (
    <Wrapper>
      <MenuImage />
      <MenuBox>
        <MenuName>
          <h3>{menu.name}</h3>
          {menu.isBest ? <h3 className="best">BEST</h3> : null}
        </MenuName>
        <p>{menu.price}</p>
        <p>{menu.ingredients}</p>
      </MenuBox>
      <ButtonWrapper>
        <CartButton onClick={handleAddMenu} type="button">
          담기
        </CartButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default MenuItem;
