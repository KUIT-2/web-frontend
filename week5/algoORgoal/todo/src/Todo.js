import './Todo.css';

const Todo = ({ todo }) => (
  <div className='todo__container'>
    <h1>{todo.title}</h1>
    <div>{todo.createdAt}</div>
    <div>{todo.completed.toString()}</div>
  </div>
);

export default Todo;
