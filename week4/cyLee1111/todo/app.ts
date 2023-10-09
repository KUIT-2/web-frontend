const todoListEl = document.getElementById("todoList") as HTMLElement;
const todoInputEl = document.getElementById("todoInput") as HTMLInputElement;

const API_URL = "http://localhost:8086/todos";

interface Todo {
  id: number;
  title: string;
  createdAt: string;
  completed: boolean;
}

const fetchTodos = async (): Promise<Todo[]> => {
  const response = await fetch(API_URL);
  const data: Todo[] = await response.json();
  return data;
};

window.onload = async () => {
  const getTodos = await fetchTodos();
  renderTodo(getTodos);
}

const updateTodo = (todoId: number, originalTitle: string) => {
  const todoItem = document.querySelector(`#todo-${todoId}`) as Element;
  todoItem.innerHTML = "";
  const textboxEl = document.createElement("input");
  textboxEl.type = "text";
  textboxEl.id = "text-" + todoId;
  todoItem.append(textboxEl);
  
  document.addEventListener("keyup", async function(event) {
    if (event.code === 'Enter') { // 엔터키 입력 시
      const newTitleEl = document.getElementById("text-"+todoId) as HTMLInputElement;
      var newTitle = newTitleEl.value;

      if(newTitle == "") newTitle = originalTitle; // 빈칸일 경우 원래 Title 정보 유지

      await fetch(API_URL + "/" + todoId, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newTitle }), // 변경된 제목 정보 JSON 형식으로 전송
      })
      const newTodos = await fetchTodos();
      renderTodo(newTodos);      
    }
  });

};

const renderTodo = (newTodos: Todo[]) => { // newTodos를 받아서 리스트 화면에 반환
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

const addTodo = async () => {
  const title = todoInputEl.value;
  const date = new Date();
  const createdAt = date.toDateString();

  if (!title) return; // 공백 예외처리

  const newTodo = { // 새 Todo 추가
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
  })
  const newTodos = await fetchTodos();
  todoInputEl.value = "";
  renderTodo(newTodos);
};

const deleteTodo = async (todoId: number) => {
  await fetch(API_URL + "/" + todoId, {
    method: "DELETE",
  })
  const newTodos = await fetchTodos();
  renderTodo(newTodos);
};