import { url } from "./url";

export function setAd(title, image, link) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, image, link })
    };
    fetch(url + 'setAd', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
}