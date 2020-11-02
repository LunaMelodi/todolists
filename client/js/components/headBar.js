export default function headBar() {
    let header = document.createElement('header'); 
    
    let settingsIcon = document.createElement('span'); 
    settingsIcon.className = 'material-icons';
    settingsIcon.classList.add('settings-icon')
    settingsIcon.innerHTML = 'settings';
    
    header.append(settingsIcon);
    let app = document.querySelector('.app');
    app.prepend(header);
}