const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");

todoInputEl.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        const newTitle = todoInputEl.value.trim();
        if (!newTitle) return;

        addTodo();
    }
});

let isEditing = false;

const API_URL = "http://localhost:8080/todos";

fetch(API_URL)
    .then((response) => response.json())
    .then((data) => renderTodo(data));


const renderTodo = (newTodos) => {
    todoListEl.innerHTML = "";

    newTodos.forEach((todo) => {
        const listEl = document.createElement('li');
        listEl.textContent = todo.title;
        listEl.id = `todo-${todo.id}`;
        listEl.style.padding = '10px';

        const updateEl = document.createElement('span');
        updateEl.textContent = "✏️";
        updateEl.className = "updateBtn";
        updateEl.style.padding = '10px';
        updateEl.onclick = () => updateTodo(todo.id, todo.title);

        const deleteEl = document.createElement('span');
        deleteEl.textContent = "🗑️";
        deleteEl.className = "deleteBtn";
        deleteEl.style.padding = '10px';
        deleteEl.onclick = () => deleteTodo(todo.id);

        const btnContainer = document.createElement('div');
        btnContainer.id = `todoBtn-${todo.id}`;
        
        btnContainer.append(updateEl);
        btnContainer.append(deleteEl);

        // listEl.append(updateEl);
        // listEl.append(deleteEl);
        listEl.append(btnContainer);
        todoListEl.append(listEl);
    });
}

const addTodo = () => {
    const title = todoInputEl.value;
    const date = new Date();
    const createdAt = new Date().toDateString();

    if (!title) return;

    const newTodo = {
        id: date.getTime(),
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
}


const updateTodo = (todoId, originalTitle) => {
    if(isEditing) {
        console.log("편집중");
        return;
    }
    
    isEditing = true;

    // 템플릿 리터럴로 query 선택
    const todoItem = document.querySelector(`#todo-${todoId}`);
    const parentEl = todoItem.parentNode;
    const todoContainer = document.createElement('div');


    const todoInput = document.createElement('input');
    todoInput.type = 'text';
    todoInput.value = originalTitle;
    todoInput.style.margin = '5px';
    todoInput.style.height = '30px';

    const todoCheck = document.createElement('span');
    todoCheck.textContent = '✔️';
    todoContainer.style.position = 'relative';
    todoCheck.style.position = 'absolute'
    todoCheck.style.right = '17%';
    todoCheck.style.top = '23%';

    const todoCancel = document.createElement('span');
    todoCancel.textContent = '❌';
    todoContainer.style.position = 'relative';
    todoCancel.style.position = 'absolute'
    todoCancel.style.right = '6%';
    todoCancel.style.top = '23%';

    todoContainer.append(todoInput);
    todoContainer.append(todoCheck);
    todoContainer.append(todoCancel);

    function updateTodoItem() {
        const newTitle = todoInput.value.trim();
        if (newTitle == "") return;

        todoItem.textContent = newTitle;

        parentEl.replaceChild(todoItem, todoContainer);

        fetch(API_URL + '/' + todoId, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title : newTitle }),
        })
        .then((response) => response.json())
        .then(newTodo => {
            todoInput.value = "";
            return fetch(API_URL);
        })
        .then((response) => response.json())
        .then((data) => renderTodo(data));
    }

    todoInput.addEventListener('keypress', (event) => {
        if (event.key === "Enter") {
            updateTodoItem();
        }
    })

    todoCheck.addEventListener('click', (event) => {
        updateTodoItem();
    })

    todoCancel.addEventListener('click', (event) => {
        parentEl.replaceChild(todoItem, todoContainer);
        isEditing = false;
    })

    parentEl.replaceChild(todoContainer,todoItem);
    todoInput.focus();

}

// renderTodo(todos);