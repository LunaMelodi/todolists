const TODOLISTS_API = {
    API_URL: 'http://localhost:8000',
    LISTS_ENDPOINT: '/api/lists',
    LIST_TODOS(listid) {
      return `${this.LISTS_ENDPOINT}/${listid}/todos`;
    },
    TODO_ENDPOINT(todoId) {
      return `/${todoId}`;
    },
    AUTH: {
      LOGIN: '/auth/login',
      SIGNUP: '/auth/signup',
      LOGOUT: '/auth/logout'
    }
}


export default TODOLISTS_API;
