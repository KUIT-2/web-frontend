import { createRoot } from "react-dom/client";
//createRoot란 react-dom패키지에 속한 함수 react요소를 dom
// 에 렌더링하기 위한 진입점을 나타내는 루트컴포넌트를 생성
import App from "./App.js"

const root = createRoot(document.getElementById("app"));

root.render(<App />);