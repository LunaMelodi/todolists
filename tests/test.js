import requestLists from '/tests/requests/requests.js';

let testPost = document.createElement('button');
testPost.innerHTML = 'post list'

let testGet = document.createElement('button');
testGet.innerHTML = 'get list'

let testGetAll = document.createElement('button');
testGetAll.innerHTML = 'get all lists'

let testPut = document.createElement('button');
testPut.innerHTML = 'put list'

let testDelete = document.createElement('button');
testDelete.innerHTML = 'delete list'

document.body.append(testPost)
document.body.append(testGet)
document.body.append(testGetAll)
document.body.append(testPut)
document.body.append(testDelete)



const post = () => {
    requestLists.post(/*argument missing*/) 
}
testPost.addEventListener('click', post);

const get = () => {
    requestLists.get(/*argument missing*/)
}
testGet.addEventListener('click', get)


testGetAll.addEventListener('click', requestLists.getAll);


const put = () => {
    requestLists.put(/*arguments missing*/)
}
testPut.addEventListener('click', put)

const _delete = () => {
    requestLists.delete(/*argument missing*/)
}
testDelete.addEventListener('click', _delete)