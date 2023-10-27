import React from "react";
import Todo from "./Todo";
import data from "./db.json";

const Header = (props) => {
  const { name, hasName, children } = props; //비구조화 할당: 객체나 배열의 속성을 해체하여 개별 변수에 값을 쉽게 담을 수 있는 js 표현식
  return (
    <div>
      <h1
        className="header--name"
        style={{
          backgroundColor: "gray",
        }}
      >
        Hello {hasName && name} 
      </h1>
      <h2>....</h2>
      <div>{children}</div>
    </div>
  );
};

const App = () => {
  const hasHeader = true;
  const name = "soeun";

  return (
    <div>
      <header>
        {hasHeader ? (
          <Header name={name} hasName={false}>
            ....
          </Header> // 컴포넌트 사용, 컴포넌트안에 다른 컴포넌트 선언 X
        ) : null}
      </header>
      <main>
        {data.todos.map((value, index) => {
          return <Todo key={value.id} todo={value} />;
        })}
      </main>
    </div>
  );
};

export default App;
//App 함수를 내보내는 방법

// export default App; : 이 파일의 대표적인 애 하나만 내보낼 경우
// import App from "./App";

//export {App}; : 여러개의 함수를 내보낼 경우
// import { App } from "./App";