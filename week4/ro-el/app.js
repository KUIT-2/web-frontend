/* todoListEl와 todoInputEl가 HTMLElement 또는 null을 반환
-> null의 가능성 때문에 ts 실행시 오류 발생
👉🏻 1. HTMLElement로 명백하게 존재한다는 것을 알고 있으므로, as HTMLElement로 null의 가능성을 없애거나
  2. 각 element의 value 값을 참조하는 곳에서 early return pattern을 사용 (값이 null이면 return) */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var todoListEl = document.getElementById("todoList");
var todoInputEl = document.getElementById("todoInput");
todoInputEl.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTodo();
    }
});
var API_URL = "http://localhost:8080/todos";
fetch(API_URL)
    .then(function (response) { return response.json(); })
    .then(function (data) {
    var todos = data.filter(function (todo) { return !todo.completed; }); // 완료하지 않은 Todo만 표시
    renderTodo(todos);
});
/* fetch(API_URL)이 Response를 감싼 Promise를 반환 */
var renderTodo = function (newTodos) {
    todoListEl.innerHTML = ""; // 기존 todo 비우기 (같은 Todo가 추가되는 것을 방지)
    newTodos.forEach(function (todo) {
        var listEl = document.createElement("li");
        listEl.id = "todo-".concat(todo.id);
        var textEl = document.createElement("div");
        listEl.append(textEl);
        var textContentEl = document.createElement("span");
        textContentEl.textContent = todo.title;
        // textContentEl.className = "todo-title";
        textEl.append(textContentEl);
        "";
        var editEl = document.createElement("div");
        listEl.append(editEl);
        var updateEl = document.createElement("span");
        updateEl.textContent = "🖋️";
        updateEl.className = "editBtn";
        updateEl.onclick = function () {
            updateTodo(todo.id, todo.title);
        };
        var deleteEl = document.createElement("span");
        deleteEl.textContent = "🗑️";
        deleteEl.className = "deleteBtn";
        deleteEl.onclick = function () {
            deleteTodo(todo.id);
        };
        editEl.append(updateEl);
        editEl.append(deleteEl);
        todoListEl.append(listEl);
    });
};
var addTodo = function () {
    var title = todoInputEl.value;
    var date = new Date();
    var createdAt = date.toDateString();
    if (!title)
        return;
    var newTodo = {
        id: date.getTime(),
        title: title,
        createdAt: createdAt,
    };
    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(__assign(__assign({}, newTodo), { completed: false })),
    })
        .then(function (response) { return response.json(); })
        .then(function () {
        todoInputEl.value = "";
        return fetch(API_URL);
    })
        .then(function (response) { return response.json(); })
        .then(function (data) { return renderTodo(data); });
};
var deleteTodo = function (todoId) {
    fetch(API_URL + "/" + todoId, {
        method: "DELETE",
    })
        .then(function () {
        todoInputEl.value = "";
        return fetch(API_URL);
    })
        .then(function (response) { return response.json(); })
        .then(function (data) { return renderTodo(data); });
};
var updateTodo = function (todoId, originalTitle) {
    var todoItem = document.querySelector("#todo-".concat(todoId));
    // const todoTitle = todoItem.querySelector('.todo-title'); // 파라미터로 originalTitle을 받지 않았을 때
    var inputEl = document.createElement("div");
    inputEl.className = "update-container";
    var inputItem = document.createElement("input");
    inputItem.value = originalTitle;
    inputItem.id = "todoInput";
    inputItem.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            updateTodoTitle(todoId, inputItem.value);
        }
    });
    var updateBtn = document.createElement("span");
    updateBtn.textContent = "✔️";
    updateBtn.className = "updateBtn";
    updateBtn.onclick = function () {
        updateTodoTitle(todoId, inputItem.value);
    };
    todoItem.innerHTML = "";
    todoItem.appendChild(inputEl);
    inputEl.append(inputItem);
    inputEl.append(updateBtn);
    inputEl.focus();
};
function updateTodoTitle(todoId, updatedTitle) {
    fetch(API_URL + "/" + todoId, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: updatedTitle }),
    })
        .then(function (response) { return response.json(); })
        .then(function () {
        todoInputEl.value = "";
        return fetch(API_URL);
    })
        .then(function (response) { return response.json(); })
        .then(function (data) { return renderTodo(data); });
}
