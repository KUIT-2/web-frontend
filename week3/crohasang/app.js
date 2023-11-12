const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");

const API_URL = "http://localhost:8080/todos";

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => renderTodo(data));

const updateTodo = (todoId, originalTitle) => {
  const todoItem = document.querySelector(`#todo-${todoId}`);
  
  // mission
  
  // 원래 제목을 input으로 변경
  const updateinputEl = document.createElement("input");
  
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
  updateButton.addEventListener("click", () => {
    
    // input에 입력된 제목이 updateTitle
    const updateTitle = updateinputEl.value;
    
    if (updateTitle !== '') { // 새로 입력한 input이 비어있지 않을 때
      
      fetch(API_URL + "/" + todoId, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: updateTitle }),
      })
        .then(() => fetch(API_URL))
        .then((response) => response.json()) 
        .then((data) => renderTodo(data));

      todoItem.remove(updateinputEl); // input 삭제
      todoItem.remove(updateButton); // updateButton 삭제
      todoItem.textContent = updateTitle; // 업데이트 된 제목 표시

    }

    else { // 만약 새로 입력한 input이 아무것도 써져있지 않다면
      deleteTodo(todoId); // deleteTodo 실행
    }

  });

  
};

const renderTodo = (newTodos) => {
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
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...newTodo, completed: false }),
  })
    .then((response) => response.json())
    .then(() => {
      todoInputEl.value = "";
      return fetch(API_URL);
    })
    .then((response) => response.json())
    .then((data) => renderTodo(data));
};

const deleteTodo = (todoId) => {
  fetch(API_URL + "/" + todoId, {
    method: "DELETE",
  })
    .then(() => fetch(API_URL))
    .then((response) => response.json())
    .then((data) => renderTodo(data));
};
