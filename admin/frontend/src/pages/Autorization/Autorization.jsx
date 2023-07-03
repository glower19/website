import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { Navigate, useNavigate } from 'react-router-dom';
import './style.sass'
const Autorization = () => {
    const navigate = useNavigate()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleButton = () => {
        if (login == 'admin' && password == 'admin') {
            navigate('/main')
        } else {
            setError('Неправильный логин или пароль')
        }
    }
    return (
        <div className='authoriz'>
            <div className='authoriz-circle'></div>
            <div className='authoriz-title'>Вход</div>
            <Input className='authoriz-input' placeholder="Логин" onChange={(e) => setLogin(e.target.value)} />
            <Input className='authoriz-input' placeholder="Пароль" onChange={(e) => setPassword(e.target.value)} />
            <div className='authoriz-error'>{error}</div>
            <Button onClick={() => {
                handleButton()
            }} className='authoriz-btn' type="primary">Войти</Button>
        </div>
    );
};

export default Autorization;