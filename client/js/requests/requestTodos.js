import TODOLISTS_API from '/client/js/config/var.js';
import { 
  getAPI,
  postAPI,
  putAPI,
  patchAPI,
  deleteAPI
} from './customFetch.js';

const requestTodos = {
  get: async function (id) {
    try {
      let data = await getAPI(TODOLISTS_API.API_URL + TODOLISTS_API.TODOS_ENDPOINT + `/${id}`)
      console.log('data :>> ', data);
      return data;
    } catch (error) {
      console.log('error :>> ', error);
    }
  },

  getAll: async function () {
    try {
      let data = await getAPI(TODOLISTS_API.API_URL + TODOLISTS_API.TODOS_ENDPOINT)
      console.log('data :>> ', data);
      return data;
    } catch (error) {
      console.log('error :>> ', error);
    }
  },
/*
  put: async function (id, data) {
    try {
      let response = await putAPI(TODOLISTS_API.API_URL + TODOLISTS_API.TODOS_ENDPOINT + `/${id}`, data)
      console.log('data :>> ', response);
    } catch (error) {
      console.log('error :>> ', error);
    }
  },   */
  
  delete: async function (listId, todoId) {
    try {
      let data = await deleteAPI(TODOLISTS_API.API_URL + TODOLISTS_API.TODOS_ENDPOINT(listId) + `/${todoId}`)
      console.log('data :>> ', data);
    } catch (error) {
      console.log('error :>> ', error);
    }
  },

  post: async function (addTodoTitle, addTodoDescription, addTodoDuedate) {
    let titleValue = addTodoTitle.value.trim();
    let descriptionValue = addTodoDescription.value.trim();
    let dueDateValue = addTodoDuedate.value;
    if(titleValue === '') {
        alert('Give it a title!')
        return 0
    }
    let data = {
      title: titleValue,
      description: descriptionValue,
      dueDate: dueDateValue
    }
    try {
      let response = await postAPI(TODOLISTS_API.API_URL + TODOLISTS_API.TODOS_ENDPOINT, data);
      console.log(response);
    } catch(error) {
      console.log(error)
    }
    
    titleValue.value = '';
    descriptionValue.value = '';
    dueDateValue.value = '';
   
    return 1;
  }
}


export default requestTodos;