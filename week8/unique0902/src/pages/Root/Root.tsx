import React from 'react';
import { Outlet } from 'react-router-dom';
import OrderBar from '../../components/OrderBar/OrderBar';
import { RootWrapper } from './Root.styles';

const Root: React.FC = () => {
  return (
    <RootWrapper>
      <Outlet />
      <OrderBar />
    </RootWrapper>
  );
};

export default Root;
