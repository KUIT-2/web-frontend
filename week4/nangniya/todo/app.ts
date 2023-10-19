const todoListEl = document.getElementById("todoList") as HTMLElement;
const todoInputEl = document.getElementById("todoInput") as HTMLInputElement;

const API_URL = "http://localhost:8080/todos";

interface ITodo {
  id: number;
  title: string;
  createdAt: string;
  completed: boolean;
}

const fetchTodos = async (): Promise<ITodo[]> => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Todos 불러오기 오류:", error);
    throw error;
  }
};

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => renderTodo(data));

let isEditing: boolean = false; //한 번에 하나의 li만 수정가능
const updateTodo = (todoId: number, originalTitle: string) => {
  if (isEditing) {
    return; //수정 중인 li 있으면 동작 x
  }
  const todoItem = document.querySelector(`#todo-${todoId}`) as HTMLElement;
  todoItem.textContent = "";

  const todoEdit = document.createElement("input") as HTMLInputElement;
  todoEdit.className = "edit_input";
  todoEdit.value = originalTitle;

  const confirmEl = document.createElement("span");
  confirmEl.textContent = "✅";
  confirmEl.onclick = async () => {
    const newTitle: string = todoEdit.value;
    try {
      const response = await fetch(API_URL + "/" + todoId, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newTitle }),
      });
      const data = await response.json();
      renderTodo(data);
      isEditing = false;
    } catch (error) {
      console.error("업데이트 오류:", error);
    }
  };

  const cancelEl = document.createElement("span");
  cancelEl.textContent = "❌";
  cancelEl.onclick = async () => {
    try {
      const data = await fetchTodos();
      renderTodo(data);
      isEditing = false;
    } catch (error) {
      console.error("Todos 다시 불러오기 오류:", error);
    }
  };

  todoItem.append(todoEdit);
  todoItem.append(confirmEl);
  todoItem.append(cancelEl);

  isEditing = true; //수정 상태로 변경
};

const renderTodo = (newTodos: ITodo[]) => {
  todoListEl.innerHTML = "";
  newTodos.forEach((todo: ITodo) => {
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

  try {
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...newTodo, completed: false }),
    });

    todoInputEl.value = "";
    const data = await fetchTodos();
    renderTodo(data);
  } catch (error) {
    console.error("addTodo 오류:", error);
  }
};

const deleteTodo = async (todoId: number) => {
  try {
    await fetch(API_URL + "/" + todoId, {
      method: "DELETE",
    });

    const data = await fetchTodos();
    renderTodo(data);
  } catch (error) {
    console.error("할 일을 삭제하는 중 오류 발생:", error);
  }
};
