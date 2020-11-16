import { 
  getAPI,
  postAPI,
  putAPI,
  patchAPI,
  deleteAPI
} from './customFetch.js';

console.log("lists API script running!");

let listIdInput = document.querySelector('#listId');
let addTodoInput = document.querySelector('#todoTitle-input');
let updateListNameInput = document.querySelector('#update-listName-input');
let updateListIdInput = document.querySelector('#update-listId-input');
let deleteListIdInput = document.querySelector('#delete-listId-input');

async function getTodosAPI() {
  try {
    let listId = listIdInput.value;

    let data = await getAPI(`/api/lists/${listId}/todos`);
    console.log('data :>> ', data);
  } catch (error) {
    console.log('error :>> ', error);
  }
}

async function addTodoAPI(evt) {
  evt.preventDefault();

  let listId = listIdInput.value;

  let formData = {
    title: addTodoInput.value
  }

  try {
    let data = await postAPI(`/api/lists/${listId}/todos`, formData);
    console.log('data :>> ', data);
  } catch (error) {
    console.log('error :>> ', error);
  }
  

  addTodoInput.value = '';
}

async function updateListAPI(evt) {
  evt.preventDefault();

  let formData = {
    name: updateListNameInput.value
  }

  let listId = updateListIdInput.value;

  try {
    let data = await putAPI(`/api/lists/${listId}`, formData);
    console.log('data :>> ', data);
  } catch (error) {
    console.log('error :>> ', error);
  }
  
  updateListIdInput.value = '';
  updateListNameInput.value = '';
}

async function deleteListAPI(evt) {
  evt.preventDefault();

  let listId = deleteListIdInput.value;

  try {
    let data = await deleteAPI(`/api/lists/${listId}`);
    console.log('data :>> ', data);
  } catch (error) {
    console.log('error :>> ', error);
  }
  
  deleteListIdInput.value = '';
  
}

let getTodosButton = document.querySelector('#getTodos-button');
let addTodoFormButton = document.querySelector('#addTodo-form');
let updateListFormButton = document.querySelector('#updateList-form');
let deleteListFormButton = document.querySelector('#deleteList-form')

getTodosButton.addEventListener('click', getTodosAPI);
addTodoFormButton.addEventListener('submit', addTodoAPI);
updateListFormButton.addEventListener('submit', updateListAPI);
deleteListFormButton.addEventListener('submit', deleteListAPI);

console.log("list event listeners should have been added!");