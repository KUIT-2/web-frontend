import React from 'react';
import { Outlet } from 'react-router-dom';
import OrderBar from '../../components/OrderBar/OrderBar';

const Root: React.FC = () => {
  return (
    <div>
      <Outlet />
      <OrderBar />
    </div>
  );
};

export default Root;
