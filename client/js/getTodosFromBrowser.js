import displayTodos from "/client/js/displayTodos.js";

export default function getTodosFromBrowser() {
    let todosParsed = JSON.parse(localStorage.getItem('todolist'));
    displayTodos(todosParsed);
    
    if(todosParsed[0]) {
        return todosParsed;
    } else return false;
}


// getTodosFromBrowser() looks for 'todolist' value in the browser and returns an array with all todos saved.