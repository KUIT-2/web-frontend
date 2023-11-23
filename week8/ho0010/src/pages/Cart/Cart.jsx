import React from "react";
import NavTop from "../../components/Nav/NavTop";
import styled from "styled-components";
import useCartStore from "../../store/cartStore";
import CartItem from "../../components/CartItem/CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const menus = useCartStore((state) => state.menus);
  const store = useCartStore((state) => state.store);
  const clearMenus = useCartStore((state) => state.clearMenus);

  const MenuTotalPrice = menus.reduce((acc, menus) => acc + menus.price * menus.menuCount, 0);
  const TotalPrice = store.deliveryFee + MenuTotalPrice

  const navigate = useNavigate();

  const handelInputMore = () => {
    navigate(-1);
  }

  const handleClearOrder = () => {
    clearMenus();
    navigate('/store');
  }

  if (!store) {
    return <div>메뉴를 담아주세요 🥺</div>;
  }


  return (
    <div>
      <CartTop>
        <NavTop />
        <CartTopButton onClick={handleClearOrder}>주문취소</CartTopButton>
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
        <InputMore onClick={handelInputMore}>더 담기 + </InputMore>
        <EmptySpace />
      </CartMiddle>

      <CartPrice>
        <OrderPrice>주문금액 {MenuTotalPrice}</OrderPrice>
        <DeliveryFee>배달요금 {store.deliveryFee}</DeliveryFee>
        <CartTotalPrice>총 결제금액 {TotalPrice}</CartTotalPrice>
      </CartPrice>

      <CartBottom>
        <MinPrice>최소 주문금액 {store.minDeliveryPrice}</MinPrice>

        <TotalPriceButton>{TotalPrice}원 결제하기</TotalPriceButton>
      </CartBottom>


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


const CartPrice = styled.div`
`
const MinPrice = styled.div`
`
const TotalPriceButton = styled.button`
`
const OrderPrice = styled.div`
`
const DeliveryFee = styled.div`
`
const CartBottom = styled.div`
`
const CartTotalPrice = styled.div`
`