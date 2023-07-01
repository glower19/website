import { url } from "./url";

export function deleteAdFunc(link) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ link })
    };
    fetch(url + 'deleteAd', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
}