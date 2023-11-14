import React from 'react';

type Props = {};

const PriceSumFooter: React.FC = ({}: Props) => {
  return (
    <footer>
      <div>
        <p>총 주문금액</p>
        <p>12000원</p>
      </div>
      <button>주문하기</button>
    </footer>
  );
};

export default PriceSumFooter;
