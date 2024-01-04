import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getStores } from "../../apis/stores";
import * as S from "./Stores.styles";
import OrderBar from "../../components/OrderBar/OrderBar";

const Stores = () => {
  const [stores, setStores] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStores = async () => {
      const storesData = await getStores();

      // 정렬
      const sortedStores = storesData.slice().sort((a, b) => b.rate - a.rate);

      if (sortedStores) {
        setStores(sortedStores);
      }
    };

    fetchStores();
  }, []);

  const handleStoreButtonClick = (storeId) => {
    navigate(`/store/${storeId}`);
  };

  const backArrowClick = () => {
    navigate(`/`);
  };

  return (
    <S.WrapStores>
      <S.StoresTop>
        <S.BackArrow onClick={() => backArrowClick()} />
        <S.FoodType>샐러드</S.FoodType>
      </S.StoresTop>

      <S.StoresList>
        {stores.map((store, index) => (
          <S.StoreButton
            key={store.id}
            onClick={() => handleStoreButtonClick(store.id)}
          >
            <S.StorePic />
            <S.StoreInfoList>
              <S.StoreInfo1>
                <div>{index + 1}위</div>
                <div>{store.name}</div>
              </S.StoreInfo1>
              <S.StoreInfo2>
                <div>
                  ★ {store.rate} ({store.reviewCnt})
                </div>
                <div>
                  {store.minDeliveryTime}분~{store.maxDeliveryTime}분 · 배달비{" "}
                  {store.deliveryFee}원
                </div>
              </S.StoreInfo2>
            </S.StoreInfoList>
          </S.StoreButton>
        ))}
      </S.StoresList>

      <OrderBar />
    </S.WrapStores>
  );
};

export default Stores;
