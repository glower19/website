import { url } from "./url";

export function setLink(title, image, links, category) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, image, links, category })
    };
    fetch(url + 'setLink', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
}