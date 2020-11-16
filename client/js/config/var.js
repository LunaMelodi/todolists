const TODOLISTS_API = {
  API_URL: 'http://localhost:8000',
  LISTS_ENDPOINT: '/api/lists',
  TODOS_ENDPOINT(listid) {
    return `${this.LISTS_ENDPOINT}/${listid}/todos`;
  },
  AUTH: {
    LOGIN: '/auth/login',
    SIGNUP: '/auth/signup',
    LOGOUT: '/auth/logout',
  },
};

export default TODOLISTS_API;
