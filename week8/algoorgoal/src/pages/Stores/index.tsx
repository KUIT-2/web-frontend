import React from 'react';
import { useParams } from 'react-router';
import Menu from '../../components/Menu';
import StoreProfile from '../../components/StoreProfile';

export default function Stores() {
  return (
    <>
      <StoreProfile />
      <Menu />
    </>
  );
}
