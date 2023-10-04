/* todoListEl와 todoInputEl가 HTMLElement 또는 null을 반환
-> null의 가능성 때문에 ts 실행시 오류 발생
👉🏻 1. HTMLElement로 명백하게 존재한다는 것을 알고 있으므로, as HTMLElement로 null의 가능성을 없애거나
  2. 각 element의 value 값을 참조하는 곳에서 early return pattern을 사용 (값이 null이면 return) */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var fetchAndRenderTodos = function () { return __awaiter(_this, void 0, void 0, function () {
    var response, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(API_URL)];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                renderTodo(data.filter(function (todo) { return !todo.completed; }));
                return [2 /*return*/];
        }
    });
}); };
/* fetch(API_URL)이 Response를 감싼 Promise를 반환 */
window.addEventListener("load", function (event) {
    fetchAndRenderTodos();
});
var todoListEl = document.getElementById("todoList");
var todoInputEl = document.getElementById("todoInput");
todoInputEl.addEventListener("keydown", function (event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});
var API_URL = "http://localhost:8080/todos";
var renderTodo = function (newTodos) {
    todoListEl.innerHTML = ""; // 기존 todo 비우기 (같은 Todo가 추가되는 것을 방지)
    newTodos.forEach(function (todo) {
        var listEl = document.createElement("li");
        listEl.id = "todo-".concat(todo.id);
        var textEl = document.createElement("div");
        listEl.append(textEl);
        var textContentEl = document.createElement("span");
        textContentEl.textContent = todo.title;
        // textContentEl.className = "todo-title";
        textEl.append(textContentEl);
        "";
        var editEl = document.createElement("div");
        listEl.append(editEl);
        var updateEl = document.createElement("span");
        updateEl.textContent = "🖋️";
        updateEl.className = "editBtn";
        updateEl.onclick = function () {
            updateTodo(todo.id, todo.title);
        };
        var deleteEl = document.createElement("span");
        deleteEl.textContent = "🗑️";
        deleteEl.className = "deleteBtn";
        deleteEl.onclick = function () {
            deleteTodo(todo.id);
        };
        editEl.append(updateEl);
        editEl.append(deleteEl);
        todoListEl.append(listEl);
    });
};
var addTodo = function () { return __awaiter(_this, void 0, void 0, function () {
    var title, date, createdAt, newTodo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                title = todoInputEl.value;
                date = new Date();
                ㄴ;
                createdAt = date.toDateString();
                if (!title)
                    return [2 /*return*/];
                newTodo = {
                    id: date.getTime(),
                    title: title,
                    createdAt: createdAt,
                };
                return [4 /*yield*/, fetch(API_URL, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(__assign(__assign({}, newTodo), { completed: false })),
                    })];
            case 1:
                _a.sent();
                todoInputEl.value = "";
                fetchAndRenderTodos();
                return [2 /*return*/];
        }
    });
}); };
var deleteTodo = function (todoId) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(API_URL + "/" + todoId, {
                    method: "DELETE",
                })];
            case 1:
                _a.sent();
                fetchAndRenderTodos();
                return [2 /*return*/];
        }
    });
}); };
var updateTodo = function (todoId, originalTitle) { return __awaiter(_this, void 0, void 0, function () {
    var todoItem, inputEl, inputItem, updateBtn;
    return __generator(this, function (_a) {
        todoItem = document.querySelector("#todo-".concat(todoId));
        // const todoTitle = todoItem.querySelector('.todo-title'); // 파라미터로 originalTitle을 받지 않았을 때
        if (!todoItem)
            return [2 /*return*/];
        inputEl = document.createElement("div");
        inputEl.className = "update-container";
        inputItem = document.createElement("input");
        inputItem.value = originalTitle;
        inputItem.className = "todoInput";
        inputItem.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                updateTodoTitle(todoId, inputItem.value);
            }
        });
        updateBtn = document.createElement("span");
        updateBtn.textContent = "✔️";
        updateBtn.className = "updateBtn";
        updateBtn.onclick = function () {
            updateTodoTitle(todoId, inputItem.value);
        };
        todoItem.innerHTML = "";
        todoItem.appendChild(inputEl);
        inputEl.append(inputItem);
        inputEl.append(updateBtn);
        return [2 /*return*/];
    });
}); };
function updateTodoTitle(todoId, updatedTitle) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(API_URL + "/" + todoId, {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ title: updatedTitle }),
                    })];
                case 1:
                    _a.sent();
                    todoInputEl.value = "";
                    fetchAndRenderTodos();
                    return [2 /*return*/];
            }
        });
    });
}
