import React from "react";
import Router from "./pages";
import { Normalize } from "styled-normalize";
import './App.css';
import GlobalStyle from "./pages/GlobalStyle";

function App() {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;