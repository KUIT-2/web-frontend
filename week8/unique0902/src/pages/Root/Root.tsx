import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import PriceSumFooter from '../../components/PriceSumFooter/PriceSumFooter';

const Root: React.FC = () => {
  return (
    <div>
      <Outlet />
      <PriceSumFooter />
    </div>
  );
};

export default Root;
