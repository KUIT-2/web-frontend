const todoListEl = document.getElementById("todoList") as HTMLElement;
const todoInputEl = document.getElementById("todoInput") as HTMLInputElement;
//todoInputEl객체를 선언하는것 "todoInput" id를 가진 객체에 접근
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

// const fetchTodos = async (): Promise<Todos> => {
//     const response = await fetch(API_URL);
//     const data = await response.json();
//     return data;
// }

const fetchData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    renderTodo(data);
};

window.onload = fetchData;

// api_url에 정보를 요청하는것
// fetch(API_URL)
//     .then((response) => response.json())
//     .then((data) => renderTodo(data));
//document onload eventlistner

//data = newTodos
const renderTodo = (newTodos: Todo[]) => { // newtodos 데이터를 받는다
    todoListEl.innerHTML = ""; //todoListEl이라는 html 요소의 내용을 빈 문자열로 설정 이것은 todo 목록을 업데이트하기전에 이전 목록을 지우는 역할
    newTodos.forEach((todo: Todo) => { //각 todo 항목에 대한 반복
        //newTodos는 배열요소임(이것을 console.log로 직접 확인할 수 있음)
        const listEl = document.createElement("li");
        //html li tag 요소 생성
        listEl.textContent = todo.title;
        // 새로 생성된  리스트 아이템의 텍스트 내용을  현재 todo항목의 제목(todo.title)으로 설정
        listEl.id = `todo-${todo.id}`;
        //list item의 고유한 id 설정

        const deleteEl = document.createElement("span");
        deleteEl.textContent = "🗑️";
        deleteEl.onclick = () => deleteTodo(todo.id);

        const udpateEl = document.createElement("span");
        udpateEl.textContent = "✏️";
        udpateEl.onclick = () => updateTodo(todo.id, todo.title);
        // 연필모양 아이콘을 누르면 updateodo 함수 호출
        // 이때 todo 항목의 id,와 title을 인수로 전달
        listEl.append(deleteEl);
        listEl.append(udpateEl);
        todoListEl.append(listEl);
        //listEl즉 부모요소의 자식요소로서 deleteEl을 추가
        //todoListEl즉 부모요소의 자식요소로서 listEl을 추가
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
    };

    await fetch(API_URL, {
        method: "POST", // post 요청 새로운 todo항목을 추가하는데 사용
        headers: {
            "Content-Type": "application/json",
        },// 본문이 json형식임을 서버에 알림
        body: JSON.stringify({ ...newTodo, completed: false }),
    }) // 

    todoInputEl.value = "";

    // .then((response) => response.json())
    // .then(() => {

    //     return fetch(API_URL);
    //     //업데이트된 할일목록을 가져오기 위함
    // })

    await fetchData();

    // .then((response) => response.json())
    // .then((data) => renderTodo(data));
};

// const deleteTodo = (todoId) => {
//     fetch(API_URL + "/" + todoId, {
//         method: "DELETE",
//     })
//         .then(() => fetch(API_URL))
//         .then((response) => response.json())
//         .then((data) => renderTodo(data));
// };
const deleteTodo = async (todoId: number) => {
    await fetch(API_URL + "/" + todoId, {
        method: "DELETE",
    })

    await fetchData();

    // const newTodos = await fetchTodos();
    // renderTodo(newTodos.todos);

}



const updateTodo = async (todoId: number, originalTitle: string) => {
    const todoItem = document.querySelector(`#todo-${todoId}`) as HTMLElement;

    const inputElement = document.createElement("input");
    inputElement.type = "text";
    inputElement.value = originalTitle;

    todoItem.innerHTML = "";
    todoItem.append(inputElement);

    inputElement.addEventListener("keydown", async (event) => {
        if (event.key === "Enter") {
            const updatedTitle = inputElement.value;

            await fetch(API_URL + "/" + todoId, {
                method: "PATCH", headers: { 'Content-Type': 'application/json' }
                , body: JSON.stringify({ title: updatedTitle })
            })

            await fetchData();
            //         .then(() => fetch(API_URL))
            //         .then((response) => response.json())
            //         .then((data) => renderTodo(data));
            // }
        }
    })




};