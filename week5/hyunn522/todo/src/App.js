import React from "react";
import data from './db.json';
import Todo from './Todo';
// 컴포넌트는 다른 컴포넌트의 내부에 절대 선언하지 말 것
// 항상 분리하여 외부에 선언할 것

const Header = (props) => {
    const { name, hasName, children } = props;
    return (
    <div>
        <h1
            className="header--name"
            style={{
                backgroundColor: "gray", // JSX에선 camelcase로 작성할 것 (ctrl + ?)
            }}
            >
                {/* Hello { hasName && name} */}
                Hello { hasName ? name : ""}
            </h1>
        <h2>Menus</h2>
        <div>{ children }</div>
    </div>
    );
};

const App = () => {
    const name = "jeong seo hyun";
    const hasHeader = true;


    return <div>
        <header>
            { hasHeader ? (
                <Header name={ name } hasName>
                    <div>냐냐</div>
                </Header>
            ) : null}
            </header>
        <main>
            {data.todos.map((value, index) => {
                return <Todo key={value.id} todo={value} />;
            })}
            {/* 1. <Todo todo={data.todos[0]}/> */}
            {/* 2. <Todo
                title={data.todos[0].title}
                created={data.todos[0].createdAt}
                completed={data.todos[0].completed}
            /> */}
        </main>
    </div>;
};


// export { App }; -> js 내에서 여러 개를 export할 때
// import { App } from "./App"; 

// export default App; -> 대표되는 애를 export할 때 // 보통 얘 사용
// import App from "./App";

export default App;