import React, { createRef, useCallback, useState } from 'react';
import { Button } from 'antd';
import './style.sass'
import SliderList from '../../components/Slider';
import Category from './Category';
import LinksData from './LinksData';
import { useEffect } from 'react';
import { useContext } from 'react';
import ThingsContext from '../../context/context';
import { url } from '../../API/url';
const StartPage = () => {
    const setState = useContext(ThingsContext)
    const [scroll, setScroll] = useState();
    const [adBig, setAdBig] = useState('')
    const [adSmall, setAdSmall] = useState('')
    const [adMain, setAdMain] = useState('')

    const [refs, setRefs] = useState()
    const ref1 = createRef()
    const ref2 = createRef()
    const ref3 = createRef()
    const ref4 = createRef()
    const ref5 = createRef()
    const ref6 = createRef()
    const ref7 = createRef()
    const ref8 = createRef()
    const refScroll = createRef()
    const onScroll = useCallback(() => {
        setScroll(Math.round(window.scrollY))
    }, []);
    useEffect(() => {
        const y1 = ref1?.current?.getBoundingClientRect().top
        const y2 = ref2?.current?.getBoundingClientRect().top
        const y3 = ref3?.current?.getBoundingClientRect().top
        const y4 = ref4?.current?.getBoundingClientRect().top
        const y5 = ref5?.current?.getBoundingClientRect().top
        const y6 = ref6?.current?.getBoundingClientRect().top
        const y7 = ref7?.current?.getBoundingClientRect().top
        const y8 = ref8?.current?.getBoundingClientRect().top
        getOneAdFc('Главный экран', setAdMain)
        getOneAdFc('Большая', setAdBig)
        getOneAdFc('Маленькая', setAdSmall)
        setRefs([y1, y2, y3, y4, y5, y6, y7, y8])
    }, [])
    useEffect(() => {
        onScroll()
        const y1 = ref1?.current?.getBoundingClientRect().top + window.scrollY
        const y2 = ref2?.current?.getBoundingClientRect().top + window.scrollY
        const y3 = ref3?.current?.getBoundingClientRect().top + window.scrollY
        const y4 = ref4?.current?.getBoundingClientRect().top + window.scrollY
        const y5 = ref5?.current?.getBoundingClientRect().top + window.scrollY
        const y6 = ref6?.current?.getBoundingClientRect().top + window.scrollY
        const y7 = ref7?.current?.getBoundingClientRect().top + window.scrollY
        const y8 = ref8?.current?.getBoundingClientRect().top + window.scrollY
        window.addEventListener("scroll", onScroll);
        const height = Math.max(document.body.scrollHeight, document.body.offsetHeight,
            document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
        refScroll.current.style.top = `${scroll * 100 / height}%` //попробовать привязать к y1 y2 ...

        if (scroll + 10 < y1) {
            refScroll.current.style.top = `0%`
            setState('category0')
        } else if (scroll + 10 < y2) {
            refScroll.current.style.top = `12%`
            setState('category1')
        } else if (scroll + 10 < y3) {
            refScroll.current.style.top = `24%`

            setState('category2')
        } else if (scroll + 10 < y4) {
            refScroll.current.style.top = `36%`

            setState('category3')
        } else if (scroll + 10 < y5) {
            refScroll.current.style.top = `48%`

            setState('category4')
        } else if (scroll + 10 < y6) {
            refScroll.current.style.top = `60%`

            setState('category5')
        } else if (scroll + 10 < y7) {
            refScroll.current.style.top = `72%`

            setState('category6')
        } else if (scroll + 10 < y8) {
            refScroll.current.style.top = `84%`

            setState('category7')
        } else {
            refScroll.current.style.top = `96%`

            setState('category8')
        }
        return () => window.removeEventListener("scroll", onScroll);
    }, [scroll]);
    function getOneAdFc(category, setState) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ category })
        };
        fetch(url + 'getOneAd', requestOptions)
            .then(response => response.json())
            .then(data => {
                setState(data)
            });
    }
    function setAdCountsFc(link) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                link,
            })
        };
        fetch(url + 'setAdCount', requestOptions)
            .then(response => response.json())
            .then(data => { console.log(data) });

    }




    return (
        <>
            <div className='scrollBar'>
                <div ref={refScroll} className='scrollBar-item'></div>
            </div>
            <div id='category0' className='main-page-container'>
                <SliderList ad={adMain} />
                <Category />
                <div className='ad'>
                    <a href={adBig?.[0]?.link} onClick={() => setAdCountsFc(adBig?.[0]?.link)} className='ad-big'>
                        <div className='ad-reklama'>#Реклама</div>
                        <img className='ad-image' src={adBig?.[0]?.image} alt="" />
                    </a>
                    <div className='ad-small-container'>
                        <a href={adSmall?.[0]?.link} onClick={() => {
                            setAdCountsFc(adSmall?.[0]?.link)
                        }} className='ad-small mb20'>
                            <div className='ad-reklama-small'>#Реклама</div>
                            <img className='ad-image' src={adSmall?.[0]?.image} alt="" />

                        </a>
                        <a href={adSmall?.[1]?.link} onClick={() => setAdCountsFc(adSmall?.[1]?.link)} className='ad-small'>
                            <div className='ad-reklama-small'>#Реклама</div>
                            <img className='ad-image' src={adSmall?.[1]?.image} alt="" />

                        </a>
                    </div>
                </div>
            </div>
            <div id='category1' ref={ref1} className='main-page-container'>
                <div className='main-page-container-title'>Маркетплейсы</div>
                <LinksData category='Маркетплейсы' />
            </div>
            <div id='category2' ref={ref2} className='main-page-container'>
                <div className='main-page-container-title'>Форумы</div>
                <LinksData category='Форумы' />
            </div>
            <div id='category3' ref={ref3} className='main-page-container'>
                <div className='main-page-container-title'>Магазины</div>
                <LinksData category='Магазины' />
            </div>
            <div id='category4' ref={ref4} className='main-page-container'>
                <div className='main-page-container-title'>Обменники</div>
                <LinksData category='Обменники' />
            </div>
            <div id='category5' ref={ref5} className='main-page-container'>
                <div className='main-page-container-title'>Telegram</div>
                <LinksData category='Telegram' />
            </div>
            <div id='category6' ref={ref6} className='main-page-container'>
                <div className='main-page-container-title'>СНГ</div>
                <LinksData category='СНГ' />
            </div>
            <div id='category7' ref={ref7} className='main-page-container'>
                <div className='main-page-container-title'>Фотохостинги</div>
                <LinksData category='Фотохостинги' />
            </div>
            <div id='category8' ref={ref8} className='main-page-container'>
                <div className='main-page-container-title'>WorldWide</div>
                <LinksData category='WorldWide' />
            </div>
        </>
    );
};

export default StartPage;