const TODOLISTS_API = {
    API_URL: 'http://localhost:8000',
    LISTS_ENDPOINT: '/api/lists',
    TODOS_ENDPOINT: function (listid) {
      return `${this.LISTS_ENDPOINT}/${listid}/todos`;
    } 
}


export default TODOLISTS_API;
