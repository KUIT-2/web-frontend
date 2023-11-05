import React from "react";
import data from "./db.json";
import Todo from "./Todo";

const Header = (props) => {
    const { name, hasName, children } = props;
    return (
        <div>
            <h1
                className="header--name"
                style={
                    { backgroundColor:"gray" }
                }
            >
                Hello { hasName ? name : "" }
            </h1>
            <h2>Menus</h2>
            <div>{children}</div>
        </div>
    );
};

const App = () => {
    const name = "somin";
    const hasHeader = true;

    console.log(data.todos);

    return (
        <div>
            <Header> { hasHeader ? <Header name={name} hasName={true}><span>안녕</span></Header> : null } </Header>
            <main>
                {data.todos.map((value, index) => {
                        return <Todo key={value.id} todo={value}/>;
                })}
                {/* <Todo todo={data.todos[0]}/>
                <Todo todo={data.todos[1]}/> */}
                {/* <Todo 
                    title={data.todos[0].title}
                    createdAt={data.todos[0].createdAt}
                    completed={data.todos[0].completed}
                /> */}
            </main>
        </div>
    );
};

export default App;
// export { App };