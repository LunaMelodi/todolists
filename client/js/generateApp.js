import generateWrapper from '/client/js/components/generateWrapper.js';
import generateHeader from '/client/js/components/generateHeader.js'; 
//generateHeader(text) The argument is a string and is optional. It would replace the default header "TodoList" with the new string. 
import generateList from '/client/js/components/generateList.js'; 
import addTodoButton from '/client/js/components/addTodoButton.js'; 
import headBar from '/client/js/components/headBar.js'; 


export default function generateApp(headerText) {
  generateWrapper()
  generateHeader(headerText)
  headBar()
  addTodoButton()
  generateList()
}