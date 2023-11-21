import React from 'react';
import { Link } from 'react-router-dom';
import { PizzaIcn } from '../../asset/img/food-category/food-icon';
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
      <ul>
        <li>
          <PizzaIcn width={28} height={28} />
          <p>피자</p>
        </li>
      </ul>
      <Link to={'store'}>store</Link>
    </>
  );
};

export default Home;
