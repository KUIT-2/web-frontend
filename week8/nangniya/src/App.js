import Router from "./pages";
import { Normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  p, h3{
    margin: 0;
  }
`;

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
