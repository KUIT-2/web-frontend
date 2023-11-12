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
var todoListEl = document.getElementById("todoList");
var todoInputEl = document.getElementById("todoInput");
var API_URL = "http://localhost:8080/todos";
var fetchTodos = function () { return __awaiter(_this, void 0, void 0, function () {
    var response, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(API_URL)];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                return [2 /*return*/, data];
        }
    });
}); };
var fetchData = function () { return __awaiter(_this, void 0, void 0, function () {
    var response, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(API_URL)];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                renderTodo(data);
                return [2 /*return*/];
        }
    });
}); };
document.addEventListener('DOMContentLoaded', fetchData);
// fetch(API_URL)
//   .then((response) => response.json())
//   .then((data) => renderTodo(data));
//   // document onLoad eventListener
var updateTodo = function (todoId, originalTitle) {
    var todoItem = document.querySelector("#todo-".concat(todoId));
    // mission
    // 원래 제목을 input으로 변경
    var updateinputEl = document.createElement("input");
    // css 적용을 위해 id 지정해 줌
    updateinputEl.id = 'updateInput';
    // 원래 title을 보여주기 위해
    updateinputEl.value = originalTitle;
    // updateButton 생성
    var updateButton = document.createElement("button");
    updateButton.textContent = "Update";
    todoItem.textContent = ""; // 원래 있던 항목들 안 보이게 하기
    todoItem.append(updateinputEl); // updateinputEl 표시
    todoItem.append(updateButton); // updateButton 표시
    // updateButton을 클릭했을 때
    updateButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
        var updateTitle, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    updateTitle = updateinputEl.value;
                    if (!(updateTitle !== '')) return [3 /*break*/, 4];
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
                    return [4 /*yield*/, fetch(API_URL + "/" + todoId, {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ title: updateTitle }),
                        })];
                case 1:
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
                    _a.sent();
                    return [4 /*yield*/, fetch(API_URL)];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    renderTodo(data);
                    todoItem.removeChild(updateinputEl); // input 삭제
                    todoItem.removeChild(updateButton); // updateButton 삭제
                    todoItem.textContent = updateTitle; // 업데이트 된 제목 표시
                    return [3 /*break*/, 5];
                case 4:
                    deleteTodo(todoId); // deleteTodo 실행
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    }); });
};
var renderTodo = function (newTodos) {
    if (!todoListEl)
        return;
    todoListEl.innerHTML = "";
    newTodos.forEach(function (todo) {
        var listEl = document.createElement("li");
        listEl.textContent = todo.title;
        listEl.id = "todo-".concat(todo.id);
        var deleteEl = document.createElement("span");
        deleteEl.textContent = "🗑️";
        deleteEl.onclick = function () { return deleteTodo(todo.id); };
        var updateEl = document.createElement("span");
        updateEl.textContent = "✏️";
        updateEl.onclick = function () { return updateTodo(todo.id, todo.title); };
        listEl.append(deleteEl);
        listEl.append(updateEl);
        todoListEl.append(listEl);
    });
};
var addTodo = function () { return __awaiter(_this, void 0, void 0, function () {
    var title, date, createdAt, newTodo, response, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                title = todoInputEl.value;
                date = new Date();
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
                return [4 /*yield*/, fetch(API_URL)];
            case 2:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 3:
                data = _a.sent();
                renderTodo(data);
                return [2 /*return*/];
        }
    });
}); };
var deleteTodo = function (todoId) { return __awaiter(_this, void 0, void 0, function () {
    var todoItem;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(API_URL + "/" + todoId, {
                    method: "DELETE",
                })
                // 직접 제거
            ];
            case 1:
                _a.sent();
                todoItem = document.querySelector("#todo-".concat(todoId));
                if (todoItem) {
                    todoItem.remove();
                }
                return [2 /*return*/];
        }
    });
}); };
