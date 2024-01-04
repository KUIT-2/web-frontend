import React, { useEffect, useState } from "react";
import NavTop from "../../components/Nav/NavTop";
import styled from "styled-components";
import useCartStore from "../../store/cartStore";
import CartItem from "../../components/CartItem/CartItem";
import { useNavigate } from "react-router-dom";
import { getCart } from "../../apis/cart";


const Cart = () => {
  const menus = useCartStore((state) => state.menus);
  const store = useCartStore((state) => state.store);
  const clearMenus = useCartStore((state) => state.clearMenus);

  const MenuTotalPrice = menus?.reduce((acc, menus) => acc + menus.price * menus.menuCount, 0);
  const TotalPrice = store?.deliveryFee + MenuTotalPrice

  
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
                <PriceSafe>주문가능</PriceSafe> : <PriceWarning>최소금액 미달</PriceWarning>}
            </StoreMinPrice >
          </StoreInfTop>
          <MenuInf>
            {menus.map((menu) => {
              return <CartItem key={menu.id} menu={menu} />;
            })}
          </MenuInf>
        </StoreInf>
        <ButtonContainer>
        <InputMoreButton onClick={handelInputMore}>더 담기 + </InputMoreButton>
        </ButtonContainer>
        <EmptySpace />
      </CartMiddle>

      <CartPrice>
        <OrderPriceContainer>
          <OrderPriceText> 주문금액 </OrderPriceText>
          <OrderPrice>{MenuTotalPrice}원</OrderPrice>
        </OrderPriceContainer>
        <DeliveryFeeContainer>
          <DeliveryFeeText>배달요금 </DeliveryFeeText>
          <DeliveryFee>{store.deliveryFee}원</DeliveryFee>
        </DeliveryFeeContainer>
        <CartTotalPriceContainer>
          <CartTotalPriceText>총 결제금액</CartTotalPriceText>
          <CartTotalPrice>{TotalPrice}원</CartTotalPrice>
        </CartTotalPriceContainer>
      </CartPrice>
      <CartBottomContainer>
      <CartBottom>
        <MinPrice>최소 주문금액 {store.minDeliveryPrice}원</MinPrice>

        <TotalPriceButton>{TotalPrice}원 결제하기</TotalPriceButton>
      </CartBottom>
      </CartBottomContainer>

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
const PriceSafe = styled.div`
color:#3182f6
`
const PriceWarning =styled.div`
display:flex;
margin:18px;
color:#f04452;
font-size:15px;
font-weight:500;
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
const ButtonContainer=styled.div`
display:flex;
justify-content:center;
`
const InputMoreButton = styled.button`
background-color:#fff;
border:none;
color:#3182f6;
font-size:16px;
font-weight:600;
margin:20px;
`
const StoreInfTop = styled.div`
display:flex;
justify-content:space-between;
`
const StoreName = styled.div`
display:flex;
align-items:center;
color:#5E5968;  
margin:18px;
font-weight:700;
font-size:17px;
`
const StoreMinPrice = styled.div`
display:flex;
margin:18px;
font-size:15px;
font-weight:500;
`
const MenuInf = styled.div`
`


const CartPrice = styled.div`
display:flex;
flex-direction:column;
padding:20px;

`


const OrderPrice = styled.div`
font-size:17px;
font-weight:500;
color:#505967;

`
const OrderPriceContainer =styled.div`
display: flex;
flex-direction: row;
justify-content:space-between
`
const OrderPriceText =styled.div`
font-size:17px;
font-weight:500;
color:#8b95a1;
`
const DeliveryFee = styled.div`
font-size:17px;
font-weight:500;
color:#505967;
margin-top:10px;
`
const DeliveryFeeContainer =styled.div`
display: flex;
flex-direction: row;
justify-content:space-between

`
const DeliveryFeeText = styled.div`
font-size:17px;
font-weight:500;
color:#8b95a1;
margin-top:10px;
`

const CartTotalPrice = styled.div`
font-size:17px;
font-weight:600;
color:#4E5968;
margin-top:16px;

`
const CartTotalPriceContainer = styled.div`
display: flex;
flex-direction: row;
justify-content:space-between
`
const CartTotalPriceText =styled.div`
font-size:17px;
font-weight:500;
color:#4E5968;
margin-top:16px;

`

const CartBottom = styled.div`
position:fixed;
bottom:0;

`
const CartBottomContainer = styled.div`
display:flex;
justify-content:center;

`
const TotalPriceButton = styled.button`
border-radius: 12px;
background-color: #3182f6;
cursor: pointer;
font-size:16px;
font-weight:600;
color:#ffffff;
border:none;
width:350px;
height:56px;
margin:10px;
`

const MinPrice = styled.div`
font-size:17px;
font-weight:500;
color:#6b7684;
padding:10px;
margin-left:80px;
`