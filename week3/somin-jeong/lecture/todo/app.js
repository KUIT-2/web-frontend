const todoListEl = document.getElementById('todoList');
const todoInputEl = document.getElementById('todoInput');

const API_URL = "http://localhost:3000/todos";

// data 가져오는 작업 수행
// 비동기 함수이기 때문에 promise 반환
// promise는 response를 감싸고 있음
fetch(API_URL)
    .then((response) => response.json())
    .then((data) => renderTodo(data));

const renderTodo = (newTodos) => {
    todoListEl.innerHTML = "";
    newTodos.forEach((todo) => {
        const listEl = document.createElement('li');
        listEl.textContent = todo.title;
        listEl.id = `todo-${todo.id}`;

        const deleteEl = document.createElement('span');
        deleteEl.textContent = '🗑️';
        deleteEl.className = "deleteBtn";
        deleteEl.onclick = () => deleteTodo(todo.id);

        const updateEl = document.createElement('span');
        updateEl.textContent = '✏️';
        updateEl.className = "updateBtn";
        updateEl.onclick = () => updateTodo(todo.id, todo.title);

        listEl.append(deleteEl);
        listEl.append(updateEl);
        todoListEl.append(listEl);
    });
};

const updateTodo = (todoId, todoTitle) => {
    const todoItem = document.querySelector(`#todo-${todoId}`);
    todoItem.innerHTML = "";

    const updateInput = document.createElement('input');
    updateInput.id = "updateInput";
    updateInput.placeholder = "update todo"
    todoItem.append(updateInput);

    const updateBtn = document.createElement('button');
    updateBtn.textContent = "update";
    todoItem.append(updateBtn);

    updateBtn.onclick = () => {
        const title = updateInput.value;
        const createdAt = new Date().toDateString();

        if(!title) return;

        const newTodo = {
            id: todoId,
            title,
            createdAt
        };
        
        fetch(API_URL + "/" + todoId, {
            method: "PUT",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({ ...newTodo, completed: false })
        })
            .then(() => fetch(API_URL))
            .then((response) => response.json())
            .then((data) => renderTodo(data));
    }
};

const addTodo = () => {
    const title = todoInputEl.value;
    const date = new Date();
    const createdAt = new Date().toDateString();

    if(!title) return;

    const newTodo = {
        id: date.getTime(),
        title,
        createdAt
    };

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({ ...newTodo, completed: false })
    })
        .then((response) => response.json())
        .then(() => {
            todoInputEl.value = "";
            return fetch(API_URL);
        })
        .then((response) => response.json())
        .then((data) => renderTodo(date));
};

const deleteTodo = (todoId) => {
    fetch(API_URL + "/" + todoId, {
        method: "DELETE"
    })
        .then(() => fetch(API_URL))
        .then((response) => response.json())
        .then((data) => renderTodo(data));
};