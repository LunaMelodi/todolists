import TODOLISTS_API from '/client/js/config/var.js';
import { 
  getAPI,
  postAPI,
  putAPI,
  patchAPI,
  deleteAPI
} from './customFetch.js';

const requestAuth = {
    login: async function (email, password) {
        let user = {
            email: email,
            password: password
        };
        try {
            let response = await postAPI(TODOLISTS_API.API_URL + TODOLISTS_API.AUTH.LOGIN, user);
            window.location.href = 'http://localhost:5500/client/index.html';
        } catch(error){
            console.log(error, TODOLISTS_API.API_URL + TODOLISTS_API.AUTH.LOGIN)
        }
    },
    
    logout() {

    },

    signup: async function (name, email, password) {
        let user = {
            name: name,
            email: email,
            password: password
          };

          await postAPI(TODOLISTS_API.API_URL + TODOLISTS_API.AUTH.SIGNUP, user)
    }
}

export default requestAuth;