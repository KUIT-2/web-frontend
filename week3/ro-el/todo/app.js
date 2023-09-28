let todos = [
  {
    id: 1,
    title: "Web 3주차 강의 듣기",
    completed: true,
    createdAt: "2023-09-27",
  },
  {
    id: 2,
    title: "Web 3주차 미션하기",
    completed: false,
    createdAt: "2023-09-27",
  },
  {
    id: 3,
    title: "Web 3주차 스터디",
    completed: false,
    createdAt: "2023-09-27",
  },
];

const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");

const renderTodo = (newTodos) => {
  todoListEl.innerHTML = ""; // 기존 todo 비우기 (같은 Todo가 추가되는 것을 방지)
  newTodos.forEach((todo) => {
    const listEl = document.createElement("li");
    listEl.textContent = todo.title;

    const deleteEl = document.createElement("span");
    deleteEl.textContent = "🗑️";
    deleteEl.className = "deleteBtn";
    deleteEl.onclick = () => {
      deleteTodo(todo.id);
    };

    listEl.append(deleteEl);
    todoListEl.append(listEl);
  });
};

const addTodo = () => {
  const title = todoInputEl.value;
  const date = new Date();
  const createdAt = new Date().toDateString();
  console.log("=================", createdAt, "=================");

  if (!title) return;

  todos.push({
    id: date.toISOString(),
    title,
    createdAt,
  });

  renderTodo(todos);
};

const deleteTodo = (todoId) => {
  const deletedTodo = todos.filter((todo) => {
    return todo.id != todoId;
  });

  todos = deletedTodo;
  renderTodo(todos);
};

renderTodo(todos);
