import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleGoStore = () => {
    navigate("/store") 
}
  return <div>Home
    <button onClick={()=> handleGoStore()}>Go to Stores</button>
  </div>;

};

export default Home;
