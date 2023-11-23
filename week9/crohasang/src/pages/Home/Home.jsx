import React from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

  const GoStoreClick = () => {
    navigate(`/store`);
  }

  const buttonStyle = {
    position: "relative",
    top: "40vh",
    display: "flex",
    width: "100%",
    height: "100%",
    fontSize: "100px",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    textDecoration: "none",
    color: "white",
    cursor: "pointer",

    
        
  };


  return <button 
  style = {buttonStyle}  
  onClick= {() => GoStoreClick()} >Click to Start</button>;
};

export default Home;
