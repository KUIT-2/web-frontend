import React, { useState } from "react";
import Router from "./routes/Router";
import GlobalStyles from "./components/GlobalStyles";

const App = () =>  {
  return (
    <>
    <GlobalStyles />
    <Router />
    </>
  );
  
};

export default App;
