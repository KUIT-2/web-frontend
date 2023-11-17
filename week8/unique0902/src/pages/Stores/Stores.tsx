import React from 'react';
import BackButton from '../../components/Button/BackButton';
import StoreListItem from '../../components/StoreListItem/StoreListItem';
import stores from '../../models/stores';
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
      {stores.map((store) => (
        <StoreListItem store={store} key={store.id} />
      ))}
    </React.Fragment>
  );
};

export default Stores;
