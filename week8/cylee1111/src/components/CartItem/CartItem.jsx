import React from "react";
import useCartStore from "../../store/cartStore";

import { useNavigate } from "react-router-dom";
import { NextButton } from "../../assets";

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
          <h2>{store?.name}</h2>
          <div> 
            {uniqueMenus.map((menu, index) =>(
              <div key={index}>
                <h2>{menu.name}</h2>
                <p>{menu.price}원</p>
                <p>{menuCounts[menu.name]}개</p>
                <NextButton />
              </div>
            ))}                 
            <button type="button" onClick={handleAddMore}>더 담기 +</button>
            <div>
              <span>주문금액</span>
              <span>{totalPrices}</span>
            </div>
            <div>
              <span>배달요금</span>
              <span>{store.deliveryFee}</span>
            </div>
            <div>
              <span>총 결제금액</span>
              <span>{totalPrices + store.deliveryFee}</span>
            </div>            
          </div>
        </>
      ) : (
        <p>메뉴를 먼저 담아주세요 🥺</p>
      )}
    </div>
  );
};

export default CartItem;