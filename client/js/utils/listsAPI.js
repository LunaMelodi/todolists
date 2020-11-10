import customFetch from './customFetch.js';

let addListInput = document.querySelector('#addList-input');

async function getListsAPI() {
  try {
    let data = await customFetch.getAPI('/api/lists');
    console.log('data :>> ', data);
  } catch (error) {
    console.log('error :>> ', error);
  }
}

async function addListAPI() {
  let formData = {
    name: addListInput.value
  }

  try {
    let data = await customFetch.postAPI('/api/lists', formData);
    console.log('data :>> ', data);
  } catch (error) {
    console.log('error :>> ', error);
  }
  

  addListInput.value = '';
}




let getListsButton = document.querySelector('#getLists-button');
let addListForm = document.querySelector('#addList-form');

getListsButton.addEventListener('click', getListsAPI);
addListForm.addEventListener('submit', addListAPI);