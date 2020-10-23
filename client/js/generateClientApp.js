export default function generateClientApp() {
  let bodyDiv = document.createElement('div');
  bodyDiv.setAttribute('class', 'root');
  document.body.appendChild(bodyDiv)
  bodyDiv.innerHTML =  `<div class="app">
                          <div class="wrapper">
                            <section class="header">
                              <h1>TodoList</h1>
                              <generateClientApp>Hello</generateClientApp>
                            </section>
                            <section class="main-form">
                              <form class="add-todo-form" id="add-todo-form">
                                <input name="add-todo" id="add-todo" type="text" placeholder="Add a todo here!">
                                <button class="add-button" type="submit">Add Todo</button>
                              </form>
                            </section>
                            <section class="todo-list">
                              <ul class="list-items" id="list-items"> </ul>
                            </section>
                          </div>
                        </div> `
}