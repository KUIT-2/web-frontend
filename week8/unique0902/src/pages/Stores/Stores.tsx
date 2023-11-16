import React from 'react';
import BackButton from '../../components/Button/BackButton';
import StoreListItem from '../../components/StoreListItem/StoreListItem';

const Stores = () => {
  return (
    <React.Fragment>
      <header>
        <BackButton />
      </header>
      <h2>샐러드</h2>
      <StoreListItem ranking='1위' />
      <StoreListItem />
      <StoreListItem />
    </React.Fragment>
  );
};

export default Stores;
