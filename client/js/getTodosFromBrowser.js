import displayTodos from "/client/js/displayTodos.js";

export default function getTodosFromBrowser() {
    let todosParsed = JSON.parse(localStorage.getItem('todolist'));
    displayTodos(todosParsed); 
    return todosParsed;
}


// getTodosFromBrowser() looks for 'todolist' value in the browser and returns an array with all todos saved.