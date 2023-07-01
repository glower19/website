import React from 'react';
import icon from '../../assets/sliderIcons/cart.png'
import './style.sass'

const SiderCart = () => {
    return (
            <img style={{
                width: 32,
                padding: 5,
            }} src={icon} alt="" />
    );
};

export default SiderCart;