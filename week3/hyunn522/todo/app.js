const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");

const API_URL = "http://localhost:8080/todos";

fetch(API_URL)
    .then((response) => response.json())
    .then((data) => renderTodo(data));


const renderTodo = (newTodos) => {
    todoListEl.innerHTML = "";

    newTodos.forEach((todo) => {
        const listEl = document.createElement('li');
        listEl.textContent = todo.title;

        const deleteEl = document.createElement('span');
        deleteEl.textContent = "🗑️";
        deleteEl.className = "deleteBtn";
        deleteEl.onclick = () => deleteTodo(todo.id)

        listEl.append(deleteEl);
        todoListEl.append(listEl);
    });
}

const addTodo = () => {
    const title = todoInputEl.value;
    const date = new Date();
    const createdAt = new Date().toDateString();

    if (!title) return;

    const newTodo = {
        id: date.toISOString(),
        title,
        createdAt,
    }

    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({ ...newTodo, completed: false}),
    })
        .then((response) => response.json())
        .then(newTodo => {
            todoInputEl.value = "";
            return fetch(API_URL);
        })
        .then((response) => response.json())
        .then((data) => renderTodo(data));


    //// local data 사용 시
    // todos.push({
    //     id: date.toISOString(),
    //     // 이름 같으면 생략 가능 title: title 생략 -> title
    //     title,
    //     createdAt: createdAt
    // });

    // renderTodo(todos);
    
}

const deleteTodo = (todoId) => {
    // const deleteTodo = todos.filter(todo => {
    //     return todo.id != todoId;
    // });

    // todos = deleteTodo;
    // renderTodo(todos);

    fetch(API_URL + '/' + todoId, {
        method: 'DELETE',
    })
        .then(() => fetch(API_URL))
        .then((response) => response.json())
        .then((data) => renderTodo(data));
};

// renderTodo(todos);