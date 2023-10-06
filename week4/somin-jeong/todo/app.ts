const todoListEl = document.getElementById('todoList') as HTMLElement;
const todoInputEl = document.getElementById('todoInput') as HTMLInputElement;

const API_URL = "http://localhost:3000/todos";

interface Todo {
    id: number;
    title: string;
    createdAt: string;
    completed: boolean;
}

interface Todos {
    todos: Todo[];
}

const fetchTodos = async (): Promise<Todos> => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
}

// data 가져오는 작업 수행
// 비동기 함수이기 때문에 promise 반환
// promise는 response를 감싸고 있음
fetch(API_URL)
    .then((response) => response.json())
    .then((data) => renderTodo(data));
// document onLoad eventListener

const renderTodo = (newTodos: Todo[]) => {
    // if (!todoListEl) return;  // null인 경우 early return하므로 HTMLElement이라고 단언할 수 있게 됨
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

const updateTodo = (todoId: number, todoTitle: string) => {
    const todoItem = document.querySelector(`#todo-${todoId}`);
    if (!todoItem) return;
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
        .then((data) => renderTodo(data));
};

const deleteTodo = async (todoId: number) => {
    await fetch(API_URL + "/" + todoId, {
        method: "DELETE"
    })

    const newTodos = await fetchTodos();
    renderTodo(newTodos.todos);

        // .then(() => fetch(API_URL))
        // .then((response) => response.json())
        // .then((data) => renderTodo(data));
};