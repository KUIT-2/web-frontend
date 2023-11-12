/* todoListEl와 todoInputEl가 HTMLElement 또는 null을 반환
-> null의 가능성 때문에 ts 실행시 오류 발생 
👉🏻 1. HTMLElement로 명백하게 존재한다는 것을 알고 있으므로, as HTMLElement로 null의 가능성을 없애거나
  2. 각 element의 value 값을 참조하는 곳에서 early return pattern을 사용 (값이 null이면 return) */

const fetchAndRenderTodos = async () => {
  // async로 감싸면 Promise를 반환
  const response = await fetch(API_URL);
  const data = await response.json();
  renderTodo(data.filter((todo: Todo) => !todo.completed));
};
/* fetch(API_URL)이 Response를 감싼 Promise를 반환 */
window.addEventListener("load", (event: Event) => {
  fetchAndRenderTodos();
});

const todoListEl = document.getElementById("todoList") as HTMLElement;
const todoInputEl = document.getElementById("todoInput") as HTMLInputElement;
todoInputEl.addEventListener("keydown", function (event) {
  if (event.key === 'Enter') {
    addTodo();
  }
});

interface Todo {
  id: number;
  title: string;
  createdAt: string;
  completed: boolean;
}

interface Todos {
  todos: Todo[];
}

const API_URL = "http://localhost:8080/todos";

const renderTodo = (newTodos: Todo[]) => {
  todoListEl.innerHTML = ""; // 기존 todo 비우기 (같은 Todo가 추가되는 것을 방지)

  newTodos.forEach((todo: Todo) => {
    const listEl = document.createElement("li");
    listEl.id = `todo-${todo.id}`;

    const textEl = document.createElement("div");
    listEl.append(textEl);

    const textContentEl = document.createElement("span");
    textContentEl.textContent = todo.title;
    // textContentEl.className = "todo-title";
    textEl.append(textContentEl);
    ``;
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

const addTodo = async () => {
  const title = todoInputEl.value;
  const date = new Date();
  const createdAt = date.toDateString();

  if (!title) return;

  const newTodo = {
    id: date.getTime(),
    title,
    createdAt,
  };

  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...newTodo, completed: false }),
  });

  todoInputEl.value = "";
  fetchAndRenderTodos();
};

const deleteTodo = async (todoId: number) => {
  await fetch(API_URL + "/" + todoId, {
    method: "DELETE",
  });
  fetchAndRenderTodos();
};

const updateTodo = async (todoId: number, originalTitle: string) => {
  const todoItem = document.querySelector(`#todo-${todoId}`);
  // const todoTitle = todoItem.querySelector('.todo-title'); // 파라미터로 originalTitle을 받지 않았을 때
  if (!todoItem) return;

  const inputEl = document.createElement("div");
  inputEl.className = "update-container";

  const inputItem = document.createElement("input");
  inputItem.value = originalTitle;
  inputItem.className = "todoInput";
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
};

async function updateTodoTitle(todoId: number, updatedTitle: string) {
  await fetch(API_URL + "/" + todoId, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: updatedTitle }),
  });

  todoInputEl.value = "";
  fetchAndRenderTodos();
}
