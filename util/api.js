//이런 식으로 api를 문서화 시킬 수 있습니다.


const BASE_URL = 'http://localhost:3001/';
const BLOG_URL = 'http://localhost:3001/comments/';

export const fetchCreate = (url, inputText) => {
    fetch(url, {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(inputText)
    })
    .then(() => {
        window.location.href = BASE_URL;
    })
    .catch((error) => {
        console.error('Error', error);
    })
}

export const fetchDelete = (url, id) => {
    fetch(`${url}${id}`, {
        method: "DELETE",
    })
    .then(() => {
        window.location.href = BASE_URL;
    })
    .catch((error) => {
        console.error('Error', error);
    })
}

export const fetchPatch = (url, id, inputText) => {
    fetch(`${url}${id}`, {
        method : "PATCH",
        headers: {"Content-Type" : "Application/json"},
        body: JSON.stringify(inputText)
    })
    .then(() => {
        window.location.href = `${BLOG_URL}${id}`;
    })
    .catch((error) => {
        console.error('Error', error);
    })
}