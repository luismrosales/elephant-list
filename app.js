// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", addTodo);
// Functions

function addTodo(event) {
  // prevents form from submitting
  event.preventDefault();
  //   Todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //   create Li
  const newTodo = document.createElement("li");
  newTodo.innerText = "Hey boi";
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
  trashButton.classList.add("complete-button");
  todoDiv.appendChild(trashButton);
  //   append to list
  todoList.appendChild(todoDiv);
}
