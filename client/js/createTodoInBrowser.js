export default function createTodoInBrowser(temporalTodos) {
    var addTodoInput = document.getElementById("add-todo");
    temporalTodos.push(addTodoInput.value)
    sessionStorage.setItem('todolist', JSON.stringify(temporalTodos));
    return 1;
}

// this function takes the input value (the new todo) and saves it to the browser. Data keeps saved as long as the window is open 