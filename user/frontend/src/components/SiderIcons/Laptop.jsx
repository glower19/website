import React from 'react';
import icon from '../../assets/sliderIcons/laptop.png'
import './style.sass'

const Laptop = () => {
    return (
            <img style={{
                width: 32,
                padding: 5,
            }} src={icon} alt="" />
    );
};

export default Laptop;