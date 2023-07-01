import { url } from "./url";

export function setCountFc(title) {
    let device = 'desktop'
    if (window.innerWidth < 760) {
        device = 'mobile'
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title,
            device
        })
    };
    fetch(url + 'setCount', requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data)

        });
}