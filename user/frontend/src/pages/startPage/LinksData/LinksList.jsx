import React, { useEffect, useState } from 'react';
import './style.sass'

const LinksList = ({ selectItem, setOnions, setTelegrams, setClearNets, item }) => {
    const [onion, setOnion] = useState([])
    const [telegram, setTelegram] = useState([])
    const [clearNet, setClearNet] = useState([])

    function linksMap(item) {
        item.links?.map(it => {
            if (it.value.slice(-5) === 'onion') {
                setOnion((prev) => [...prev, {
                                    id: it.id,
                                    value: it.value,
                                    isWork: true,
                                    isImportant: it.important,
                                    cities: it.cities
                                }])
            } else if (it.value.slice(0, 5) === 't.me/') {
                setTelegram((prev) => [...prev, {
                    id: it.id,
                    value: it.value,
                    isWork: true,
                    isImportant: it.important,
                    cities: it.cities
                }])
            } else {
                setClearNet((prev) => [...prev, {
                    id: it.id,
                    value: it.value,
                    isWork: true,
                    isImportant: it.important,
                    cities: it.cities
                }])
            }
        })
    }

    useEffect(() => {
        linksMap(item)
    }, [])
    useEffect(() => {

        if (selectItem?._id == item?._id) {
            setOnions([...onion])
            setTelegrams([...telegram])
            setClearNets([...clearNet])

        }

    }, [selectItem])
    // async function makeProxyRequest(setState, it) {
    //     const backendUrl = 'http://localhost:5000/proxy'; // URL вашего бэкэнда
    //     const targetUrl = it.value; // Целевой URL для проксирования

    //     const queryUrl = `${backendUrl}?url=${targetUrl}`;

    //     try {
    //         const response = await fetch(queryUrl);
    //         const data = await response.text();
    //         if (response.status < 600 && response.status >= 100) {

    //             setState((prev) => [...prev, {
    //                 id: it.id,
    //                 value: it.value,
    //                 isWork: true,
    //                 isImportant: it.important,
    //                 cities: it.cities
    //             }])
    //         } else {
    //             setState((prev) => [...prev, {
    //                 id: it.id,
    //                 value: it.value,
    //                 isWork: false,
    //                 isImportant: it.important,
    //                 cities: it.cities

    //             }])

    //         }

    //         // Возвращение кода состояния
    //         return response.status;
    //     } catch (error) {
    //         setState((prev) => [...prev, {
    //             id: it.id,
    //             value: it.value,
    //             isWork: false,
    //             isImportant: it.important,
    //             cities: it.cities

    //         }])
    //     }
    // }
    return (
        <>
            {onion.length
                ?
                <div className='links-list' >
                    <div className='links-list-title'>
                        Onion
                    </div>
                    <div className='links-list-items-container'>
                        {onion?.map(it => {
                            return (
                                <a target='_blank' key={`${Math.random()}clear`} className='links-list-item' href={it.value}>
                                    {/* <div style={{
                                        padding: 5,
                                        borderRadius: '50%',
                                        backgroundColor: it.isWork ? 'green' : 'red'
                                    }}></div> */}
                                    <div className='DBDBDB'>ссылка</div>
                                </a>
                            )
                        })}
                    </div>

                </div>
                :
                null
            }
            {telegram.length
                ?
                <div className='links-list' >
                    <div className='links-list-title'>
                        Telegram
                    </div>
                    <div className='links-list-items-container'>
                        {telegram?.map(it => {
                            return (
                                <a target='_blank' key={`${Math.random()}tg`} className='links-list-item' href={it.value}>
                                    {/* <div style={{
                                        padding: 5,
                                        borderRadius: '50%',
                                        backgroundColor: it.isWork ? 'green' : 'red'
                                    }}></div> */}
                                    <div className='DBDBDB'>ссылка</div>
                                </a>
                            )
                        })}
                    </div>
                </div>
                :
                null
            }
            {clearNet.length
                ?
                <div className='links-list' >
                    <div className='links-list-title'>
                        Клирнет
                    </div>
                    <div className='links-list-items-container'>
                        {clearNet?.map(it => {
                            return (
                                <>
                                    <a target='_blank' key={`${Math.random()}clear`} className='links-list-item' href={it.value}>
                                        {/* <div style={{
                                            padding: 5,
                                            borderRadius: '50%',
                                            backgroundColor: it.isWork ? 'green' : 'red'
                                        }}></div> */}
                                        <div className='DBDBDB'>ссылка</div>
                                    </a>
                                </>


                            )
                        })}
                    </div>
                </div>
                :
                null
            }
        </>
    );
};

export default LinksList;