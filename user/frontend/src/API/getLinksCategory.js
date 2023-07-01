import { url } from "./url";

export function getLinksCategory(category, setState) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category })
    };
    fetch(url + 'getLinks', requestOptions)
        .then(response => response.json())
        .then(data => {
            data.sort((a, b) => a.important > b.important ? 1 : -1)
            setState(data)
        });
}