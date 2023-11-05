import Todo from './Todo';
import data from './db.json';

const Header = ({ name, hasName, children }) => {
  return (
    <div>
      <h1
        style={{
          backgroundColor: 'gray',
        }}
      >
        Header {hasName && name}
      </h1>
      <h2>Menu</h2>
      {children}
    </div>
  );
};

const App = () => {
  const hasHeader = true;
  const { todos } = data;

  const renderedTodos = todos.map((todo) => <Todo key={todo.id} todo={todo} />);
  const name = 'BCK';
  return (
    <div>
      <header>
        {hasHeader && (
          <Header name={name} hasName={true}>
            어쩌구
          </Header>
        )}
      </header>
      <main>{renderedTodos}</main>
    </div>
  );
};

export default App;
