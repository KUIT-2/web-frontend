import React from "react";

import Todo from "./Todo";

import data from "./db.json";

const Header = (props) => {
  const { name, hasName, children } = props;
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
      <h2>Menus</h2>
      <div>{children}</div>
    </div>
  );
};

const App = () => {
  const hasHeader = true;
  const name = "jeon jinho";

  return (
    <div>
      <header>
        {hasHeader ? (
          <Header name={name} hasName={false}>
            asd
          </Header>
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
