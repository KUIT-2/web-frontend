const todoListEl = document.getElementById('todoList') as HTMLElement;
const todoInputEl = document.getElementById('todoInput') as HTMLInputElement;

const API_URL = "http://localhost:3000/todos";

interface Todo {
    id: number;
    title: string;
    createdAt: string;
    completed: boolean;
}

const fetchTodos = async (): Promise<Todo[]> => {
    const response = await fetch(API_URL);
    const data: Todo[] = await response.json();
    return data;
}

window.onload = async () => {
    const getTodos = await fetchTodos();  // getTodos.todos가 undefined로 나옴, getTodos타입이 Todos가 아닌듯
    renderTodo(getTodos);
};

const renderTodo = (newTodos: Todo[]) => {
    // if (!todoListEl) return;  // null인 경우 early return하므로 HTMLElement이라고 단언할 수 있게 됨
    todoListEl.innerHTML = "";
    // if (!newTodos) return;
    console.log("ddfs"); // newTodos.todos가 undefined로 나옴, newTodos타입이 Todos가 아닌듯
    newTodos.map((todo: Todo) => {
        console.log(todo);
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

    updateBtn.onclick = async () => {
        const title = updateInput.value;
        const createdAt = new Date().toDateString();

        if(!title) return;

        const newTodo = {
            id: todoId,
            title,
            createdAt
        };
        
        await fetch(API_URL + "/" + todoId, {
            method: "PUT",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({ ...newTodo, completed: false })
        })

        const newTodos = await fetchTodos();
        renderTodo(newTodos);
    }
};

const addTodo = async () => {
    const title = todoInputEl.value;
    const date = new Date();
    const createdAt = new Date().toDateString();

    if(!title) return;

    const newTodo = {
        id: date.getTime(),
        title,
        createdAt
    };

    await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({ ...newTodo, completed: false })
    })

    const newTodos = await fetchTodos();
    todoInputEl.value = "";
    renderTodo(newTodos);
};

const deleteTodo = async (todoId: number) => {
    await fetch(API_URL + "/" + todoId, {
        method: "DELETE"
    })

    const newTodos = await fetchTodos();
    renderTodo(newTodos);
};