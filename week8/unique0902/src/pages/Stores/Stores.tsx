import React, { useEffect, useState } from 'react';
import BackButton from '../../components/Button/BackButton/BackButton';
import StoreListItem from '../../components/StoreListItem/StoreListItem';
import { getStores } from '../../models/store';
import { Store } from '../../store/type/store';
import { PageTitle, PageTitleSect } from '../../styles/PageStyle';

const Stores = () => {
  const [stores, setStores] = useState<Store[] | undefined>();

  useEffect(() => {
    getStores().then((value) => setStores(value));
  }, []);

  return (
    <React.Fragment>
      <header>
        <BackButton />
      </header>
      <PageTitleSect>
        <PageTitle>샐러드</PageTitle>
      </PageTitleSect>
      {stores &&
        stores.map((store) => <StoreListItem store={store} key={store.id} />)}
    </React.Fragment>
  );
};

export default Stores;
