interface Todo {
  id: number;
  title: string;
  createdAt: string;
  completed: boolean;
}

type Todos = Todo[];

const BASE_URL = 'http://localhost:5000';
const TODO_RELATIVE_URL = '/todos';
const TODO_API_URL = `${BASE_URL}${TODO_RELATIVE_URL}`;

enum HTTPMethod {
  post = 'POST',
  put = 'PUT',
  delete = 'DELETE',
}

const CONTENT_TYPE = 'Content-Type';
const APPLICATION_JSON = 'application/json';

const BUTTON = 'button';
const INPUT = 'input';

document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch(TODO_API_URL);
  const data = await response.json();
  renderTodo(data);
});

const todoListElement = document.getElementById('todoList')!;
const todoInputElement = document.getElementById(
  'todoInput'
) as HTMLInputElement;

const updateTodo = (todoId: number, originalTitle: string): void => {
  const todoItem = document.querySelector(`#todo-${todoId}`) as HTMLElement;
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
        todoItemButtonNode.onclick = async () => {
          const repsonse = await fetch(`${TODO_API_URL}/${todoId}`);
          const data = await repsonse.json();
          await fetch(`${TODO_API_URL}/${todoId}`, {
            method: HTTPMethod.put,
            headers: {
              [CONTENT_TYPE]: APPLICATION_JSON,
            },
            body: JSON.stringify({
              ...data,
              title: todoItemInputNode.value,
            }),
          });
          const updatedResponse = await fetch(TODO_API_URL);
          const updatedData = await updatedResponse.json();
          renderTodo(updatedData);
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

const renderTodo = (newTodos: Todos): void => {
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

const addTodo = async () => {
  const title = todoInputElement.value;
  const createdAt = new Date().toISOString();

  if (!title) return;
  const newTodo = {
    id: new Date().getTime(),
    title,
    createdAt,
  };

  // TODO: updated existing field using PATCH instead of POST based on Restful API
  await fetch(TODO_API_URL, {
    method: HTTPMethod.post,
    headers: {
      [CONTENT_TYPE]: APPLICATION_JSON,
    },
    body: JSON.stringify({ ...newTodo, completed: false }),
  });

  // TODO: add updatedTODO to the existing todos instead of fetching
  const updatedResponse = await fetch(TODO_API_URL);
  const updatedTodos: Todos = await updatedResponse.json();
  todoInputElement.value = '';
  renderTodo(updatedTodos);
};

const deleteTodo = async (todoId: number): Promise<void> => {
  await fetch(`${TODO_API_URL}/${todoId}`, {
    method: HTTPMethod.delete,
  });

  const response = await fetch(TODO_API_URL);
  const updatedTodos: Todos = await response.json();
  renderTodo(updatedTodos);
};