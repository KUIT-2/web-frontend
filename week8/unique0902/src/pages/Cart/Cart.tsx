import React from 'react';
import BackButton from '../../components/Button/BackButton';
const Cart = () => {
  return (
    <div>
      <header>
        <BackButton />
        <button>주문취소</button>
      </header>
      <section>
        <div>
          <h3>샐로리 한남점</h3>
          <p>최소금액 미달</p>
        </div>
        <div>
          <img src='' alt='' />
          <div>
            <p>토마토 샐러드</p>
            <div>
              <p>추천소스, 채소볼, 베이컨추가, 시저드레싱 추가</p>
              <p>1개</p>
              <p>{'>'}</p>
            </div>
            <p>10600원</p>
          </div>
        </div>
        <button>더 담기 +</button>
      </section>
      <section>
        <div>
          <p>주문금액</p>
          <p>10600원</p>
        </div>
        <div>
          <p>배달요금</p>
          <p>2000원</p>
        </div>
        <div>
          <p>총 결제금액</p>
          <p>12600원</p>
        </div>
      </section>
      <footer>
        <p>최소 주문금액 130000원</p>
        <button>12600원 결제하기</button>
      </footer>
    </div>
  );
};

export default Cart;
