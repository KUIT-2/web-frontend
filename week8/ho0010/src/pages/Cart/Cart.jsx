import React from "react";
import NavTop from "../../components/Nav/NavTop";
import styled from "styled-components";
import useCartStore from "../../store/cartStore";
import CartItem from "../../components/CartItem/CartItem";
const Cart = () => {
  const menus = useCartStore((state) => state.menus);
  const store = useCartStore((state) => state.store);

  if (!store) {
    return <div>메뉴를 담아주세요 🥺</div>;
  }

  const TotalPrice = store.deliveryFee + menus.reduce((acc, menus) => acc + menus.price, 0);

  return (
    <div>
      <CartTop>
        <NavTop />
        <CartTopButton>주문취소</CartTopButton>
      </CartTop>

      <CartMiddle>
        <EmptySpace />
        <StoreInf>

          <StoreInfTop>
            <StoreName>
              {store.name}
            </StoreName>
            <StoreMinPrice>
              {TotalPrice >= store.minDeliveryPrice ?
                <p>주문가능합니다</p> : <p>최소금액 미달</p>}
            </StoreMinPrice >
          </StoreInfTop>
          <MenuInf>
            {menus.map((menu) => {
              return <CartItem key={menu.id} menu={menu} />;
            })}
          </MenuInf>

        </StoreInf>
        <InputMore >더 담기 +
        </InputMore>
        <EmptySpace />
      </CartMiddle>
    </div>
  )
};

export default Cart;

const CartTop = styled.div`
display:flex; 
justify-content:space-between;
`
const CartTopButton = styled.button`
border:none;
background-color: #ffffff;
display:flex;
margin:15px;
font-weight:bold;
cursor: pointer;
`

const CartMiddle = styled.div`

`

const EmptySpace = styled.div`
background-color:#f2f4f6;
height:16px;  
width:390px;
`
const StoreInf = styled.div`

`
const InputMore = styled.button`
`
const StoreInfTop = styled.div`
display:flex;
justify-content:space-between;
`
const StoreName = styled.div`
display:flex;
align-items:center;
`
const StoreMinPrice = styled.div`
`
const MenuInf = styled.div`
`