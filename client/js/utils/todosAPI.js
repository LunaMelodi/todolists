import { getAPI, postAPI, putAPI, patchAPI, deleteAPI } from "./customFetch.js";

console.log("lists API script running!");

let listIdInput = document.querySelector("#listId");
let addTodoInput = document.querySelector("#todoTitle-input");
let updateTodoNameInput = document.querySelector("#updateTodoTitle");
let updateTodoIdInput = document.querySelector("#updateTodoId");
let deleteTodoIdInput = document.querySelector("#delete-todoId-input");

async function getTodosAPI() {
  try {
    let listId = listIdInput.value;

    let data = await getAPI(`/api/lists/${listId}/todos`);
    console.log("data :>> ", data);
  } catch (error) {
    console.log("error :>> ", error);
  }
}

async function addTodoAPI(evt) {
  evt.preventDefault();

  let listId = listIdInput.value;

  let formData = {
    title: addTodoInput.value,
  };

  try {
    let data = await postAPI(`/api/lists/${listId}/todos`, formData);
    console.log("data :>> ", data);
  } catch (error) {
    console.log("error :>> ", error);
  }

  addTodoInput.value = "";
}

async function updateTodoAPI(evt) {
  evt.preventDefault();

  let formData = {
    title: updateTodoNameInput.value,
  };

  let listId = listIdInput.value;
  let todoId = updateTodoIdInput.value;

  console.log("listId :>> ", listId);
  console.log("todoId :>> ", todoId);
  console.log("formData :>> ", formData);

  try {
    let data = await putAPI(`/api/lists/${listId}/todos/${todoId}`, formData);
    console.log("data :>> ", data);
  } catch (error) {
    console.log("error :>> ", error);
  }

  updateTodoIdInput.value = "";
  updateTodoNameInput.value = "";
}

async function deleteTodoAPI(evt) {
  evt.preventDefault();

  let listId = listIdInput.value;
  let todoId = deleteTodoIdInput.value;

  try {
    let data = await deleteAPI(`/api/lists/${listId}/todos/${todoId}`);
    console.log("data :>> ", data);
  } catch (error) {
    console.log("error :>> ", error);
  }

  deleteTodoIdInput.value = "";
}

let getTodosButton = document.querySelector("#getTodos-button");
let addTodoFormButton = document.querySelector("#addTodo-form");
let updateTodoFormButton = document.querySelector("#updateTodo-form");
let deleteTodoFormButton = document.querySelector("#deleteTodo-form");

getTodosButton.addEventListener("click", getTodosAPI);
addTodoFormButton.addEventListener("submit", addTodoAPI);
updateTodoFormButton.addEventListener("submit", updateTodoAPI);
deleteTodoFormButton.addEventListener("submit", deleteTodoAPI);

console.log("list event listeners should have been added!");
