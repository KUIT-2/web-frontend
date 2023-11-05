"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//타입 단언 : 타입스크립트가 추론하지 못하는 타입을 명시
const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");
const API_URL = "http://localhost:8080/todos";
const fetchTodos = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(API_URL);
    const data = yield response.json();
    return data;
});
const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(API_URL);
    const data = yield response.json();
    renderTodo(data);
});
const updateTodo = (todoId, todoTitle) => {
    const todoItem = document.querySelector(`#todo-${todoId}`);
    //mission
    todoItem.innerHTML = "";
    const updateElInput = document.createElement("input");
    updateElInput.id = "updateElInput";
    updateElInput.value = todoTitle;
    todoItem.append(updateElInput);
    const updateBtn = document.createElement("sapn");
    updateBtn.textContent = "✅";
    todoItem.append(updateBtn);
    updateBtn.onclick = () => __awaiter(void 0, void 0, void 0, function* () {
        const title = updateElInput.value;
        const createdAt = new Date().toDateString();
        if (!title)
            return;
        const newTodo = {
            id: todoId,
            title,
            createdAt,
            completed: false,
        };
        yield fetch(API_URL + "/" + todoId, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ Title: newTodo }),
        });
        const response = yield fetch(API_URL);
        const data = yield response.json();
        renderTodo(data);
    });
};
const renderTodo = (newTodos) => {
    todoListEl.innerHTML = "";
    newTodos.forEach((todo) => {
        const listEl = document.createElement("li");
        listEl.textContent = todo.title;
        listEl.id = `todo-${todo.id}`;
        const deleteEl = document.createElement("span");
        deleteEl.textContent = "🗑️";
        deleteEl.onclick = () => deleteTodo(todo.id);
        const udpateEl = document.createElement("span");
        udpateEl.textContent = "✏️";
        udpateEl.onclick = () => updateTodo(todo.id, todo.title);
        listEl.append(deleteEl);
        listEl.append(udpateEl);
        todoListEl.append(listEl);
    });
};
const addTodo = () => __awaiter(void 0, void 0, void 0, function* () {
    const title = todoInputEl.value;
    const date = new Date();
    const createdAt = date.toDateString();
    if (!title)
        return;
    const newTodo = {
        id: date.getTime(),
        title,
        createdAt,
    };
    yield fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.assign(Object.assign({}, newTodo), { completed: false })),
    });
    const response = yield fetch(API_URL);
    const data = yield response.json();
    renderTodo(data);
});
const deleteTodo = (todoId) => __awaiter(void 0, void 0, void 0, function* () {
    yield fetch(API_URL + "/" + todoId, {
        method: "DELETE",
    });
    const newTodos = yield fetchTodos();
    renderTodo(newTodos.todos);
});
