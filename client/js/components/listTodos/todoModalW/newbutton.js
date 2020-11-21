export default function newbutton(content , buttonId, buttonClass) {
    let customButton = document.createElement('button');
    buttonClass ? customButton.className = buttonClass : null;
    buttonId ? customButton.id = buttonId : null;
    customButton.innerHTML = content;
    return customButton;
}

// this function does not add the button to the DOM. Instead it returns a button node. 
// First parameter is a string with the content of the button.
// If provided second/third parameter assings the button's Id/Class. 