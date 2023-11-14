import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Root: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Root;
