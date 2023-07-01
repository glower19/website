import { url } from "./url";

export function getCountsFc(start, end, setState,setState2) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            start,
            end
        })
    };
    fetch(url + 'getCounts', requestOptions)
        .then(response => response.json())
        .then(data =>{
            const uniqueDevice = [
                {
                    device: 'mobile',
                    count: 0
                },
                {
                    device: 'desktop',
                    count: 0
                }
            ]
            data.map(item => {
                if (item.device === 'desktop') {
                    uniqueDevice[1].count += 1
                } else {
                    uniqueDevice[0].count += 1
                }
            })
            setState2(uniqueDevice)
            setState(data)
        } );
    
}