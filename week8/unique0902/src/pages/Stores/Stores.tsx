import React from 'react';
import BackButton from '../../components/Button/BackButton';
import StoreListItem from '../../components/StoreListItem/StoreListItem';
import { PageTitle, PageTitleSect } from '../../styles/PageStyle';

const Stores = () => {
  return (
    <React.Fragment>
      <header>
        <BackButton />
      </header>
      <PageTitleSect>
        <PageTitle>샐러드</PageTitle>
      </PageTitleSect>
      <StoreListItem ranking='1위' />
      <StoreListItem />
      <StoreListItem />
    </React.Fragment>
  );
};

export default Stores;
