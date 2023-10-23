interface Todo {
    id: number;
    title: string;
    createdAt: string;
    completed: boolean;
}

const todoListEl = document.getElementById("todo-container") as HTMLElement;
const todoInputEl = document.getElementById("todo-input") as HTMLInputElement;

const API_URL = "http://localhost:8080/todos";

try {
    fetch(API_URL)
        .then((response) => response.json())
        .then((data) => renderTodo(data));
} catch (error) {
    console.log(error);
}

const updateTodo = (todo: Todo, newTitle: string) => {
    fetch(API_URL + "/" + todo.id, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newTitle }),
    })
        .then((response) => response.json())
        .then(() => {
            const todoItem = document.querySelector(`#todo-${todo.id} span`) as HTMLSpanElement;
            todoItem.textContent = newTitle;
            todo.title = newTitle;
        });
};

const showUpdateForm = async (todo: Todo) => {
    // 요소 생성 및 추가
    const todoEl = document.querySelector(`#todo-${todo.id}`) as HTMLLIElement;
    todoEl.classList.add("updating");

    const formEl = document.createElement("div");
    formEl.className = "todo-item";

    const inputEl = document.createElement("input");
    inputEl.type = "text";
    inputEl.value = todo.title;

    const btnContainer = document.createElement("div");
    const confirmBtn = document.createElement("button");
    confirmBtn.className = "todo-btn";
    confirmBtn.textContent = "✅";
    const cancelBtn = document.createElement("button");
    cancelBtn.className = "todo-btn";
    cancelBtn.textContent = "❌";
    btnContainer.append(confirmBtn);
    btnContainer.append(cancelBtn);

    formEl.append(inputEl);
    formEl.append(btnContainer);
    todoEl.append(formEl);

    // 요소 제거
    function hideUpdateForm() {
        todoEl.classList.remove("updating");
        formEl.remove();
    }

    // 버튼 이벤트 추가
    return new Promise((resolve: (arg0: string) => void, reject) => {
        confirmBtn.onclick = () => {
            const newTitle = inputEl.value;
            if (newTitle === "") {
                hideUpdateForm();
                reject();
            }
            hideUpdateForm();
            resolve(newTitle);
        };
        cancelBtn.onclick = () => {
            hideUpdateForm();
            reject();
        };
    });
};

const renderTodo = (newTodos: Todo[]) => {
    todoListEl.innerHTML = "";

    newTodos.forEach((todo) => {
        // 요소 생성 및 추가
        const listEl = document.createElement("li");
        listEl.id = `todo-${todo.id}`;
        const container = document.createElement("div");
        container.className = "todo-item";
        const textEl = document.createElement("span");
        textEl.textContent = todo.title;
        const btnContainer = document.createElement("div");
        const deleteEl = document.createElement("button");
        deleteEl.textContent = "🗑️";
        deleteEl.className = "todo-btn";
        deleteEl.onclick = () => deleteTodo(todo.id);
        const udpateEl = document.createElement("button");
        udpateEl.textContent = "✏️";
        udpateEl.className = "todo-btn";
        udpateEl.onclick = () => {
            showUpdateForm(todo).then(
                (newTitle: string) => {
                    updateTodo(todo, newTitle);
                },
                () => {}
            );
        };
        btnContainer.append(deleteEl);
        btnContainer.append(udpateEl);
        container.append(textEl);
        container.append(btnContainer);
        listEl.append(container);
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

const deleteTodo = (todoId: number) => {
    fetch(API_URL + "/" + todoId, {
        method: "DELETE",
    })
        .then(() => fetch(API_URL))
        .then((response) => response.json())
        .then((data) => renderTodo(data));
};
