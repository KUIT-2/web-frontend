import React from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./CartItem.styles"

import { NextButton } from "../../assets";
import { Alert } from "../../assets";

import useCartStore from "../../store/cartStore";

const CartItem = () => {
  const store = useCartStore((state) => state.store);
  const menus = useCartStore((state) => state.menus);
  console.log(menus);

  // 중복 제거된 메뉴 배열
  const uniqueMenus = Array.from(new Set(menus.map((menu) => menu.name))).map(
    (menuName) => menus.find((menu) => menu.name === menuName)
  );

  // 중복 메뉴 개수 계산
  const menuCounts = menus.reduce((acc, menu) => {
    acc[menu.name] = (acc[menu.name] || 0) + 1;
    return acc;
  }, {});

  // 총 가격 계산
  const totalPrices = uniqueMenus.reduce(
    (total, menu) => total + menu.price * menuCounts[menu.name],
    0
  );

  // 더 담기 버튼 클릭
  const navigate = useNavigate();
  const handleAddMore = () => {
    navigate(-1);
  };
  

  return (
    <div>
      {menus.length > 0 ? (
        <>
          <S.Cart>
            <S.StoreName>{store?.name}</S.StoreName>
            {/* 최소금액미달 조건 분기 */}
            {totalPrices < store?.minDeliveryPrice && (
              <S.LessThanMin>
                <span>최소금액 미달</span> 
                <S.Alert><Alert /></S.Alert> 
              </S.LessThanMin>
            )}
            {uniqueMenus.map((menu, index) =>(
              <S.CartItemContainer key={index}>
                <S.CartImage></S.CartImage>
                <S.CartDescWrapper>
                  <S.CartName>{menu.name}</S.CartName>
                  <S.CartDesc>{menu.price}원</S.CartDesc>
                </S.CartDescWrapper>
                <S.CartDesc>{menuCounts[menu.name]}개</S.CartDesc>                  
                <NextButton />
              </S.CartItemContainer>
            ))}                 
            <S.AddMoreBtn type="button" onClick={handleAddMore}>더 담기 +</S.AddMoreBtn>
          </S.Cart>
          <S.CartResultWrapper>
            <S.ResultWrapper>
              <S.ResultDesc>주문금액</S.ResultDesc>
              <S.ResultPrice>{totalPrices}원</S.ResultPrice>
            </S.ResultWrapper>
            <S.ResultWrapper>
              <S.ResultDesc>배달요금</S.ResultDesc>
              <S.ResultPrice>{store.deliveryFee}원</S.ResultPrice>
            </S.ResultWrapper>
            <S.TotalWrapper>
              <S.Total>총 결제금액</S.Total>
              <S.Total>{totalPrices + store.deliveryFee}원</S.Total>
            </S.TotalWrapper>              
          </S.CartResultWrapper>
          {/* 최소금액미달 조건 분기 */}
          {totalPrices >= store?.minDeliveryPrice ? (
            <S.PaymentBtnActive>
              {totalPrices + store.deliveryFee}원 결제하기
            </S.PaymentBtnActive>
          ) : (
            <S.PaymentBtn>
              {totalPrices + store.deliveryFee}원 결제하기
            </S.PaymentBtn>
          )}
        </>
      ) : (
        <S.Notice>메뉴를 먼저 담아주세요 🥺</S.Notice>
      )}
    </div>
  );
};

export default CartItem;