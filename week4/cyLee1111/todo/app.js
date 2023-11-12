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
const API_URL = "http://localhost:8086/todos";
const fetchTodos = () => __awaiter(this, void 0, void 0, function* () {
    const response = yield fetch(API_URL);
    const data = yield response.json();
    return data;
});
window.onload = () => __awaiter(this, void 0, void 0, function* () {
    const getTodos = yield fetchTodos();
    renderTodo(getTodos);
});
const updateTodo = (todoId, originalTitle) => {
    const todoItem = document.querySelector(`#todo-${todoId}`);
    todoItem.innerHTML = "";
    const textboxEl = document.createElement("input");
    textboxEl.type = "text";
    textboxEl.id = "text-" + todoId;
    todoItem.append(textboxEl);
    document.addEventListener("keyup", function (event) {
        return __awaiter(this, void 0, void 0, function* () {
            if (event.code === 'Enter') { // 엔터키 입력 시
                const newTitleEl = document.getElementById("text-" + todoId);
                var newTitle = newTitleEl.value;
                if (newTitle == "")
                    newTitle = originalTitle; // 빈칸일 경우 원래 Title 정보 유지
                yield fetch(API_URL + "/" + todoId, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ title: newTitle }), // 변경된 제목 정보 JSON 형식으로 전송
                });
                const newTodos = yield fetchTodos();
                renderTodo(newTodos);
            }
        });
    });
};
const renderTodo = (newTodos) => {
    todoListEl.innerHTML = ""; // 기존 Todo 비워줌
    newTodos.forEach((todo) => {
        const listEl = document.createElement("li");
        listEl.textContent = todo.title;
        listEl.id = `todo-${todo.id}`;
        const btnEl = document.createElement("div");
        btnEl.style.display = "flex";
        btnEl.style.gap = "5px";
        const deleteEl = document.createElement("span");
        deleteEl.textContent = "🗑️";
        deleteEl.onclick = () => deleteTodo(todo.id);
        const udpateEl = document.createElement("span");
        udpateEl.textContent = "✏️";
        udpateEl.onclick = () => updateTodo(todo.id, todo.title);
        btnEl.appendChild(deleteEl);
        btnEl.appendChild(udpateEl);
        listEl.append(btnEl);
        todoListEl.append(listEl);
    });
};
const addTodo = () => __awaiter(this, void 0, void 0, function* () {
    const title = todoInputEl.value;
    const date = new Date();
    const createdAt = date.toDateString();
    if (!title)
        return; // 공백 예외처리
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
    const newTodos = yield fetchTodos();
    todoInputEl.value = "";
    renderTodo(newTodos);
});
const deleteTodo = (todoId) => __awaiter(this, void 0, void 0, function* () {
    yield fetch(API_URL + "/" + todoId, {
        method: "DELETE",
    });
    const newTodos = yield fetchTodos();
    renderTodo(newTodos);
});
