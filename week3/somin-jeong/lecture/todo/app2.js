let todos = [
    {
        id: 1, 
        title: "3주차 강의 만들기", 
        completed: false, 
        createdAt: '2023-09-25'
    },
    {
        id: 2, 
        title: "클라우드웹서비스 과제", 
        completed: false, 
        createdAt: '2023-09-23'
    }, 
    {
        id: 3, 
        title: "산협프 팀플", 
        completed: false, 
        createdAt: '2023-09-22'
    }
];

const todoListEl = document.getElementById('todoList');
const todoInputEl = document.getElementById('todoInput');

const renderTodo = (newTodos) => {
    todoListEl.innerHTML = ""
    newTodos.forEach((todo) => {
        console.log(todo.title);
        const listEl = document.createElement('li');
        listEl.textContent = todo.title;

        const deleteEl = document.createElement('span');
        deleteEl.textContent = '🗑️';
        deleteEl.className = "deleteBtn";
        deleteEl.onclick = () => deleteTodo(todo.id);

        listEl.append(deleteEl);
        todoListEl.append(listEl);
    });
}

const addTodo = () => {
    const title = todoInputEl.value;
    const date = new Date();
    const createdAt = new Date().toDateString;

    if(!title) return;

    todos.push({
        id: date.toISOString(),
        title,
        createdAt
    });

    renderTodo(todos);
};

const deleteTodo = (todoId) => {
    const deleteTodo = todos.filter((todo) => {
        return todo.id != todoId;
    });

    todos = deleteTodo;
    renderTodo(todos);
};

renderTodo(todos)