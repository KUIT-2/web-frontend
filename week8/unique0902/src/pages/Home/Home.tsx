import React from 'react';
import { Link } from 'react-router-dom';
import FoodCategories from '../../components/FoodCategories/FoodCategories';
import {
  PageSubTitle,
  PageTitle,
  PageTitleWithSubSect,
} from '../../styles/PageStyle';

const Home = () => {
  return (
    <>
      <PageTitleWithSubSect>
        <PageTitle>오늘은 무엇을 먹을까요?</PageTitle>
        <PageSubTitle>
          한남중앙로 40길 (한남 빌리지)(으)로 배달{' >'}
        </PageSubTitle>
      </PageTitleWithSubSect>
      <FoodCategories />
    </>
  );
};

export default Home;
