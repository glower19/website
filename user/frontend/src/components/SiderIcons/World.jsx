import React from 'react';
import icon from '../../assets/sliderIcons/world.png'
import './style.sass'

const World = () => {
    return (
        <img style={{
            width: 32,
            padding: 5,
        }} src={icon} alt="" />
    );
};

export default World;