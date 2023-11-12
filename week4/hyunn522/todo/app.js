var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");
todoInputEl.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        const newTitle = todoInputEl.value.trim();
        if (!newTitle)
            return;
        addTodo();
    }
});
let isEditing = false;
const API_URL = "http://localhost:8080/todos";
const fetchTodos = () => __awaiter(this, void 0, void 0, function* () {
    const response = yield fetch(API_URL);
    const data = yield response.json();
    return data;
});
const initInputEl = (response) => __awaiter(this, void 0, void 0, function* () {
    const data = yield response.json();
    console.log(response.statusText);
    todoInputEl.value = "";
    return data;
});
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
        btnContainer.append(updateEl);
        btnContainer.append(deleteEl);
        listEl.append(btnContainer);
        todoListEl.append(listEl);
    });
};
const addTodo = () => __awaiter(this, void 0, void 0, function* () {
    const title = todoInputEl.value;
    const date = new Date();
    const createdAt = new Date().toDateString();
    if (!title)
        return;
    const newTodo = {
        id: date.getTime(),
        title,
        createdAt,
    };
    const postResponse = yield fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.assign(Object.assign({}, newTodo), { completed: false })),
    });
    initInputEl(postResponse);
    const newTodos = yield fetchTodos();
    renderTodo(newTodos);
    // .then((response) => response.json())
    // .then(newTodo => {
    //     todoInputEl.value = "";
    //     return fetch(API_URL);
    // })
    // .then((response) => response.json())
    // .then((data) => renderTodo(data));
});
const deleteTodo = (todoId) => __awaiter(this, void 0, void 0, function* () {
    yield fetch(API_URL + '/' + todoId, {
        method: 'DELETE',
    });
    const newTodos = yield fetchTodos();
    renderTodo(newTodos);
    // .then(() => fetch(API_URL))
    // .then((response) => response.json())
    // .then((data) => renderTodo(data));
});
const updateTodo = (todoId, originalTitle) => __awaiter(this, void 0, void 0, function* () {
    if (isEditing) {
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
    todoCheck.style.position = 'absolute';
    todoCheck.style.right = '17%';
    todoCheck.style.top = '23%';
    const todoCancel = document.createElement('span');
    todoCancel.textContent = '❌';
    todoContainer.style.position = 'relative';
    todoCancel.style.position = 'absolute';
    todoCancel.style.right = '6%';
    todoCancel.style.top = '23%';
    todoContainer.append(todoInput);
    todoContainer.append(todoCheck);
    todoContainer.append(todoCancel);
    parentEl.replaceChild(todoContainer, todoItem);
    todoInput.focus();
    function updateTodoItem() {
        return __awaiter(this, void 0, void 0, function* () {
            const newTitle = todoInput.value.trim();
            if (newTitle == "")
                return;
            todoItem.textContent = newTitle;
            // todoItem.parentNode.replaceChild(todoItem, todoContainer);
            parentEl.replaceChild(todoItem, todoContainer);
            isEditing = false;
            const postResponse = yield fetch(API_URL + '/' + todoId, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title: newTitle }),
            });
            initInputEl(postResponse);
            const newTodos = yield fetchTodos();
            renderTodo(newTodos);
            // .then((response) => response.json())
            // .then(newTodo => {
            //     todoInput.value = "";
            //     return fetch(API_URL);
            // })
            // .then((response) => response.json())
            // .then((data) => renderTodo(data));
        });
    }
    todoInput.addEventListener('keypress', (event) => {
        if (event.key === "Enter") {
            updateTodoItem();
        }
    });
    todoCheck.addEventListener('click', (event) => {
        updateTodoItem();
    });
    todoCancel.addEventListener('click', (event) => {
        parentEl.replaceChild(todoItem, todoContainer);
        isEditing = false;
    });
});
// renderTodo(todos);
