import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const StoreListItem: React.FC = ({}: Props) => {
  return (
    <Link to={'1'}>
      <img src='' alt='' />
      <div>
        <p>1위</p>
        <p>셀로리 한남점</p>
        <p>✨4.9(3,919)</p>
        <p>13분~30분.배달비 2,000원</p>
      </div>
    </Link>
  );
};

export default StoreListItem;
