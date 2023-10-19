// TODO: handle Network Erorrs
// TODO: sort todos by date or alphanumerically

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
  patch = 'PATCH',
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
          try {
            const repsonse = await fetch(`${TODO_API_URL}/${todoId}`);
            const data = await repsonse.json();

            await fetch(`${TODO_API_URL}/${todoId}`, {
              method: HTTPMethod.patch,
              headers: {
                [CONTENT_TYPE]: APPLICATION_JSON,
              },
              body: JSON.stringify({
                title: todoItemInputNode.value,
              }),
            });

            const updatedResponse = await fetch(TODO_API_URL);
            const updatedData = await updatedResponse.json();
            renderTodo(updatedData);
          } catch (error) {
            alert('Something went wrong. Please try again later.');
          }
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

  try {
    await fetch(TODO_API_URL, {
      method: HTTPMethod.post,
      headers: {
        [CONTENT_TYPE]: APPLICATION_JSON,
      },
      body: JSON.stringify({ ...newTodo, completed: false }),
    });
  } catch (error) {
    alert('something went wrong. Please try agian later.');
  }

  // TODO: add updatedTODO to the existing todos instead of fetching
  const updatedResponse = await fetch(TODO_API_URL);
  const updatedTodos: Todos = await updatedResponse.json();
  todoInputElement.value = '';
  renderTodo(updatedTodos);
};

const deleteTodo = async (todoId: number): Promise<void> => {
  try {
    await fetch(`${TODO_API_URL}/${todoId}`, {
      method: HTTPMethod.delete,
    });
    const response = await fetch(TODO_API_URL);
    const updatedTodos: Todos = await response.json();
    renderTodo(updatedTodos);
  } catch (error) {
    alert('Something went wrong. Please try again later.');
  }
};
