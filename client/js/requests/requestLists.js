import TODOLISTS_API from '/client/js/config/var.js';
import menuItems from '/client/js/components/listsMenu/menuItems.js';
import generateApp from '/client/js/generateApp.js';
import { 
  getAPI,
  postAPI,
  putAPI,
  patchAPI,
  deleteAPI
} from './customFetch.js';

const requestLists = {
  get: async function (id) {
    const path = TODOLISTS_API.API_URL + TODOLISTS_API.TODOS_ENDPOINT(id);
    try {
      let data = await getAPI(path)
      console.log('data :>>>> ', data);
      return data;
    } catch (error) {
      console.log('error :>> ', error);
    }
  },

  getAll: async function () {
    try {
      let data = await getAPI(TODOLISTS_API.API_URL + TODOLISTS_API.LISTS_ENDPOINT)
      console.log('data :>> ', data);
      return data;
    } catch (error) {
      console.log('error :>> ', error);
    }
  },
/*
  put: async function (id, data) {
    try {
      let response = await putAPI(TODOLISTS_API.API_URL + TODOLISTS_API.LISTS_ENDPOINT + `/${id}`, data)
      console.log('data :>> ', response);
    } catch (error) {
      console.log('error :>> ', error);
    }
  },   */
  
  delete: async function (id) {
    try {
      let data = await deleteAPI(TODOLISTS_API.API_URL + TODOLISTS_API.LISTS_ENDPOINT + `/${id}`)
      return 1;
    } catch (error) {
      console.log('error :>> ', error);
      return 0;
    }
  },

  post: async function (input) {
    let listName = input.value.trim();
      if(listName === '') {
          alert('Give it a name!')
          return 0
      }
    let data = {
      name: listName
    }
    try {
      let response = await postAPI(TODOLISTS_API.API_URL + TODOLISTS_API.LISTS_ENDPOINT, data);
      console.log(response)
      const ul = document.querySelector('.lists-menu');
      generateApp()
      return response;
    } catch(error) {
      console.log(error)
    }
  }
}


export default requestLists;