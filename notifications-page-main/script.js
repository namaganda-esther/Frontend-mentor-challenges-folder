function markAllRead(){
    const notifications = document.querySelectorAll('.content > div');
    notifications.forEach(notification =>{
        notification.classList.remove('unread');
    });

    const unreadCount = document.getElementById('unread-count');
    unreadCount.textContent = 0;
}