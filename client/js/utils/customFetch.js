<<<<<<< HEAD
import TODOLISTS_API from '../config/var.js';
=======
import API_URL from '../config/var';
>>>>>>> todosAPI

export async function getAPI(path) {
  const response = await fetch(TODOLISTS_API.API_URL + path, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });

  return response.json();
}

export async function postAPI(path, data) {
  const response = await fetch(TODOLISTS_API.API_URL + path, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(data),
  })
  
  return response.json();
}

export async function putAPI(path, data) {
  const response = await fetch(TODOLISTS_API.API_URL + path, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(data),
  })
  
  return response.json();
}

export async function patchAPI(path, data) {
  const response = await fetch(TODOLISTS_API.API_URL + path, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(data),
  })
  
  return response.json();
}

export async function deleteAPI(path) {
  const response = await fetch(TODOLISTS_API.API_URL + path, {
    method: 'DELETE', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
  
  return response.json();
}