import { url } from "./url";

export function deleteLinkFunc(title) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title })
    };
    fetch(url + 'deleteLink', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
}