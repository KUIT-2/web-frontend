const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");

const API_URL = "http://localhost:8080/todos";

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => renderTodo(data));

let isEditing = false; //한 번에 하나의 li만 수정가능
const updateTodo = (todoId, originalTitle) => {
  if (isEditing) {
    return; //수정 중인 li 있으면 동작 x
  }
  const todoItem = document.querySelector(`#todo-${todoId}`);
  todoItem.textContent = "";

  const todoEdit = document.createElement("input");
  todoEdit.className = "edit_input";
  todoEdit.value = originalTitle;

  const confirmEl = document.createElement("span");
  confirmEl.textContent = "✅";
  confirmEl.onclick = () => {
    const newTitle = document.querySelector(".edit_input").value;
    fetch(API_URL + "/" + todoId, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: newTitle }),
    })
      .then((response) => response.json())
      .then((data) => {
        renderTodo(data);
        isEditing = false; //수정 상태 종료
      });
  };

  const cancelEl = document.createElement("span");
  cancelEl.textContent = "❌";
  cancelEl.onclick = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        renderTodo(data);
        isEditing = false; //수정 상태 종료
      });
  };

  todoItem.append(todoEdit);
  todoItem.append(confirmEl);
  todoItem.append(cancelEl);

  isEditing = true; //수정 상태로 변경
};

const renderTodo = (newTodos) => {
  todoListEl.innerHTML = "";
  newTodos.forEach((todo) => {
    const listEl = document.createElement("li");
    listEl.textContent = todo.title;
    listEl.id = `todo-${todo.id}`;

    const deleteEl = document.createElement("span");
    deleteEl.textContent = "🗑️";
    deleteEl.onclick = () => deleteTodo(todo.id);

    const udpateEl = document.createElement("span");
    udpateEl.textContent = "✏️";
    udpateEl.onclick = () => updateTodo(todo.id, todo.title);

    listEl.append(deleteEl);
    listEl.append(udpateEl);
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
    .then(() => fetch(API_URL))
    .then((response) => response.json())
    .then((data) => renderTodo(data));
};
