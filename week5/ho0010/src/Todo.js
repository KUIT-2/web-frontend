import React from "react";
import "./Todo.css"

const Todo = ({ todo }) => {
    return (
        <div className="todo-container">
            <h3>{todo.title}</h3>
            <span>{todo.createdAt}</span>
            <span>{todo.completed ? "o" : "x"}</span>
        </div>
    );
};

export default Todo;