// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

let url = new URL(location.href);
let json = url.searchParams.get(`data`);
let user = JSON.parse(json);

const userDetails = document.querySelector('#user-details');
let div = document.createElement(`div`);
div.classList.add(`user-block-details`);
div.append(user);
userDetails.appendChild(div);
userDetails.innerHTML = `
            <p>Id: ${user.id}</p>
            <p>Name: ${user.name}</p>
            <p>Username: ${user.username}</p>
            <p>Email: ${user.email}</p>
            <ul>Address: 
            <li>Street: ${user.address.street}</li>
            <li>Suite: ${user.address.suite}</li>
            <li>City: ${user.address.city}</li>
            <li>Zipcode: ${user.address.zipcode}</li> 
            <ul>Geo: 
            <li>Lat: ${user.address.geo.lat}</li>
            <li>Lng: ${user.address.geo.lng}</li></ul></ul> 
            <p>Phone: ${user.phone}</p>
            <p>Website: ${user.website}</p>
            <ul>Company:
            <li>Name: ${user.company.name}</li>
            <li>Catchphrase: ${user.company.catchPhrase}</li>
            <li>Bs: ${user.company.bs}</li></ul>  
            `;
let userId = user.id;
const postsBtn = document.getElementById("postsBtn");

postsBtn.addEventListener("click", () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => response.json())
        .then(posts => {
            const postsContainer = document.querySelector('#postsContainer');
            for (const post of posts) {
                let h4 = document.createElement(`h4`);
                h4.innerHTML = post.title;
                let titleBtn = document.createElement(`button`);
                titleBtn.classList.add(`btn`);
                titleBtn.innerText = `View post details`;
                let postLink = document.createElement(`a`);
                postLink.href = `post-details.html?data=` + JSON.stringify(post);
                postsContainer.classList.add(`post-block`);
                postLink.appendChild(titleBtn);
                h4.appendChild(postLink);
                postsContainer.appendChild(h4);
            }
        });
});