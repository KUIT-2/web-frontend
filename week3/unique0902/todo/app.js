const todoListEl = document.getElementById('todoList');
const todoInputEl = document.getElementById('todoInput');
const API_URL = 'http://localhost:3001/todos';
let isEditing = false;

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => renderTodo(data));

const updateTodo = (todoId, originalTitle) => {
  // 하나의 Todo가 수정되게만 설정
  if (!isEditing) {
    isEditing = true;
    const todoItem = document.querySelector(`#todo-${todoId}`);
    const itemEditInput = document.createElement('input');
    itemEditInput.value = originalTitle;
    itemEditInput.id = `editInput-${todoId}`;
    todoItem.append(itemEditInput);
    const itemEditBtn = document.createElement('button');
    itemEditBtn.textContent = '저장';
    todoItem.append(itemEditBtn);
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

const renderTodo = (newTodos) => {
  todoListEl.innerHTML = '';
  newTodos.forEach((todo) => {
    const listEl = document.createElement('li');
    listEl.textContent = todo.title;
    listEl.id = `todo-${todo.id}`;

    const deleteEl = document.createElement('span');
    deleteEl.textContent = '🗑️';
    deleteEl.onclick = () => deleteTodo(todo.id);

    const udpateEl = document.createElement('span');
    udpateEl.textContent = '✏️';
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

const deleteTodo = (todoId) => {
  fetch(API_URL + '/' + todoId, {
    method: 'DELETE',
  })
    .then(() => fetch(API_URL))
    .then((response) => response.json())
    .then((data) => renderTodo(data));
};
