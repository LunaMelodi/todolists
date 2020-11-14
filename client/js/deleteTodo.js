import getTodos from '/client/js/getTodos';

export default function deleteTodo(id) {

    fetch('http://localhost:8080/api/todos/' + id, {
      method: 'DELETE',
    })
    .then(response => {
        if(response.ok){
            return response
        } else throw new Error('Delete request failed. ');
    })
    .then(res => {
        console.log(res);
        getTodos();
    })
    .catch(error => {
        console.log(error);
    })
}