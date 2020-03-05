fetch('https://jsonplaceholder.typicode.com/people')
.then(response => response.json())
.then(json => displayUser(json))
.catch(error => console.log(error))

function displayUser(users) {
    const userNames = users.map(user => user.username);
    const ul = document.getElementById('users-container');

    for(let i = 0; i < userNames.length; i++) {
        const username = userNames[i];
        const li = document.createElement('li');
        li.innerText = username;
        ul.appendChild(li);
    }
}