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

const sortTodo = async (sortBy: string) => {
  console.log(sortBy);
  try {
    const response = await fetch(`${TODO_API_URL}`);
    const todos: Todos = await response.json();
    const sortedTodos = todos.sort((a: Todo, b: Todo) => {
      switch (sortBy) {
        case 'a-z':
          if (a.title <= b.title) {
            return -1;
          } else {
            return 1;
          }
        case 'date':
          return (
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );
        default:
          throw new Error('TypeError');
      }
    });

    renderTodo(sortedTodos);
  } catch (error) {
    console.log('Something went wrong. Please try agian.');
  }
};

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

const toggleTodoCompletion = async (
  todoId: number,
  completed: boolean
): Promise<void> => {
  try {
    console.log('0');
    console.log(todoId);
    console.log(completed);

    await fetch(`${TODO_API_URL}/${todoId}`, {
      method: HTTPMethod.patch,
      headers: {
        [CONTENT_TYPE]: APPLICATION_JSON,
      },
      body: JSON.stringify({
        completed: !completed,
      }),
    });
    console.log({ completed: !completed });
    const response = await fetch(`${TODO_API_URL}`);
    const todos: Todos = await response.json();
    renderTodo(todos);
  } catch (error) {
    console.log(error);
    console.log('Something went wrong. Please try again.');
  }
};

const renderTodo = (newTodos: Todos): void => {
  todoListElement.textContent = '';
  newTodos
    .sort((a: Todo, b: Todo): number => {
      if (a.completed === false && b.completed === true) {
        return -1;
      }
      return 1;
    })
    .map((todo) => {
      const listElement = document.createElement('li');
      listElement.textContent = todo.title;
      listElement.id = `todo-${todo.id}`;

      if (todo.completed) {
        listElement.style.backgroundColor = '#eee';
      }

      const deleteElement = document.createElement('button');
      deleteElement.textContent = '🗑️';
      deleteElement.className = 'deleteBtn';
      deleteElement.onclick = () => deleteTodo(todo.id);

      const updateElement = document.createElement('button');
      updateElement.textContent = '✏️';
      updateElement.className = 'deleteBtn';
      updateElement.onclick = () => updateTodo(todo.id, todo.title);

      const completeElement = document.createElement('button');
      completeElement.textContent = todo.completed ? '❌' : '✅';
      completeElement.className = 'deleteBtn';
      completeElement.onclick = () =>
        toggleTodoCompletion(todo.id, todo.completed);

      listElement.append(deleteElement);
      listElement.append(updateElement);
      listElement.append(completeElement);
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
    alert('Something went wrong. Please try again later.');
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
