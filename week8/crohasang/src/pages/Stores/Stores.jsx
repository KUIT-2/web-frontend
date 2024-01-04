import React from "react";
import { useNavigate } from "react-router-dom";
import stores from "../../models/stores";
import * as S from "./Stores.styles";
import OrderBar from "../../components/OrderBar/OrderBar";


// 정렬
const sortedStores = stores.slice().sort((a, b) => b.rate - a.rate);


const Stores = () => {
  const [store1, store2, store3] = sortedStores;

  const navigate = useNavigate();

  const handleStoreButtonClick = (storeId) => {
    navigate(`/store/${storeId}`);
  };

  const backArrowClick = () => {
    navigate(`/`);
  }

  return (
    <S.WrapStores>
      <S.StoresTop>
        <S.BackArrow onClick= {() => backArrowClick()}/>
        <S.FoodType>샐러드</S.FoodType>
      </S.StoresTop>
      
      <S.StoresList>
        {/* Store 1 */}
        <S.StoreButton onClick= {() => handleStoreButtonClick(store1.id)}>
          <S.StorePic />
          <S.StoreInfoList>
            <S.StoreInfo1>
              <div>1위</div>
              <div>{store1.name}</div>
            </S.StoreInfo1>
            <S.StoreInfo2>
              <div>★ {store1.rate} ({store1.reviewCnt})</div>
              <div>{store1.minDeliveryTime}분~{store1.maxDeliveryTime}분 · 배달비 {store1.deliveryFee}원</div>
            </S.StoreInfo2>
          </S.StoreInfoList>
          
        </S.StoreButton>
        
        {/* Store 2 */}
        <S.StoreButton onClick= {() => handleStoreButtonClick(store2.id)}>
          <S.StorePic />
          <S.StoreInfoList>
            <S.StoreInfo1>
              <div>2위</div>
              <div>{store2.name}</div>
            </S.StoreInfo1>
            <S.StoreInfo2>
              <div>★ {store2.rate} ({store2.reviewCnt})</div>
              <div>{store2.minDeliveryTime}분~{store2.maxDeliveryTime}분 · 배달비 {store2.deliveryFee}원</div>
            </S.StoreInfo2>
          </S.StoreInfoList>
          
        </S.StoreButton>
        
        {/* Store 3 */}
        <S.StoreButton onClick= {() => handleStoreButtonClick(store3.id)}>
          {/* <Link to={`/store/${store3.id}`} /> */}
          <S.StorePic />
          <S.StoreInfoList>
            <S.StoreInfo1>
              <div>3위</div>
              <div>{store3.name}</div>
            </S.StoreInfo1>
            <S.StoreInfo2>
              <div>★ {store3.rate} ({store3.reviewCnt})</div>
              <div>{store3.minDeliveryTime}분~{store3.maxDeliveryTime}분 · 배달비 {store3.deliveryFee}원</div>
            </S.StoreInfo2>
          </S.StoreInfoList>
          
        </S.StoreButton>
        
      </S.StoresList>
      
      <OrderBar />
    </S.WrapStores>
    
    
  );
};

export default Stores;
