import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import MenuItem from '../../components/MenuItem/MenuItem';

import stores from '../../models/stores';
import useCartStore from '../../api/cartStore';
import BackButton from '../../components/Button/BackButton';
import { PageTitle, PageTitleSect } from '../../styles/PageStyle';
import {
  StarWrapper,
  StoreInformRow,
  StoreInformText,
  StoreInformWrapper,
  StoreMenuTitle,
  StoreMenuTitleWrapper,
  StoreReviewWrapper,
} from './Store.styles';

const Store = () => {
  const { storeId } = useParams();
  // const setStore = useCartStore((state) => state.setStore);

  const store = stores.find((s) => s.id.toString() === storeId);
  // useEffect(() => {
  //   if (store) {
  //     setStore(store);
  //   }
  // }, []);

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  return (
    <div>
      <header>
        <BackButton />
      </header>
      <section>
        <PageTitleSect>
          <PageTitle>{store.name}</PageTitle>
        </PageTitleSect>

        <StoreReviewWrapper>
          <StarWrapper>
            <AiFillStar />
          </StarWrapper>
          <p>
            별 {store.rate} 리뷰 {store.reviewCnt}
          </p>
        </StoreReviewWrapper>

        <StoreInformWrapper>
          <StoreInformRow>
            <StoreInformText>결제방법</StoreInformText>
            <StoreInformText>토스결제만 현장결제안됨</StoreInformText>
          </StoreInformRow>
          <StoreInformRow>
            <StoreInformText>최소주문</StoreInformText>
            <StoreInformText>{store.minDeliveryPrice}원</StoreInformText>
          </StoreInformRow>
          <StoreInformRow>
            <StoreInformText>배달시간</StoreInformText>
            <StoreInformText>
              약 {store.minDeliveryTime}~{store.maxDeliveryTime}분
            </StoreInformText>
          </StoreInformRow>
        </StoreInformWrapper>
      </section>

      <div>
        <StoreMenuTitleWrapper>
          <StoreMenuTitle>샐러드</StoreMenuTitle>
        </StoreMenuTitleWrapper>
        {store.menus.map((menu) => {
          return <MenuItem key={menu.id} menu={menu} store={store} />;
        })}
      </div>
    </div>
  );
};

export default Store;