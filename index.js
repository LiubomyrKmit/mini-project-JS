// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули

let url = new URL(`https://jsonplaceholder.typicode.com/users`);
fetch(url)
    .then(value => value.json())
    .then(users => {
        const container = document.querySelector('#users-container');
        for (const user of users) {
            let div = document.createElement(`div`);
            div.classList.add(`user-block`);
            div.innerText = `ID: ${user.id} Name: ${user.name}`;
            let button = document.createElement(`button`);
            button.innerText = `Details`;
            let a = document.createElement(`a`);
            a.href = `user-details.html?data=` + JSON.stringify(user);
            a.appendChild(button);
            div.appendChild(a);
            container.appendChild(div);
        }
    })