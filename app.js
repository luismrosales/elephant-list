// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
document.addEventListener("DOMcontentLoaded", getTodos());
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
// Functions

function addTodo(event) {
  // prevents form from submitting
  event.preventDefault();
  //   Todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //   create Li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  // add todo to local storage
  saveLocalTodos(todoInput.value);
  //   completed button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = "<i class='fas fa-check'></i>";
  completedButton.classList.add("complete-button");
  todoDiv.appendChild(completedButton);
  //   trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = "<i class='fas fa-trash'></i>";
  trashButton.classList.add("trash-button");
  todoDiv.appendChild(trashButton);
  //   append to list
  todoList.appendChild(todoDiv);
  //   Clear todoInput value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  if (item.classList[0] === "trash-button") {
    const todo = item.parentElement;
    // animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  // check mark
  if (item.classList[0] === "complete-button") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function saveLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  console.log("hello");
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    //   Todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //   create Li
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //   completed button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = "<i class='fas fa-check'></i>";
    completedButton.classList.add("complete-button");
    todoDiv.appendChild(completedButton);
    //   trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add("trash-button");
    todoDiv.appendChild(trashButton);
    //   append to list
    todoList.appendChild(todoDiv);
  });
}
