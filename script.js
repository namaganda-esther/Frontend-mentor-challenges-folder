// function markAllRead(){
//     const notifications = document.querySelectorAll('.content > div');
//     notifications.forEach(notification =>{
//         notification.classList.remove('unread');
//     });

//     const unreadCount = document.getElementById('unread-count');
//     unreadCount.textContent = 0;
// }

function toggleRead() {
    const notifications = document.querySelectorAll('.unread');
    notifications.forEach(notification => {
      notification.classList.toggle('unread');
      notification.classList.toggle('read');
    });

    const unreadCount = document.getElementById('unread-count');
    unreadCount.textContent = 0;

    const markAllAsRead = document.querySelector('.row-2');
    markAllAsRead.addEventListener('click', toggleRead);

  }
  