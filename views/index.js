
const menuItems = document.querySelectorAll('.menu-item');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messagesSearch = document.querySelector('#message-search');

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
};

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        const notificationPopup = document.querySelector('.notification-popup');
        if (item.id !== 'notifications') {
            notificationPopup.style.display = 'none';
        } else {
            notificationPopup.style.display = 'block';
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const messagesSearch = document.getElementById('message-search');
    const messages = document.querySelectorAll('.messages .messages-body');

    function searchMessages() {
        const searchTerm = messagesSearch.value.toLowerCase();

        messages.forEach(message => {
            const senderName = message.querySelector('h5').textContent.toLowerCase();
            const messageBody = message.querySelector('p').textContent.toLowerCase();

            if (senderName.includes(searchTerm) || messageBody.includes(searchTerm)) {
                message.parentElement.style.display = 'flex';
            } else {
                message.parentElement.style.display = 'none';
            }
        });
    }

    messagesSearch.addEventListener('keyup', searchMessages);
});



