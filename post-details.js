// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let url = new URL(location.href);
let json = url.searchParams.get(`data`);
let postData = JSON.parse(json);

const postDetails = document.querySelector(`#post-details`);
let div = document.createElement(`div`);
div.classList.add(`post-block-details`);
div.append(postData);
postDetails.appendChild(div);
postDetails.innerHTML = `
            <li>User Id: ${postData.userId}</li>
            <li>Id: ${postData.id}</li>
            <li>Title: ${postData.title}</li>
            <li>Body: ${postData.body}</li>
            `;
let postId = postData.userId;
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .then(comments => {
        const divComments = document.getElementById(`div-comments`);
        comments.forEach(comment => {
            const commentElem = document.createElement('div');
            commentElem.classList.add(`comment`);
            commentElem.textContent = `${comment.name}: ${comment.body}`;
            divComments.appendChild(commentElem);
        });
    });