export default function newbutton(content , buttonId, buttonClass) {
    let customButton = document.createElement('button');
    buttonClass ? customButton.className = buttonClass : console.log('No class has been assigned to this button. ', customButton);;
    buttonId ? customButton.id = buttonId : console.log('No id has been assigned to this button. ', customButton);
    customButton.innerHTML = content;
    return customButton;
}

// this function does not add the button to the DOM. Instead it returns a button node. 
// First parameter is a string with the content of the button.
// If provided second/third parameter assings the button's Id/Class. 