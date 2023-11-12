const API_URL = 'http://localhost:5000/todos';
fetch(API_URL)
  .then((response) => response.json())
  .then((data) => renderTodo(data));

const todoListElement = document.getElementById('todoList');
const todoInputElement = document.getElementById('todoInput');

const updateTodo = (todoId, originalTitle) => {
  const todoItem = document.querySelector(`#todo-${todoId}`);
  const newChildNodes = Array.from(todoItem.childNodes).map(
    (childNode, index) => {
      todoItem.removeChild(childNode);
      if (index === 0) {
        const todoItemInputNode = document.createElement('input');
        todoItemInputNode.type = 'text';
        todoItemInputNode.name = 'todoItemInput';
        todoItemInputNode.value = `${originalTitle}`;

        const todoItemButtonNode = document.createElement('button');
        todoItemButtonNode.type = 'button';
        todoItemButtonNode.textContent = '✅';
        todoItemButtonNode.onclick = () => {
          fetch(`${API_URL}/${todoId}`)
            .then((response) => response.json())
            .then((data) => {
              return fetch(`${API_URL}/${todoId}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  ...data,
                  title: todoItemInputNode.value,
                }),
              });
            })
            .then(() => fetch(API_URL))
            .then((response) => response.json())
            .then((data) => renderTodo(data));
        };

        const newChildNode = document.createElement('span');
        newChildNode.append(todoItemInputNode);
        newChildNode.append(todoItemButtonNode);
        return newChildNode;
      }
      return childNode;
    }
  );
  newChildNodes.map((newChildNode) => todoItem.appendChild(newChildNode));
};

const renderTodo = (newTodos) => {
  todoListElement.textContent = '';
  newTodos.map((todo) => {
    const listElement = document.createElement('li');
    listElement.textContent = todo.title;
    listElement.id = `todo-${todo.id}`;

    const deleteElement = document.createElement('span');
    deleteElement.textContent = '🗑️';
    deleteElement.className = 'deleteBtn';
    deleteElement.onclick = () => deleteTodo(todo.id);

    const updateElement = document.createElement('span');
    updateElement.textContent = '✏️';
    updateElement.className = 'deleteBtn';
    updateElement.onclick = () => updateTodo(todo.id, todo.title);

    listElement.append(deleteElement);
    listElement.append(updateElement);
    todoListElement.append(listElement);
  });
};

const addTodo = () => {
  const title = todoInputElement.value;
  const createdAt = new Date().toISOString();

  if (!title) return;
  const newTodo = {
    id: new Date().getTime(),
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
    .then((newTodo) => {
      console.log(newTodo);
      todoInputElement.value = '';
      return fetch(API_URL);
    })
    .then((response) => response.json())
    .then((data) => renderTodo(data));
};

const deleteTodo = (todoId) => {
  fetch(`${API_URL}/${todoId}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then(() => fetch(API_URL))
    .then((response) => response.json())
    .then((data) => renderTodo(data));

  todos.push({
    id: new Date().toISOString(),
    title,
    createdAt,
  });

  const deletedTodo = todos.filter((todo) => todo.id !== todoId);
  todo = deletedTodo;
  renderTodo(todo);
};
