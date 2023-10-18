//타입 단언 : 타입스크립트가 추론하지 못하는 타입을 명시
const todoListEl = document.getElementById("todoList") as HTMLElement;
const todoInputEl = document.getElementById("todoInput") as HTMLInputElement;

const API_URL = "http://localhost:8080/todos";

interface Todo {
  id: number;
  title:string;
  createdAt:string;
  completed:boolean;
}

interface Todos{
  todos: Todo[];
}

const fetchTodos = async ():Promise<Todos> => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

const fetchData = async () => {

  const response = await fetch(API_URL);
  const data = await response.json();
  renderTodo(data);

};

  const updateTodo = (todoId:number, todoTitle:string) => {
  const todoItem = document.querySelector(`#todo-${todoId}`) as HTMLElement;

  //mission
  todoItem.innerHTML = "";

  const updateElInput = document.createElement("input");
  updateElInput.id = "updateElInput";
  updateElInput.value = todoTitle;

  todoItem.append(updateElInput);

  const updateBtn = document.createElement("sapn");
  updateBtn.textContent = "✅";

  todoItem.append(updateBtn);

  updateBtn.onclick = async() => {
    const title = updateElInput.value;
    const createdAt = new Date().toDateString();

    if (!title) return;

    const newTodo = {
      id: todoId,
      title,
      createdAt,
      completed: false,
    };


    await fetch(API_URL + "/" + todoId, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Title: newTodo }),
      });
      const response = await fetch(API_URL);
      const data = await response.json();
      renderTodo(data);
  

  };
};

const renderTodo = (newTodos:Todo[]) => {
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

const addTodo = async() => {
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

    const response = await fetch(API_URL);
    const data = await response.json();
    renderTodo(data);

};

const deleteTodo = async (todoId:number) => {
  await fetch(API_URL + "/" + todoId, {
    method: "DELETE",
  })
  const newTodos = await fetchTodos();
  renderTodo(newTodos.todos);

};
