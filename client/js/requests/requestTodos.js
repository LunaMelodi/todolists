import TODOLISTS_API from '/client/js/config/var.js';
import { 
  getAPI,
  postAPI,
  putAPI,
  patchAPI,
  deleteAPI
} from './customFetch.js';

const requestTodos = {
  get: async function (listId, todoId) {
    const path = TODOLISTS_API.API_URL + TODOLISTS_API.LIST_TODOS(listId) + TODOLISTS_API.TODO_ENDPOINT(todoId);
    try {
      let data = await getAPI(path)
      console.log('data :>> ', data);
      return data;
    } catch (error) {
      console.log('error :>> ', error);
    }
  },

  put: async function (listId, todoId, data) {
    const path = TODOLISTS_API.API_URL + TODOLISTS_API.LIST_TODOS(listId) + TODOLISTS_API.TODO_ENDPOINT(todoId);
    try {
      let response = await putAPI(path, data)
      console.log('data :>> ', response);
    } catch (error) {
      console.log('error :>> ', error);
    }
  },   
  
  delete: async function (listId, todoId) {
    try {
      let data = await deleteAPI(TODOLISTS_API.API_URL + TODOLISTS_API.LIST_TODOS(listId) + `/${todoId}`)
      console.log('data :>> ', data);
    } catch (error) {
      console.log('error :>> ', error);
    }
  },

  post: async function (addTodoTitle, addTodoDescription, addTodoDuedate, listId) {
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
    const path = TODOLISTS_API.API_URL + TODOLISTS_API.LIST_TODOS(listId);
    try {
      let response = await postAPI(path, data);
      console.log(response);
    } catch(error) {
      console.log(error)
    }
   
    return 1;
  }
}


export default requestTodos;