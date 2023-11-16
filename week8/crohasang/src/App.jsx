import Router from "./pages";
import { Normalize } from "styled-normalize";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Normalize />
      <Router />
    </>
  );
}

export default App;
