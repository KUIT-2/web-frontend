import React from "react";
import useCartStore from "../../store/cartStore";
import styled from 'styled-components';

const Store = styled.div`
  display: flex;
  height: 110px
`;

const MenuImage = styled.div`
  box-sizing: border-box;
  border-radius: 27px;
  background: #ECECEC;
  width: 54px;
  height: 54px;
  flex-shrink: 0;
  margin-top: 28px;
  margin-bottom: 28px;
  margin-left: 24px;
`;

const MenuInfo = styled.div`
  display : flex;
  flex-direction: column;
  margin: 16px 19px 16px 16px;
  gap: 5px;
  width: 201px; 
`;

const MenuName = styled.span`
  color: #333D4B;
  font-family: Pretendard-SemiBold;
  font-size: 17px;
  line-height: normal;
`;

const Menu = styled.span`
  color: #6B7684;
  font-family: Pretendard-Medium;
  font-size: 13px;
  font-style: normal;
  line-height: normal;
`;

const Button = styled.div`
  display: inline-flex;
  padding: 8px 14px 8px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #3182F6;
  color: #FFF;
  text-align: center;
  font-family: Pretendard-Medium;
  font-size: 13px;
  line-height: normal;
  width: 23px;
  height: 16px;
  margin: 40px 24px 30px 0px;
  box-sizing: content-box;
`;

const MenuItem = ({ menu }) => {
  const addMenu = useCartStore((state) => state.addMenu);

  const handleAddMenu = () => {
    addMenu(menu);
  };

  return (
    <Store>
      <MenuImage />
      <MenuInfo>
        <MenuName>{menu.name}</MenuName>
        <Menu>{menu.price}원</Menu>
        <Menu>{menu.ingredients}</Menu>
      </MenuInfo>
      <Button onClick={handleAddMenu} type="button">
        담기
      </Button>
    </Store>
  );
};

export default MenuItem;