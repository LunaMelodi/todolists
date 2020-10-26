import getTodosFromBrowser from '/js/getTodosFromBrowser.js';

export default function deleteTodoBrowser(id) {
    let todos = getTodosFromBrowser();
    let indexToDelete = todos.findIndex(todo => { return todo.id === Number(id) });
    
    if(indexToDelete === -1) {
        return 0;
    } else {
        todos.splice(indexToDelete, 1);    
        localStorage.setItem('todolist', JSON.stringify(todos));
        getTodosFromBrowser()
        return 1;
    }
}