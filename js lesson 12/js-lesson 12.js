function fetchUsers() {
    fetch('http://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const userList = document.getElementById('userList');
            users.forEach(user => {
                const userLink = document.createElement('a');
                userLink.textContent = `${user.id} - ${user.name}`;
                userLink.href = `user-details.html?id=${user.id}`;
                userLink.style.display = 'block';
                userLink.style.marginBottom = '12px';

                const listItem = document.createElement('li');
                listItem.appendChild(userLink);
                userList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Помилка при отриманні користувачів:', error));
}
onload = fetchUsers;