import React from "react";
import { useNavigate } from "react-router-dom";

const StoreItem = ({ store }) => {
  const navigate = useNavigate();

  const handleMoveToStore = () => {
    navigate(`/store/${store.id}`);
  };

  return(
    <div onClick={handleMoveToStore}>
      <h3>{store.name}</h3>
      <div>
        {store.rate} {'('}{store.reviewCnt}{')'}
      </div>
      <div>
        {store.minDeliveryTime}분~{store.maxDeliveryTime}분 • 배달비 {store.minDeliveryPrice}원
      </div>
    </div>
  )
};

export default StoreItem;