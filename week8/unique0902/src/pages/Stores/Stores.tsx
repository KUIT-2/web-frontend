import React from 'react';
import StoreListItem from '../../components/StoreListItem/StoreListItem';

const Stores = () => {
  return (
    <div>
      <button>{'<'}</button>
      <h2>샐러드</h2>
      <StoreListItem />
      <StoreListItem />
      <StoreListItem />
    </div>
  );
};

export default Stores;
