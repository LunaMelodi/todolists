export default function headBar() {
    let header = document.createElement('header'); 
    
    let settingsIcon = document.createElement('span'); 
    settingsIcon.className = 'material-icons';
    settingsIcon.classList.add('settings-icon', 'md-24')
    settingsIcon.innerHTML = 'settings';
    
    let listIcon = document.createElement('span'); 
    listIcon.className = 'material-icons';
    listIcon.classList.add('list-icon', 'md-24')
    listIcon.innerHTML = 'list';
  
    header.append(listIcon);
    header.append(settingsIcon);
    let app = document.querySelector('.app');
    app.prepend(header);
}