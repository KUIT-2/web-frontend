import React from 'react';
import BackButton from '../../components/Button/BackButton';
import StoreListItem from '../../components/StoreListItem/StoreListItem';

const Stores = () => {
  return (
    <div>
      <header>
        <BackButton />
      </header>
      <h2>샐러드</h2>
      <StoreListItem />
      <StoreListItem />
      <StoreListItem />
    </div>
  );
};

export default Stores;
