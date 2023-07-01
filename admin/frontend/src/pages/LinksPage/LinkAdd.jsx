import React, { useEffect, useState, } from 'react';
import './style.sass'
import UploadItem from './Upload';
import DropdownItem from './Dropdown';
import { Input, Button } from 'antd'
import { url } from '../../API/url';
import isURL from '../../components/isUrl';
import { Checkbox } from 'antd';


const LinkAdd = ({ setAdd, itemBD, setCurrentLink }) => {
    const [isBack, setBack] = useState(false)
    const [value, setValue] = useState()
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const [title, setTitle] = useState()
    const [validation, setValidation] = useState(true)
    const [isImportant, setIsImportant] = useState(false)
    const [city, setCity] = useState()
    const [cityArray, setCityArray] = useState([])
    const [isShowCitys, setIsShowCitys] = useState(false)

    const [inputs, setInputs] = useState([
        { id: Math.random(), name: "", value: "" },
        { id: Math.random(), name: "", value: "" }]);
    useEffect(() => {
        setImageUrl(itemBD?.image)
        setValue(itemBD?.category)
        setTitle(itemBD?.title)
        setCityArray(itemBD?.cities || [])
        setIsImportant(itemBD?.important)

        if (itemBD) {
            const arr = itemBD?.links?.map(it => {
                return ({
                    id: it.id,
                    name: it.name,
                    value: it.value
                })
            })
            setInputs(arr)

        }
    }, [])
    function setLink(title, image, links, category, cities, important) {
        let isUrl = false
        links.map((item) => {
            const res = isURL(item.value)
            if (!res) {
                isUrl = item
            }
        })
        if (isUrl) {
            console.log('isUrl', isUrl)
            setValidation(false)
            return
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, image, links, category, cities, important })
        };
        fetch(url + 'setLink', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setAdd(false)
            });
    }
    const onAddInput = () => {
        console.log('click')
        setInputs((prevState) => [...prevState, { id: Math.random(), name: "", value: "" }]);
    };
    const onDeleteInput = (id) => {
        console.log('click')
        setInputs((prevState) => prevState.filter((el) => el.id !== id));
    }


    const onChangeValue = (id, text) => {
        const currentState = [...inputs];
        const currentInputIndex = currentState.findIndex((item) => item.id === id);
        currentState[currentInputIndex].value = text;
        setInputs(currentState);
    };
    const onChangeName = (id, text) => {
        const currentState = [...inputs];
        const currentInputIndex = currentState.findIndex((item) => item.id === id);
        currentState[currentInputIndex].name = text;
        setInputs(currentState);
    }
    function save() {
        setLink(title, imageUrl, inputs, value, cityArray, isImportant)
        setCurrentLink(null)
    }
    const onCheckboxChange = () => {
        setIsImportant(isImportant => !isImportant)
        console.log(isImportant)
    };
    function addCity(str) {
        setCityArray((prev) => [...prev, { id: Math.random(), value: str }])
    }
    function onDeleteCity(id) {
        setCityArray(prev => prev.filter(it => it.id !== id))
    }
    return (
        <>
            {isShowCitys ?
                <div className='showCitys'>
                    <div className='showCitysItem'>
                        <div className='black MS14'>Город</div>
                        <div onClick={() => setIsShowCitys(false)}>Х</div>

                    </div>
                    {cityArray?.map(item => {
                        return (
                            <div className='showCitysItem'>
                                <div className='MS14'>{item.value}</div>
                                <div className='border-red30'
                                    onClick={() => onDeleteCity(item.id)}>Удалить</div>

                            </div>
                        )
                    })}
                </div>
                :
                null}
            {isBack ?
                <div className='popup-back'>
                    <div className='popup-back-title'>Сохранить<br /> изменения?</div>
                    <div className='popup-back-buttons'>
                        <Button className=' font-buttons p16-60'
                            onClick={() => {
                                save()
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
                <div className='publickInfo-title'>Добавление новой ссылки</div>
                <div className='link-add-container'>
                    <div className='link-add-left'>
                        <div className='upload'>
                            <UploadItem loading={loading} setLoading={setLoading} imageUrl={imageUrl} setImageUrl={setImageUrl} />
                            <div className='upload-text'>
                                <div className='upload-title'>Загрузите фото</div>
                                <div className='upload-description'>Максимальный допустимый<br /> размер 500х500 пикселей</div>
                            </div>
                        </div>

                        <DropdownItem value={value} setValue={setValue} />
                        <Checkbox style={{
                            marginBottom: 30
                        }}
                            onChange={onCheckboxChange}>Премиум ссылка</Checkbox>
                        <div className='links-title-container'>
                            <div className="links-title">
                                Укажите название:
                            </div>
                            <Input value={title} onChange={(e) => { setTitle(e.target.value) }}
                                className='links-title-input' placeholder="Название" />
                        </div>
                        <div className='flex-betw-center'>
                            <Input
                                onChange={(e) => setCity(e.target.value)}
                                value={city}
                                className='w50 links-input'
                                placeholder="Город"
                                suffix={<div className='addCity'
                                    onClick={() => {
                                        addCity(city)
                                        setCity('')
                                    }}>
                                    +
                                </div>}
                            />
                            <div
                                className='MS15'
                                onClick={() => setIsShowCitys(true)}>Список городов</div>
                        </div>
                    </div>

                    <div className='link-add-right'>
                        <div className='links-right-inputs-container'>{inputs?.map((item) =>
                            <div className='inputs'>
                                <Input
                                    onChange={(e) => onChangeValue(item.id, e.target.value)}
                                    key={item.id}
                                    value={item.value}
                                    className='links-input'
                                    placeholder="Ссылка"
                                />

                                <Input
                                    onChange={e => onChangeName(item.id, e.target.value)}
                                    key={`${item.id}id`}
                                    value={item.name}
                                    className='links-input'
                                    placeholder="Название"
                                />
                                <Button className='red deleteButton'
                                    onClick={() => onDeleteInput(item.id)}
                                    type="primary">X</Button>
                            </div>)}

                        </div>
                        {validation ? null : <div style={{
                            color: 'red'
                        }}>Проверьте текст ссылок</div>}
                        <div className='flex-betw'>
                            <Button className='font-buttons p13-30'
                                onClick={() => onAddInput()}
                                type="primary">Добавить еще</Button></div>
                    </div>
                </div>
                <div className='link-add-buttons-container'>
                    <Button className='link-add-buttons font-buttons p13-30' onClick={() => {

                        setBack(true)
                    }} type="primary">Вернуться обратно</Button>
                    <Button className='font-buttons p13-30'
                        onClick={() => {
                            save()
                        }}
                        type="primary">Сохранить изменения</Button>

                </div>

            </div>
        </>
    );
};

export default LinkAdd;