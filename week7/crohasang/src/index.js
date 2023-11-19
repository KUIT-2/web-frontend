import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


// application root element 설정
// 'root'라는 id를 가진 element를 설정하고, 그 element를 root로 설정
const root = ReactDOM.createRoot(document.getElementById('root'));

// root에 대한 render 메서드를 호출하여 App 컴포넌트를 렌더링. React application의 시작 지점
root.render(<App />);

