const todoInput = document.getElementById("new-todo");
const todoList = document.getElementById("list");

function addTodo() {
  if (todoInput.value === "") {
    alert("Please enter a todo!");
  } else {
    let todoTask = document.createElement("li");
    todoTask.innerHTML = todoInput.value;
    todoList.appendChild(todoTask);
    let trash = document.createElement("span");
    todoTask.appendChild(trash);
  }
  todoInput.value = "";
}

todoList.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
    } else if (event.target.tagName === "SPAN") {
      event.target.parentElement.remove();
    }
  },
  false
);
