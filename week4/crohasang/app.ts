const todoListEl = document.getElementById("todoList") as HTMLElement;
const todoInputEl = document.getElementById("todoInput") as HTMLInputElement;

const API_URL = "http://localhost:8080/todos";

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


const fetchData = async () => {
  
  const response = await fetch(API_URL);
  const data = await response.json();
  renderTodo(data);

};
document.addEventListener('DOMContentLoaded', fetchData);

// fetch(API_URL)
//   .then((response) => response.json())
//   .then((data) => renderTodo(data));
//   // document onLoad eventListener

const updateTodo = (todoId: number, originalTitle: string) => {
  const todoItem = document.querySelector(`#todo-${todoId}`) as HTMLElement;
  
  // mission
  
  // 원래 제목을 input으로 변경
  const updateinputEl = document.createElement("input") as HTMLInputElement;
  
  // css 적용을 위해 id 지정해 줌
  updateinputEl.id = 'updateInput';

  // 원래 title을 보여주기 위해
  updateinputEl.value = originalTitle; 

  // updateButton 생성
  const updateButton = document.createElement("button");
  updateButton.textContent = "Update";

  todoItem.textContent = ""; // 원래 있던 항목들 안 보이게 하기
  todoItem.append(updateinputEl); // updateinputEl 표시
  todoItem.append(updateButton); // updateButton 표시
  
  // updateButton을 클릭했을 때
  updateButton.addEventListener("click", async () => {
    
    // input에 입력된 제목이 updateTitle
    const updateTitle = updateinputEl.value;
    
    if (updateTitle !== '') { // 새로 입력한 input이 비어있지 않을 때
      
      // fetch(API_URL + "/" + todoId, {
      //   method: "PUT",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ title: updateTitle }),
      // })
      //   .then(() => fetch(API_URL))
      //   .then((response) => response.json()) 
      //   .then((data) => renderTodo(data));
      
        await fetch(API_URL + "/" + todoId, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: updateTitle }),
        });

        const response = await fetch(API_URL);
        const data = await response.json();

        renderTodo(data);
      

      todoItem.removeChild(updateinputEl); // input 삭제
      todoItem.removeChild(updateButton); // updateButton 삭제
      todoItem.textContent = updateTitle; // 업데이트 된 제목 표시

    }

    else { // 만약 새로 입력한 input이 아무것도 써져있지 않다면
      deleteTodo(todoId); // deleteTodo 실행
    }

  });

  
};

const renderTodo = (newTodos: Todo[]) => {
  if(!todoListEl) return;

  todoListEl.innerHTML = "";
    newTodos.forEach((todo) => {
      const listEl = document.createElement("li");
      listEl.textContent = todo.title;
      listEl.id = `todo-${todo.id}`;

      const deleteEl = document.createElement("span");
      deleteEl.textContent = "🗑️";
      deleteEl.onclick = () => deleteTodo(todo.id);

      const updateEl = document.createElement("span");
      updateEl.textContent = "✏️";
      updateEl.onclick = () => updateTodo(todo.id, todo.title);

      listEl.append(deleteEl);
      listEl.append(updateEl);
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
  } as Todo;

  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...newTodo, completed: false }),
  })

  todoInputEl.value = "";

  const response = await fetch(API_URL);
  const data = await response.json();

  renderTodo(data);

    // .then((response) => response.json())
    // .then(() => {
    //   todoInputEl.value = "";
    //   return fetch(API_URL);
    // })
    // .then((response) => response.json())
    // .then((data) => renderTodo(data));
};


const deleteTodo = async (todoId: number) => {
  await fetch(API_URL + "/" + todoId, {
    method: "DELETE",
  })

   // 직접 제거
   const todoItem = document.querySelector(`#todo-${todoId}`) as HTMLElement;
   if (todoItem) {
     todoItem.remove();
   }

  // 밑의 방식으로 하니까 deleteTodo가 작동이 잘 안된다.
  // const newTodos = await fetchTodos();
  // renderTodo(newTodos.todos);
};
