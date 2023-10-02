const todoListEl = document.getElementById('todoList') as HTMLElement;
const completedListEl = document.getElementById('completedList') as HTMLElement;
const todoInputEl = document.getElementById('todoInput') as HTMLInputElement;
let isEditing = false;
const API_URL = 'http://localhost:3001/todos';

interface Todo {
  id: number;
  title: string;
  createdAt: string;
  completed: boolean;
}

interface Todos {
  todos: Todo[];
}

const fetchTodos = async (): Promise<Todos> => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => renderTodo(data));
// document onLoad eventListener

const updateTodo = (todoId: number, originalTitle: string) => {
  // 하나의 Todo가 수정되게만 설정
  if (!isEditing) {
    isEditing = true;
    const todoItem = document.querySelector(`#todo-${todoId}`);
    const itemEditInput = document.createElement('input');
    itemEditInput.value = originalTitle;
    itemEditInput.id = `editInput-${todoId}`;
    todoItem?.append(itemEditInput);
    const itemEditBtn = document.createElement('button');
    itemEditBtn.textContent = '저장';
    todoItem?.append(itemEditBtn);
    itemEditBtn.onclick = () => {
      const title = itemEditInput.value;
      const date = new Date();
      const createdAt = date.toDateString();
      if (!title) return;
      const newTodo = {
        id: date.getTime(),
        title,
        createdAt,
      };
      fetch(API_URL + '/' + todoId, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...newTodo, completed: false }),
      })
        .then((response) => response.json())
        .then(() => {
          isEditing = false;
          itemEditInput.remove();
          itemEditBtn.remove();
          return fetch(API_URL);
        })
        .then((response) => response.json())
        .then((data) => renderTodo(data));
    };
  }
};

const completeTodo = (todo: Todo) => {
  fetch(API_URL + '/' + todo.id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...todo, completed: true }),
  })
    .then(() => {
      return fetch(API_URL);
    })
    .then((response) => response.json())
    .then((data) => renderTodo(data));
};

const retryTodo = (todo: Todo) => {
  fetch(API_URL + '/' + todo.id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...todo, completed: false }),
  })
    .then(() => {
      return fetch(API_URL);
    })
    .then((response) => response.json())
    .then((data) => renderTodo(data));
};

const renderTodo = (newTodos: Array<Todo>) => {
  todoListEl.innerHTML = '';
  newTodos.forEach((todo: Todo) => {
    if (todo.completed) {
      const listEl = document.createElement('li');
      listEl.textContent = todo.title;
      listEl.id = `todo-${todo.id}`;
      const retryEl = document.createElement('span');
      retryEl.textContent = '🔁';
      retryEl.onclick = () => retryTodo(todo);
      listEl.append(retryEl);
      completedListEl.append(listEl);
    } else {
      const listEl = document.createElement('li');
      listEl.textContent = todo.title;
      listEl.id = `todo-${todo.id}`;

      const deleteEl = document.createElement('span');
      deleteEl.textContent = '🗑️';
      deleteEl.onclick = () => deleteTodo(todo.id);

      const udpateEl = document.createElement('span');
      udpateEl.textContent = '✏️';
      udpateEl.onclick = () => updateTodo(todo.id, todo.title);

      const completeEl = document.createElement('span');
      completeEl.textContent = '✔';
      completeEl.onclick = () => completeTodo(todo);

      listEl.append(deleteEl);
      listEl.append(udpateEl);
      listEl.append(completeEl);
      todoListEl.append(listEl);
    }
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
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...newTodo, completed: false }),
  })
    .then((response) => response.json())
    .then(() => {
      todoInputEl.value = '';
      return fetch(API_URL);
    })
    .then((response) => response.json())
    .then((data) => renderTodo(data));
};

const deleteTodo = async (todoId: number) => {
  await fetch(API_URL + '/' + todoId, {
    method: 'DELETE',
  });
  const newTodos = await fetchTodos();
  renderTodo(newTodos.todos);
};
