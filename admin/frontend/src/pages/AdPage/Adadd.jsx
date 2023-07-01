import React, { useEffect, useState } from 'react';
import { Input, Button, DatePicker } from 'antd'
import './style.sass'
import UploadItem from '../LinksPage/Upload';
import SelectAd from './SelectAd';
import { url } from '../../API/url';
import isURL from '../../components/isUrl';
import { day, month, week } from '../../constants/constans';

const Adadd = ({ setAdd, itemBD, setCurrentLink }) => {
    const [isBack, setBack] = useState(false)
    const [category, setCategory] = useState()
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const [link, setLink] = useState()
    const [validation, setValidation] = useState(true)
    const [title, setTitle] = useState()
    const [visitesDay, setVisitesDay] = useState()
    const [visitesWeek, setVisitesWeek] = useState()
    const [visitesMonth, setVisitesMonth] = useState()
    const [visites, setVisites] = useState([])
    const [firstDate, setFirstDate] = useState()
    const [secondDate, setSecondDate] = useState()
    useEffect(() => {
        setLink(itemBD?.link)
        setCategory(itemBD?.category)
        setImageUrl(itemBD?.image)
        getAdCounts(getAdCountsFc)
    }, [])
    function getAdCounts(func) {
        const statistickDay = Date.now() - day
        const statistickWeek = Date.now() - week
        const statistickMonth = Date.now() - month
        func(itemBD?.link, statistickDay, Date.now(), setVisitesDay)
        func(itemBD?.link, statistickWeek, Date.now(), setVisitesWeek)
        func(itemBD?.link, statistickMonth, Date.now(), setVisitesMonth)
    }
    function getAdCountsFc(link, start, end, setState) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                link,
                start,
                end
            })
        };
        fetch(url + 'getAdCounts', requestOptions)
            .then(response => response.json())
            .then(data => { setState(data) });

    }

    function setAd(image, title, link, category) {
        const res = isURL(link)
        console.log(res)
        if (!res) {
            console.log('stop')
            setValidation(false)
            return
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ category, image, link, title })
        };
        fetch(url + 'setAd', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log('setAdd false')
                setAdd(false)
            });
    }
    function save() {
        console.log(link)
        setAd(imageUrl, title, link, category)
    }
    return (
        <>
            {isBack ?
                <div className='popup-back'>
                    <div className='popup-back-title'>Сохранить<br /> изменения?</div>
                    <div className='popup-back-buttons'>
                        <Button className=' font-buttons p16-60'
                            onClick={() => {
                                save()
                                setCurrentLink(null)
                                setAdd(false)
                            }}
                            type="primary">Да</Button>
                        <Button className='red font-buttons p16-60' onClick={() => {
                            setCurrentLink(null)
                            setAdd(false)
                        }} type="primary">Нет</Button>

                    </div>
                </div>
                :
                null}
            <div className='links-container'>
                <div className='publickInfo-title'>Добавление новой рекламы</div>
                <div className='link-add-container'>
                    <div className='link-add-left'>
                        <div className='upload'>
                            <UploadItem loading={loading} setLoading={setLoading} imageUrl={imageUrl} setImageUrl={setImageUrl} />
                            <div className='upload-text'>
                                <div className='upload-title'>Загрузите фото</div>
                                <div className='upload-description'>Максимальный допустимый<br /> размер 500х500 пикселей</div>
                            </div>
                        </div>
                        <div className='links-title-container'>
                            <div className="links-title">
                                Укажите ссылку:
                            </div>
                            <Input value={link} onChange={(e) => { setLink(e.target.value) }}
                                className='links-title-input' placeholder="Название" />
                            {validation ? null : <div style={{
                                color: 'red'
                            }}>Проверьте текст ссылок</div>}
                        </div>
                    </div>

                    <div className='link-add-right'>
                        <div className='links-right-inputs-container'>
                            <Input value={title} onChange={(e) => { setTitle(e.target.value) }}
                                className='links-title-input' placeholder="Название" />
                            <SelectAd value={category} setValue={setCategory} />
                        </div>
                        <div className='flex-right'></div>
                    </div>
                </div>
                <div className='link-add-buttons-container'>
                    <Button className='link-add-buttons font-buttons p13-30' onClick={() => {

                        setBack(true)
                    }} type="primary">Вернуться обратно</Button>
                    <Button className='font-buttons p13-30'
                        onClick={() => {
                            save()
                            setCurrentLink(null)
                        }}
                        type="primary">Сохранить изменения</Button>

                </div>

            </div>
            <div className='counts'>
                <div className='flex-btw'>
                    <div style={{
                        width: "30%",
                        marginBottom: 10
                    }}><div className='counts-item'>{visitesDay?.length}</div> <div className='center'>за день</div></div>
                    <div style={{
                        width: "30%",
                        marginBottom: 10
                    }}><div className='counts-item'>{visitesWeek?.length}</div> <div className='center'>за неделю</div></div>
                    <div style={{
                        width: "30%",
                        marginBottom: 10
                    }}><div className='counts-item'>{visitesMonth?.length}</div> <div className='center'>за месяц</div></div>
                </div>
                <div className='counts-item select-item'>
                    <div className='buttons'>
                        <DatePicker className='date-picker' onChange={(date, dateSctring) => setFirstDate((new Date(date)).getTime())} />
                        <DatePicker className='date-picker' onChange={(date, dateSctring) => setSecondDate((new Date(date)).getTime())} />
                        <Button onClick={() => {
                            console.log('firstDate', firstDate)
                            console.log('secondDate', secondDate)

                            getAdCountsFc(itemBD?.link, firstDate, secondDate, setVisites)
                        }} type="primary">Primary</Button>
                    </div>
                    {visites.length}
                </div>



            </div>
        </>
    );
};

export default Adadd;