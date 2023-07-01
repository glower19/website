import React, { useState } from 'react';
import { Select, Space } from 'antd';
import './style.sass'
const DropdownItem = ({ value, setValue }) => {
    const data = ['Маркетплейсы', 'Форумы', 'Магазины', 'Обменники', 'Telegram', 'СНГ', 'Фотохостинги', 'WorldWide'];
    const handleProvinceChange = (value) => {
        setValue(value);
    };
    return (

        <Select
            defaultValue={'Выберите категорию'}
            style={{
                width: '100%',
                marginBottom: 25,
                borderRadius: 38

            }}
            value={value}
            onChange={handleProvinceChange}
            options={data.map((province) => ({ label: province, value: province }))}
        />

    );
};

export default DropdownItem;    