import React from 'react';
import { Select, Space } from 'antd';
import './style.sass'
const SelectAd = ({ value, setValue }) => {
    const data = ['Главный экран', 'Большая', 'Маленькая'];
    const handleProvinceChange = (value) => {
        setValue(value);

    };
    return (
        <Select
            defaultValue={'Выберите категорию'}
            style={{
                width: '100%',
                marginBottom: 25,
            }}
            value={value}
            onChange={handleProvinceChange}
            options={data.map((province) => ({ label: province, value: province }))}
        />
    );
};

export default SelectAd;