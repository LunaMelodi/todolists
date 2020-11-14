import { 
  getAPI,
  postAPI,
  putAPI,
  patchAPI,
  deleteAPI
} from './customFetch.js';

console.log("lists API script running!");

let addListInput = document.querySelector('#listName-input');
let updateListNameInput = document.querySelector('#update-listName-input');
let updateListIdInput = document.querySelector('#update-listId-input');
let deleteListIdInput = document.querySelector('#delete-listId-input');

async function getListsAPI() {
  try {
    let data = await getAPI('/api/lists');
    console.log('data :>> ', data);
  } catch (error) {
    console.log('error :>> ', error);
  }
}

async function addListAPI(evt) {
  evt.preventDefault();

  let formData = {
    name: addListInput.value
  }

  try {
    let data = await postAPI('/api/lists', formData);
    console.log('data :>> ', data);
  } catch (error) {
    console.log('error :>> ', error);
  }
  

  addListInput.value = '';
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

let getListsButton = document.querySelector('#getLists-button');
let addListFormButton = document.querySelector('#addList-form');
let updateListFormButton = document.querySelector('#updateList-form');
let deleteListFormButton = document.querySelector('#deleteList-form')

getListsButton.addEventListener('click', getListsAPI);
addListFormButton.addEventListener('submit', addListAPI);
updateListFormButton.addEventListener('submit', updateListAPI);
deleteListFormButton.addEventListener('submit', deleteListAPI);

console.log("list event listeners should have been added!");