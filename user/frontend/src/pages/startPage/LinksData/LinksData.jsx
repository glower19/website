import React from 'react';
import './style.sass'
import { useEffect } from 'react';
import { getLinksCategory } from '../../../API/getLinksCategory';
import { useState } from 'react';
import { Masonry } from '@mui/lab'
import LinksList from './LinksList';
import info from '../../../assets/info.png'
import krest from '../../../assets/krest.png'


const LinksData = ({ category }) => {
    const [links, setLinks] = useState()
    const [selectItem, setSelectItem] = useState([])
    const [isShow, setIsShow] = useState(false)
    const [onion, setOnions] = useState([])
    const [telegram, setTelegrams] = useState([])
    const [clearNet, setClearNets] = useState([])

    useEffect(() => {
        getLinksCategory(category, setLinks)
    }, [])
    useEffect(() => {

    }, [selectItem])
    useEffect(() => {
        console.log(selectItem)
        console.log(onion, clearNet)
    }, [isShow])
    return (
        <>
            {isShow ?
                <div className='info-popup'>
                    <div className='info-popup-header'>
                        <div className='info-popup-title'>{selectItem?.title}</div>
                        <div

                            onClick={() => setIsShow(false)}>
                            <img style={{
                                width: 20
                            }} src={krest} alt="" />
                        </div>
                    </div>
                    <div style={{
                        width: "100%"
                    }}>
                        <div className='info-popup-description'>Список всех ссылок:</div>
                        {onion.length ? <div className='font-mons mb10'>Onion</div> : null}
                        {onion.map(it => {
                            return (
                                <a target='_blank' key={`${it.id}on`} className='mb10 links-list-item-popup' href={it.value}>
                                    {/* <div style={{
                                        padding: 5,
                                        borderRadius: '50%',
                                        backgroundColor: it.isWork ? 'green' : 'red',
                                        marginRight: 10,
                                    }}></div> */}
                                    <div className='links-list-item-popup-title'>{it.value}</div>
                                </a>
                            )
                        })}
                    </div>
                    <div>
                        {telegram.length ? <div className='font-mons mb10'>telegram</div> : null}

                        {telegram.map(it => {
                            return (
                                <a target='_blank' key={`${it.id}tg`} className='mb10 links-list-item-popup' href={it.value}>
                                    {/* <div style={{
                                        padding: 5,
                                        borderRadius: '50%',
                                        backgroundColor: it.isWork ? 'green' : 'red',
                                        marginRight: 10,
                                    }}></div> */}
                                    <div className='links-list-item-popup-title'>{it.value}</div>
                                </a>
                            )
                        })}
                    </div>
                    <div>
                        {clearNet.length ? <div className='font-mons mb10'>Клирнет</div> : null}
                        {clearNet.map(it => {
                            return (
                                <a target='_blank' key={`${it.id}cl`} className='mb10 links-list-item-popup' href={it.value}>
                                    {/* <div style={{
                                        padding: 5,
                                        borderRadius: '50%',
                                        backgroundColor: it.isWork ? 'green' : 'red',
                                        marginRight: 10,
                                    }}></div> */}
                                    <div className='links-list-item-popup-title'>{it.value}</div>
                                </a>
                            )
                        })}
                    </div>
                </div>
                :
                null}
            <Masonry columns={2} spacing={2}>

                {links?.map(item => {
                    if (item.important) {
                        return (
                            <div key={item._id} className='important link-item'>
                                {item.image &&
                                    <img className='link-item-top-image-important' src={item.image} alt="" />
                                }
                                <div className='p30-40'>
                                    <div className='link-item-top'>

                                        <div className='link-item-top-title'>
                                            {item.title}
                                        </div>
                                        <div
                                            onClick={() => {
                                                setIsShow(true)
                                                setSelectItem(prev => item)
                                                // При нажатии хочу открыть попап с LinksList 
                                            }}
                                            className='info'>
                                            <img src={info} alt="" />
                                        </div>
                                    </div>
                                    <LinksList
                                        setOnions={setOnions}
                                        setTelegrams={setTelegrams}
                                        setClearNets={setClearNets}
                                        selectItem={selectItem} item={item} />
                                    <div className='cities-container'>{
                                        item.cities?.length > 3 ? <>
                                            <div>{item.cities?.[0].value}</div><div>{item.cities?.[1].value}</div> <div>и еще {item.cities?.length - 2}</div>
                                        </>
                                            :
                                            item.cities?.map(it => {
                                                return (it.value)
                                            })}</div>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div key={item._id} className='link-item'>
                                <div className='link-item-top'>
                                    {item.image &&
                                        <img className='link-item-top-image' src={item.image} alt="" />
                                    }
                                    <div className='link-item-top-title'>
                                        {item.title}
                                    </div>
                                    <div
                                        onClick={() => {
                                            setIsShow(true)
                                            setSelectItem(item)
                                            // При нажатии хочу открыть попап с LinksList 
                                        }}
                                        className='info'>
                                        <img src={info} alt="" />
                                    </div>
                                </div>
                                <LinksList
                                    setOnions={setOnions}
                                    setTelegrams={setTelegrams}
                                    setClearNets={setClearNets}
                                    selectItem={selectItem} item={item} />
                                <div className='cities-container'>{
                                    item.cities?.length > 3 ? <>
                                        <div>{item.cities?.[0].value}</div><div>{item.cities?.[1].value}</div> <div>и еще {item.cities?.length - 2}</div>
                                    </>
                                        :
                                        item.cities?.map(it => {
                                            return <div key={`${Math.random()}cities`}>{it.value}</div>
                                        })}</div>
                            </div>
                        )
                    }
                })}
            </Masonry>
        </>
    );
};

export default LinksData;