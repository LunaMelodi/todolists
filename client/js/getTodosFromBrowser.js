export default function getTodosFromBrowser() {
    let todosParsed = JSON.parse(sessionStorage.getItem('todolist'));
    return todosParsed;
}


// getTodosFromBrowser() looks for 'todolist' value in the browser and returns an array with all todos saved.