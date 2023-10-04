/* todoListEl와 todoInputEl가 HTMLElement 또는 null을 반환
-> null의 가능성 때문에 ts 실행시 오류 발생 
👉🏻 1. HTMLElement로 명백하게 존재한다는 것을 알고 있으므로, as HTMLElement로 null의 가능성을 없애거나
  2. 각 element의 value 값을 참조하는 곳에서 early return pattern을 사용 (값이 null이면 return) */

const todoListEl = document.getElementById("todoList") as HTMLElement;
const todoInputEl = document.getElementById("todoInput") as HTMLInputElement;
todoInputEl.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});

const API_URL = "http://localhost:8080/todos";

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => {
    const todos = data.filter((todo) => !todo.completed); // 완료하지 않은 Todo만 표시
    renderTodo(todos);
  });
/* fetch(API_URL)이 Response를 감싼 Promise를 반환 */

const renderTodo = (newTodos) => {
  todoListEl.innerHTML = ""; // 기존 todo 비우기 (같은 Todo가 추가되는 것을 방지)
  newTodos.forEach((todo) => {
    const listEl = document.createElement("li");
    listEl.id = `todo-${todo.id}`;

    const textEl = document.createElement("div");
    listEl.append(textEl);

    const textContentEl = document.createElement("span");
    textContentEl.textContent = todo.title;
    // textContentEl.className = "todo-title";
    textEl.append(textContentEl);
``
    const editEl = document.createElement("div");
    listEl.append(editEl);

    const updateEl = document.createElement("span");
    updateEl.textContent = "🖋️";
    updateEl.className = "editBtn";
    updateEl.onclick = () => {
      updateTodo(todo.id, todo.title);
    };

    const deleteEl = document.createElement("span");
    deleteEl.textContent = "🗑️";
    deleteEl.className = "deleteBtn";
    deleteEl.onclick = () => {
      deleteTodo(todo.id);
    };
    editEl.append(updateEl);
    editEl.append(deleteEl);

    todoListEl.append(listEl);
  });
};

const addTodo = () => {
  const title = todoInputEl.value;
  const date = new Date();
  const createdAt = date.toDateString();

  if (!title) return;

  const newTodo = {
    id: date.getTime(),
    title,
    createdAt,
  };

  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...newTodo, completed: false }),
  })
    .then((response) => response.json())
    .then(() => {
      todoInputEl.value = "";
      return fetch(API_URL);
    })
    .then((response) => response.json())
    .then((data) => renderTodo(data));
};

const deleteTodo = (todoId) => {
  fetch(API_URL + "/" + todoId, {
    method: "DELETE",
  })
    .then(() => {
      todoInputEl.value = "";
      return fetch(API_URL);
    })
    .then((response) => response.json())
    .then((data) => renderTodo(data));
};

const updateTodo = (todoId, originalTitle) => {
  const todoItem = document.querySelector(`#todo-${todoId}`);
  // const todoTitle = todoItem.querySelector('.todo-title'); // 파라미터로 originalTitle을 받지 않았을 때

  const inputEl = document.createElement("div");
  inputEl.className = "update-container";

  const inputItem = document.createElement("input");
  inputItem.value = originalTitle;
  inputItem.id = "todoInput";
  inputItem.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      updateTodoTitle(todoId, inputItem.value);
    }
  });

  const updateBtn = document.createElement("span");
  updateBtn.textContent = "✔️";
  updateBtn.className = "updateBtn";
  updateBtn.onclick = () => {
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
    .then((response) => response.json())
    .then(() => {
      todoInputEl.value = "";
      return fetch(API_URL);
    })
    .then((response) => response.json())
    .then((data) => renderTodo(data));
}
