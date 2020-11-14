import generateWrapper from '/client/js/components/generateWrapper';
import generateHeader from '/client/js/components/generateHeader'; 
//generateHeader(text) The argument is a string and is optional. It would replace the default header "TodoList" with the new string. 
import generateList from '/client/js/components/generateList'; 
import headBar from '/client/js/components/headBar'; 

export default function generateApp(headerText) {
  generateWrapper()
  generateHeader(headerText)
  headBar()
  generateList()
}