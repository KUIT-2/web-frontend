import React from "react";
import Todo from "./Todo"
import data from "./db.json";
const Header = (props) => {
    //비구조화 할당 
    // const { name } = props; 일케 하거나 매개변수를 받는 부분에서 바로 넣어줄 수 있음
    const { name, hasName, children } = props;
    return (
        <div>
            <h1
                className="header--name"
                style={{ backgroundColor: "blue" }}
            >
                Hello{hasName && name}
                {/* Hello {hasName ? name : ""} */}

            </h1>
            <h2>Menus</h2>
            <div>{children}</div>
        </div>
    );
};

const App = () => {
    const name = "JHJ"
    const hasHeader = true;

    return (
        <div>
            <header>{hasHeader ? <Header name={name} hasName={true}>
                asd
            </Header> : null}</header>
            <main>
                {data.todos.map((value, index) => {
                    return <Todo key={value.id} todo={value} />;
                })}
            </main>
        </div>
    );
};

// export하는 두가지 방법
//export {App};
// 여러개를 내보내고 싶을 때
export default App;
// 이파일에서 대표되는 것을 내보낼 때