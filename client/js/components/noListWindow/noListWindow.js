import addNewList from '/client/js/components/listsMenu/addNewList.js';

export default function noListWindow() {
    let wrapper = document.querySelector('.wrapper');

    let container = document.createElement('div');
    container.id = 'no-list-container';

    let firstListHeader = document.createElement('h1')
    firstListHeader.innerHTML = 'Add a new list!';
    
    let newListInput = addNewList();
    container.append(firstListHeader)
    container.append(newListInput);
    wrapper.append(container);
}