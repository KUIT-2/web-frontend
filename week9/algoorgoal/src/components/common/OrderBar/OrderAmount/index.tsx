import React from "react";

interface OrderAmountPropsType {
  orderAmount: number;
}

export default function OrderAmount({ orderAmount }: OrderAmountPropsType) {
  return <>{orderAmount}원</>;
}
