const button = document.getElementById('toggleButton');
const notificationMessage = document.getElementById('notificationMessage');

let notificationStatus = false;

button.addEventListener('click', function(e){
    if(!notificationStatus){
        button.textContent = 'Turn Notification OFF';
        notificationMessage.textContent = 'Notifications are ON.'
        notificationStatus = true
    }else{
        button.textContent = 'Turn Notification ON';
        notificationMessage.textContent = 'Notifications are OFF.'
        notificationStatus = false
    }
})