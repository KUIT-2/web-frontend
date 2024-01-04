import React from "react";
import { useNavigate } from "react-router-dom";
import useCartStore from "../../store/cartStore";
import * as S from "./Cart.styles";
import * as M from "../../components/MenuItem/MenuItem.styles";




const Cart = () => {
  const menus = useCartStore((state) => state.menus);
  const store = useCartStore((state) => state.store);
  const menuCounts = useCartStore((state) => state.menuCounts);
  const clearMenus = useCartStore((state) => state.clearMenus);
  const navigate = useNavigate();


  const GoBackClick = (storeId) => {
    navigate(`/store/${storeId}`);
  }

  const BuyAvailableClick = () => {
    alert("구매에 성공하셨습니다!!!");
    clearMenus();
    navigate(`/store`);
  }

  const handleCancelOrderClick = () => {
    alert("주문을 취소하셨습니다.");
    clearMenus();
    navigate(`/store`);
  };


  const deliveryPrice = menus.reduce((total, menu) => {
    const menuPrice = menu.price;
    return total + menuPrice;
  }, 0);

  const totalPrice = deliveryPrice + store.deliveryFee;


  
  const isBuyButtonActive = totalPrice >= store.minDeliveryPrice;

  // 중복되지 않게 화면을 보여주기 위하여
  const uniqueMenus = [...new Set(menus.map((menu) => menu.id))].map((id) =>
  menus.find((menu) => menu.id === id)

  
);


  return (
  <S.WrapCart>
    
    <S.CartTop>
      <S.BackArrow onClick = {() => GoBackClick(store?.id)} />
      <S.CancelOrder onClick= {() => handleCancelOrderClick()}>주문취소</S.CancelOrder>
    </S.CartTop>

    <S.OrderList>
      <S.NameandReached>
      <S.StoreName>{store?.name}</S.StoreName>
      {isBuyButtonActive ? null : <S.PricenotReached>최소금액 미달</S.PricenotReached>}
      </S.NameandReached>
      <S.MenuDiv>
      {uniqueMenus.map((menu) => {
          return (
            <>
            
            <M.WrapMenu>
              <S.CartMenuThumbnail />
              <M.MenuInfo>
                <M.MenuName>{menu.name}</M.MenuName>
                <M.AboutMenu>{menu.ingredients}</M.AboutMenu>
                <M.AboutMenu>{menu.price}원</M.AboutMenu>
              </M.MenuInfo>
      

              <S.MenuCnt>{menuCounts[menu.id]}개</S.MenuCnt>
            </M.WrapMenu>

            
            
            </>
          );
        })}
        <S.AddMore onClick = {() => GoBackClick(store?.id)}>더 담기 +</S.AddMore>
        
      </S.MenuDiv>
    </S.OrderList>
    
    <S.PriceInfo>
          <S.PriceSentence>
            <span>
              주문금액
            </span>
            <span>
            {deliveryPrice}원
            </span>
          </S.PriceSentence>

          <S.PriceSentence>
            <span>
              배달요금
            </span>
            <span>
              {store?.deliveryFee}원
            </span>
          </S.PriceSentence>

          <S.TotalPriceSentence>
            <span>
              총 결제 금액
            </span>
            <span>
              {totalPrice}원
            </span>
          </S.TotalPriceSentence>

      </S.PriceInfo>

      <S.CartBottom>
      <S.ShowminDeliveryPrice>최소 주문 금액 {store?.minDeliveryPrice}원</S.ShowminDeliveryPrice>
      <S.BuyButton
        style={{ backgroundColor: isBuyButtonActive ? "#3182F6" : "#D0DFFB"}}
        onClick={isBuyButtonActive ? BuyAvailableClick : null}
        > {totalPrice}원 결제하기 </S.BuyButton>
      </S.CartBottom>
    
    </S.WrapCart>
  );
};

export default Cart;
