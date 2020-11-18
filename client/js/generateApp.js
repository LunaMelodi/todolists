import generateWrapper from '/client/js/components/generateWrapper.js';
import headBar from '/client/js/components/headBar.js'; 
import requestLists from '/client/js/requests/requestLists.js';
import noListWindow from '/client/js/components/noListWindow/noListWindow.js';
import listTodos from '/client/js/components/listTodos/listTodos.js';

export default async function generateApp() {
  let lists = await headBar();
  generateWrapper();
  if(lists.length <= 0 ) {
    noListWindow();
  } else {
    let list = await requestLists.get(lists[0].listId);
    listTodos(list.list)
  }
}

