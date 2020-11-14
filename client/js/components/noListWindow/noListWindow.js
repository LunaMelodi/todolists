import addNewList from '/client/js/components/listsMenu/addNewList.js';

export default function noListWindow() {
    let wrapper = document.querySelector('.wrapper');

    let firstListHeader = document.createElement('h1')
    firstListHeader.innerHTML = 'Add a new list!';
    
    let newListInput = addNewList();
    wrapper.append(firstListHeader)
    wrapper.append(newListInput);
    
}